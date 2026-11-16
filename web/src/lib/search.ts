import type { Collection, Resource, ResourceType, Topic } from "@/lib/content";

export type SearchField = {
  text: string;
  weight: number;
};

export type SearchQuery = {
  raw: string;
  phrase: string;
  tokens: string[];
  isEmpty: boolean;
};

export type IndexedTopic = {
  kind: "topic";
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  collectionSlug: string;
  resourceCount: number;
  sectionCount: number;
  sectionTypes: ResourceType[];
  icon: string;
  fields: SearchField[];
};

export type IndexedResource = {
  kind: "resource";
  id: string;
  title: string;
  description: string;
  url: string;
  domain: string;
  type: ResourceType;
  topic: string;
  collectionSlug: string;
  section: string;
  icon: string;
  fields: SearchField[];
};

export type IndexedCollection = {
  slug: string;
  fields: SearchField[];
  typeCounts: Record<ResourceType, number>;
};

export type SearchIndex = {
  topics: IndexedTopic[];
  resources: IndexedResource[];
  collections: IndexedCollection[];
};

export type TopicMatch = IndexedTopic & { score: number };
export type ResourceMatch = IndexedResource & { score: number };
export type CollectionMatch = IndexedCollection & { score: number };

export type SearchResults = {
  topics: TopicMatch[];
  resources: ResourceMatch[];
  total: number;
};

export type SearchFilters = {
  collection?: string | null;
  type?: ResourceType | null;
};

const typeIcons: Record<ResourceType, string> = {
  Article: "📕",
  Video: "📺",
  Course: "🎓",
  Book: "📚",
  Library: "📦",
  Sample: "🧪",
  Tool: "🛠️",
  Resource: "📘",
};

export function normalizeSearchText(value: string) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\bc\+\+/gi, " cpp ")
    .replace(/\bc#/gi, " csharp ")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

export function createSearchQuery(value: string): SearchQuery {
  const raw = value.trim();
  const phrase = normalizeSearchText(raw);
  const tokens = phrase
    ? [...new Set(phrase.split(" ").filter((token) => token.length > 1))]
    : [];

  return { raw, phrase, tokens, isEmpty: tokens.length === 0 };
}

function makeField(value: string | undefined, weight: number): SearchField | null {
  const text = normalizeSearchText(value ?? "");
  return text ? { text, weight } : null;
}

function compactFields(fields: Array<SearchField | null>): SearchField[] {
  return fields.filter((field): field is SearchField => Boolean(field));
}

/**
 * Resources without an authored description get a generated placeholder from
 * the content parser. Indexing it would match every resource in a topic when
 * the topic name is searched, so it stays out of the search fields.
 */
const generatedDescription =
  /^A curated (?:article|video|course|book|library|sample|tool|resource) related to .+\.$/i;

function searchableDescription(description: string) {
  return generatedDescription.test(description.trim()) ? "" : description;
}

/**
 * Matches a token only at the start of a normalized word, so "rag" matches
 * "RAG" and "ragged" but never "storage".
 */
function matchQuality(text: string, token: string) {
  let start = 0;
  let best = 0;

  while (start <= text.length) {
    const index = text.indexOf(token, start);
    if (index === -1) break;

    if (index === 0 || text[index - 1] === " ") {
      const end = index + token.length;
      const wholeWord = end === text.length || text[end] === " ";
      best = Math.max(best, wholeWord ? 1 : 0.75);
      if (best === 1) return 1;
    }

    start = index + 1;
  }

  return best;
}

export function scoreFields(fields: SearchField[], query: SearchQuery) {
  if (query.isEmpty) return 0;

  let total = 0;

  for (const token of query.tokens) {
    let best = 0;

    for (const field of fields) {
      const quality = matchQuality(field.text, token);
      if (quality > 0) {
        best = Math.max(best, quality * field.weight);
      }
    }

    if (best === 0) return 0;
    total += best;
  }

  if (query.phrase) {
    let bonus = 0;

    for (const field of fields) {
      if (field.text === query.phrase) {
        bonus = Math.max(bonus, 24);
      } else if (field.text.startsWith(`${query.phrase} `)) {
        bonus = Math.max(bonus, 14);
      } else if (` ${field.text} `.includes(` ${query.phrase} `)) {
        bonus = Math.max(bonus, 8);
      }
    }

    total += bonus;
  }

  return total;
}

function compareMatches(
  left: { score: number; title: string },
  right: { score: number; title: string },
) {
  return right.score - left.score || left.title.localeCompare(right.title);
}

export function buildSearchIndex({
  collections,
  topics,
  resources,
}: {
  collections: Collection[];
  topics: Topic[];
  resources: Resource[];
}): SearchIndex {
  const topicPathBySlug = new Map(topics.map((topic) => [topic.slug, topic.path]));
  const collectionSlugForResource = (resource: Resource) => {
    const topicPath = topicPathBySlug.get(resource.topicSlug);
    return topicPath?.split("/")[0] ?? resource.topicSlug.split("-")[0];
  };

  const indexedTopics: IndexedTopic[] = topics.map((topic) => ({
    kind: "topic",
    id: topic.slug,
    slug: topic.slug,
    title: topic.title,
    description: topic.description,
    category: topic.category,
    collectionSlug: topic.path.split("/")[0],
    resourceCount: topic.resourceCount,
    sectionCount: topic.sections.length,
    sectionTypes: [...new Set(topic.sections.map((section) => section.type))],
    icon: "◈",
    fields: compactFields([
      makeField(topic.title, 12),
      makeField(topic.description, 3),
      makeField(topic.category, 3),
      makeField(
        topic.sections.map((section) => section.title).join(" "),
        5,
      ),
    ]),
  }));

  const indexedResources: IndexedResource[] = resources.map((resource) => ({
    kind: "resource",
    id: resource.id,
    title: resource.title,
    description: resource.description,
    url: resource.url,
    domain: resource.domain,
    type: resource.type,
    topic: resource.topic,
    collectionSlug: collectionSlugForResource(resource),
    section: resource.section,
    icon: typeIcons[resource.type],
    fields: compactFields([
      makeField(resource.title, 12),
      makeField(searchableDescription(resource.description), 3),
      makeField(resource.domain, 5),
      makeField(resource.section, 4),
      makeField(resource.type, 2),
      makeField(resource.topic, 4),
    ]),
  }));

  const indexedCollections: IndexedCollection[] = collections.map((collection) => {
    const collectionTopics = topics.filter((topic) =>
      topic.path.startsWith(`${collection.slug}/`),
    );
    const collectionResources = indexedResources.filter(
      (resource) => resource.collectionSlug === collection.slug,
    );

    return {
      slug: collection.slug,
      typeCounts: collection.typeCounts,
      fields: compactFields([
        makeField(collection.title, 14),
        makeField(collection.description, 3),
        makeField(
          collection.subCollections
            .map((subCollection) => subCollection.title)
            .join(" "),
          5,
        ),
        makeField(
          collectionTopics
            .map(
              (topic) =>
                `${topic.title} ${topic.description} ${topic.sections
                  .map((section) => section.title)
                  .join(" ")}`,
            )
            .join(" "),
          3,
        ),
        makeField(
          collectionResources
            .map(
              (resource) =>
                `${resource.title} ${searchableDescription(resource.description)} ${resource.domain}`,
            )
            .join(" "),
          2,
        ),
      ]),
    };
  });

  return {
    topics: indexedTopics,
    resources: indexedResources,
    collections: indexedCollections,
  };
}

export function runSearch(
  index: SearchIndex,
  query: SearchQuery,
  filters: SearchFilters = {},
): SearchResults {
  if (query.isEmpty) {
    return { topics: [], resources: [], total: 0 };
  }

  const collection = filters.collection ?? null;
  const type = filters.type ?? null;

  const topicMatches = index.topics
    .filter((topic) => !collection || topic.collectionSlug === collection)
    .filter((topic) => !type || topic.sectionTypes.includes(type))
    .map((topic) => ({ ...topic, score: scoreFields(topic.fields, query) }))
    .filter((topic) => topic.score > 0)
    .sort(compareMatches);

  const resourceMatches = index.resources
    .filter((resource) => !collection || resource.collectionSlug === collection)
    .filter((resource) => !type || resource.type === type)
    .map((resource) => ({
      ...resource,
      score: scoreFields(resource.fields, query),
    }))
    .filter((resource) => resource.score > 0)
    .sort(compareMatches);

  return {
    topics: topicMatches,
    resources: resourceMatches,
    total: topicMatches.length + resourceMatches.length,
  };
}

export function rankCollections(
  index: SearchIndex,
  query: SearchQuery,
  filters: SearchFilters = {},
): CollectionMatch[] {
  const collection = filters.collection ?? null;
  const type = filters.type ?? null;

  return index.collections
    .filter((item) => !collection || item.slug === collection)
    .filter((item) => !type || item.typeCounts[type] > 0)
    .map((item) => ({
      ...item,
      score: query.isEmpty ? 0 : scoreFields(item.fields, query),
    }))
    .filter((item) => query.isEmpty || item.score > 0)
    .sort((left, right) => right.score - left.score);
}

export type HighlightPart = {
  text: string;
  match: boolean;
};

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function highlightText(
  text: string,
  query: SearchQuery,
): HighlightPart[] {
  if (!text) return [];
  if (query.isEmpty) return [{ text, match: false }];

  const ranges: Array<[number, number]> = [];

  for (const token of query.tokens) {
    const pattern = new RegExp(
      `(^|[^\\p{L}\\p{N}])(${escapeRegExp(token)})`,
      "giu",
    );

    for (const match of text.matchAll(pattern)) {
      const start = (match.index ?? 0) + match[1].length;
      ranges.push([start, start + match[2].length]);
    }
  }

  if (ranges.length === 0) return [{ text, match: false }];

  ranges.sort((left, right) => left[0] - right[0]);
  const merged: Array<[number, number]> = [];

  for (const [start, end] of ranges) {
    const last = merged.at(-1);
    if (last && start <= last[1]) {
      last[1] = Math.max(last[1], end);
    } else {
      merged.push([start, end]);
    }
  }

  const parts: HighlightPart[] = [];
  let cursor = 0;

  for (const [start, end] of merged) {
    if (start > cursor) {
      parts.push({ text: text.slice(cursor, start), match: false });
    }
    parts.push({ text: text.slice(start, end), match: true });
    cursor = end;
  }

  if (cursor < text.length) {
    parts.push({ text: text.slice(cursor), match: false });
  }

  return parts;
}
