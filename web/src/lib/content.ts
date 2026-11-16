import fs from "node:fs";
import path from "node:path";

export type ResourceType =
  | "Article"
  | "Video"
  | "Course"
  | "Book"
  | "Library"
  | "Sample"
  | "Tool"
  | "Resource";

export type Topic = {
  slug: string;
  title: string;
  description: string;
  category: string;
  path: string;
  resourceCount: number;
  sections: Section[];
};

export type Collection = {
  slug: string;
  title: string;
  description: string;
  topicCount: number;
  resourceCount: number;
  sectionCount: number;
  subCollectionCount: number;
  subCollections: SubCollection[];
  typeCounts: Record<ResourceType, number>;
};

export type SubCollection = {
  slug: string;
  title: string;
  topicCount: number;
};

export type Section = {
  slug: string;
  title: string;
  type: ResourceType;
  icon: string;
  count: number;
};

export type Resource = {
  id: string;
  title: string;
  url: string;
  description: string;
  type: ResourceType;
  topic: string;
  topicSlug: string;
  domain: string;
  section: string;
  sectionSlug: string;
  icon: string;
};

const docsRoot = path.resolve(process.cwd(), "..", "docs");
const sectionTypes: Record<string, ResourceType> = {
  resources: "Resource",
  resource: "Resource",
  articles: "Article",
  article: "Article",
  videos: "Video",
  video: "Video",
  courses: "Course",
  course: "Course",
  books: "Book",
  book: "Book",
  libraries: "Library",
  library: "Library",
  samples: "Sample",
  sample: "Sample",
  tools: "Tool",
  tool: "Tool",
};

const categoryByPath: Record<string, string> = {
  ai: "AI Engineering",
  foundations: "Foundations",
  "distributed-systems": "Distributed Systems",
  data: "Data",
  "cloud-platforms": "Cloud Platforms",
  devops: "DevOps",
  "software-architecture": "Software Architecture",
};

const resourceTypes: ResourceType[] = [
  "Article",
  "Video",
  "Course",
  "Book",
  "Library",
  "Sample",
  "Tool",
  "Resource",
];

function titleFromSlug(slug: string) {
  return slug
    .replace(/\.md$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function stripMarkdown(value: string) {
  return value
    .replace(/[`*_>#]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function getMarkdownFiles(directory: string): string[] {
  if (!fs.existsSync(directory)) return [];

  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory()
      ? getMarkdownFiles(entryPath)
      : entry.name.endsWith(".md")
        ? [entryPath]
        : [];
  });
}

function getImmediateDirectories(directory: string): string[] {
  if (!fs.existsSync(directory)) return [];

  return fs
    .readdirSync(directory, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
}

function parseSectionType(heading: string): ResourceType {
  const normalized = heading
    .replace(/[📘📕📺📚📦🚀📝]/gu, "")
    .replace(/&/g, "and")
    .trim()
    .toLowerCase();

  for (const [section, type] of Object.entries(sectionTypes)) {
    if (normalized.includes(section)) return type;
  }

  return "Resource";
}

function sectionIconForType(type: ResourceType) {
  return {
    Article: "📕",
    Video: "📺",
    Course: "🎓",
    Book: "📚",
    Library: "📦",
    Sample: "🧪",
    Tool: "🛠️",
    Resource: "📘",
  }[type];
}

function parseSectionIcon(heading: string, type: ResourceType) {
  return (
    heading.match(/📘|📕|📺|📚|📦|🚀|📝|🎓|🧰|🛠️|🧪/u)?.[0] ||
    sectionIconForType(type)
  );
}

function parseSectionTitle(heading: string) {
  return stripMarkdown(
    heading.replace(/📘|📕|📺|📚|📦|🚀|📝|🎓|🧰|🛠️|🧪/gu, ""),
  );
}

function parseResources(
  markdown: string,
  topic: string,
  topicSlug: string,
  sourcePath: string,
): Resource[] {
  const resources: Resource[] = [];
  const seenUrls = new Set<string>();
  let currentType: ResourceType = "Resource";
  let currentSection = "Resources";
  let currentIcon = sectionIconForType(currentType);
  const lines = markdown.split(/\r?\n/);

  for (const line of lines) {
    const heading = line.match(/^#{2,4}\s+(.+)/);
    if (heading) {
      currentType = parseSectionType(heading[1]);
      currentIcon = parseSectionIcon(heading[1], currentType);
      currentSection = parseSectionTitle(heading[1]);
      continue;
    }

    const link = line.match(
      /^\s*[-*]\s+\[([^\]]+)\]\((https?:\/\/[^)]+)\)(?:\s+-\s*(.*))?\s*$/,
    );
    if (!link) continue;

    const url = link[2];
    if (seenUrls.has(url)) continue;
    seenUrls.add(url);

    const title = stripMarkdown(link[1]);
    const description = stripMarkdown(
      link[3] || `A curated ${currentType.toLowerCase()} related to ${topic}.`,
    );
    const id = `${sourcePath}:${currentSection}:${url}`;
    const domain = new URL(url).hostname.replace(/^www\./, "");

    resources.push({
      id,
      title,
      url,
      description,
      type: currentType,
      topic,
      topicSlug,
      domain,
      section: currentSection,
      sectionSlug: slugify(currentSection),
      icon: currentIcon,
    });
  }

  return resources;
}

export function getCatalog() {
  const collectionSlugs = getImmediateDirectories(docsRoot).filter(
    (slug) => getMarkdownFiles(path.join(docsRoot, slug)).length > 0,
  );
  const sourceFiles = getMarkdownFiles(docsRoot).filter((file) => {
    const relative = path.relative(docsRoot, file).replaceAll("\\", "/");
    return collectionSlugs.some((slug) => relative.startsWith(`${slug}/`));
  });

  const resources: Resource[] = [];
  const topics = new Map<string, Topic>();

  for (const file of sourceFiles) {
    const relative = path.relative(docsRoot, file).replaceAll("\\", "/");
    const [folder, ...rest] = relative.split("/");
    const slug = relative.replace(/\.md$/, "").replaceAll("/", "-");
    const markdown = fs.readFileSync(file, "utf8");
    const firstHeading =
      markdown.match(/^#\s+(.+)$/m)?.[1] ||
      titleFromSlug(rest.at(-1) || folder);
    const pageResources = parseResources(
      markdown,
      firstHeading,
      slug,
      relative,
    );
    const description = stripMarkdown(
      markdown
        .split(/\r?\n/)
        .find(
          (line) =>
            line.trim() && !line.startsWith("#") && !line.startsWith("-"),
        ) || `Explore curated resources about ${firstHeading}.`,
    );

    const sections = [
      ...new Map(
        pageResources.map((resource) => [
          resource.sectionSlug,
          {
            slug: resource.sectionSlug,
            title: resource.section,
            type: resource.type,
            icon: resource.icon,
            count: pageResources.filter(
              (item) => item.sectionSlug === resource.sectionSlug,
            ).length,
          },
        ]),
      ).values(),
    ];

    topics.set(slug, {
      slug,
      title: firstHeading,
      description,
      category: categoryByPath[folder] || folder,
      path: relative,
      resourceCount: pageResources.length,
      sections,
    });
    resources.push(...pageResources);
  }

  const topicList = [...topics.values()];
  const collections = collectionSlugs.map((slug) => {
    const title = categoryByPath[slug] || titleFromSlug(slug);
    const collectionTopics = topicList.filter((topic) =>
      topic.path.startsWith(`${slug}/`),
    );
    const subCollections = getImmediateDirectories(
      path.join(docsRoot, slug),
    ).map((subCollection) => ({
      slug: subCollection,
      title: titleFromSlug(subCollection),
      topicCount: collectionTopics.filter((topic) =>
        topic.path.startsWith(`${slug}/${subCollection}/`),
      ).length,
    }));
    const typeCounts = Object.fromEntries(
      resourceTypes.map((type) => [type, 0]),
    ) as Record<ResourceType, number>;

    collectionTopics.forEach((topic) => {
      resources
        .filter((resource) => resource.topicSlug === topic.slug)
        .forEach((resource) => {
          typeCounts[resource.type] += 1;
        });
    });

    return {
      slug,
      title,
      description: `Curated topic maps and sectioned references for ${title.toLowerCase()}.`,
      topicCount: collectionTopics.length,
      resourceCount: collectionTopics.reduce(
        (sum, topic) => sum + topic.resourceCount,
        0,
      ),
      sectionCount: collectionTopics.reduce(
        (sum, topic) => sum + topic.sections.length,
        0,
      ),
      subCollectionCount: subCollections.length,
      subCollections,
      typeCounts,
    } satisfies Collection;
  });

  return { topics: topicList, resources, collections };
}
