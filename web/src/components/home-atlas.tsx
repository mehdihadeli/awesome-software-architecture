"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import Link from "next/link";
import type { Collection, Resource, ResourceType, Topic } from "@/lib/content";
import {
  buildSearchIndex,
  createSearchQuery,
  highlightText,
  rankCollections,
  runSearch,
  type HighlightPart,
  type SearchQuery,
} from "@/lib/search";

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

type SortOption = "relevance" | "topics" | "resources" | "name";

const typeEmojis: Record<ResourceType, string> = {
  Article: "📕",
  Video: "📺",
  Course: "🎓",
  Book: "📚",
  Library: "📦",
  Sample: "🧪",
  Tool: "🛠️",
  Resource: "📘",
};

const collectionEmojis: Record<string, string> = {
  ai: "✦",
  "anti-patterns": "⚠️",
  "architectural-design-principles": "🧭",
  azure: "☁️",
  "cloud-design-patterns": "☁️",
  database: "🗄️",
  devops: "⚙️",
  "domain-driven-design": "🧩",
  "design-patterns": "🧱",
  microservices: "◌",
  messaging: "✉️",
  modeling: "📐",
  security: "🛡️",
  "systems-design": "🕸️",
};

const fallbackCollectionEmojis = ["◈", "⬡", "✺", "⌘", "◍", "◇"];

const MAX_TOPIC_RESULTS = 6;
const MAX_RESOURCE_RESULTS = 10;

function getCollectionEmoji(slug: string, colorIndex: number) {
  return (
    collectionEmojis[slug] ||
    fallbackCollectionEmojis[colorIndex % fallbackCollectionEmojis.length]
  );
}

function Highlight({ text, query }: { text: string; query: SearchQuery }) {
  const parts = highlightText(text, query);

  return (
    <>
      {parts.map((part: HighlightPart, index: number) =>
        part.match ? (
          <mark key={`${index}-${part.text}`}>{part.text}</mark>
        ) : (
          <span key={`${index}-${part.text}`}>{part.text}</span>
        ),
      )}
    </>
  );
}

function SearchResultsPanel({
  query,
  searchQuery,
  results,
  activeIndex,
  setActiveIndex,
  registerResult,
  onClear,
}: {
  query: string;
  searchQuery: SearchQuery;
  results: ReturnType<typeof runSearch>;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  registerResult: (index: number, node: HTMLAnchorElement | null) => void;
  onClear: () => void;
}) {
  const topics = results.topics.slice(0, MAX_TOPIC_RESULTS);
  const resources = results.resources.slice(0, MAX_RESOURCE_RESULTS);

  return (
    <section
      className="search-results"
      id="search-results"
      aria-label="Search results"
      aria-live="polite"
    >
      <div className="search-results-head">
        <div>
          <p className="eyebrow">Search</p>
          <h2>
            {results.total === 0
              ? "No matches"
              : `${results.total} ${results.total === 1 ? "match" : "matches"}`}{" "}
            for <q>{query.trim()}</q>
          </h2>
        </div>
        <button className="search-clear" type="button" onClick={onClear}>
          Clear search
        </button>
      </div>

      {results.total === 0 && (
        <div className="empty-state">
          <strong>No topics, resources, or collections matched.</strong>
          <span>
            Check the spelling, try a shorter word, or remove the collection and
            type filters.
          </span>
        </div>
      )}

      {topics.length > 0 && (
        <div className="search-group">
          <h3 className="search-group-title">
            Topics <span>{results.topics.length}</span>
          </h3>
          <ul className="search-list">
            {topics.map((topic, index) => (
              <li key={`topic-${topic.id}`}>
                <Link
                  className={`search-result${activeIndex === index ? " active" : ""}`}
                  href={`/topics/${topic.slug}`}
                  ref={(node) => registerResult(index, node)}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <span className="search-result-icon" aria-hidden="true">
                    {topic.icon}
                  </span>
                  <span className="search-result-body">
                    <span className="search-result-title">
                      <Highlight text={topic.title} query={searchQuery} />
                    </span>
                    <span className="search-result-desc">
                      <Highlight text={topic.description} query={searchQuery} />
                    </span>
                    <span className="search-result-meta">
                      <span className="search-result-badge">
                        {topic.category}
                      </span>
                      {topic.resourceCount} resources · {topic.sectionCount}{" "}
                      sections
                    </span>
                  </span>
                  <span className="search-result-arrow" aria-hidden="true">
                    ↗
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          {results.topics.length > topics.length && (
            <p className="search-more">
              Showing {topics.length} of {results.topics.length} matching
              topics.
            </p>
          )}
        </div>
      )}

      {resources.length > 0 && (
        <div className="search-group">
          <h3 className="search-group-title">
            Resources <span>{results.resources.length}</span>
          </h3>
          <ul className="search-list">
            {resources.map((resource, offset) => {
              const index = topics.length + offset;

              return (
                <li key={`resource-${resource.id}`}>
                  <a
                    className={`search-result${activeIndex === index ? " active" : ""}`}
                    href={resource.url}
                    target="_blank"
                    rel="noreferrer"
                    ref={(node) => registerResult(index, node)}
                    onMouseEnter={() => setActiveIndex(index)}
                  >
                    <span className="search-result-icon" aria-hidden="true">
                      {resource.icon}
                    </span>
                    <span className="search-result-body">
                      <span className="search-result-title">
                        <Highlight text={resource.title} query={searchQuery} />
                      </span>
                      <span className="search-result-desc">
                        <Highlight
                          text={resource.description}
                          query={searchQuery}
                        />
                      </span>
                      <span className="search-result-meta">
                        <span className="search-result-badge">
                          {resource.type}
                        </span>
                        {resource.topic} · {resource.domain}
                      </span>
                    </span>
                    <span className="search-result-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
          {results.resources.length > resources.length && (
            <p className="search-more">
              Showing {resources.length} of {results.resources.length} matching
              resources.
            </p>
          )}
        </div>
      )}
    </section>
  );
}

function CollectionCard({
  collection,
  topics,
  colorIndex,
}: {
  collection: Collection;
  topics: Topic[];
  colorIndex: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const [subCollectionsExpanded, setSubCollectionsExpanded] = useState(false);
  const typePreviews = (
    Object.entries(collection.typeCounts) as [ResourceType, number][]
  ).filter(([, count]) => count > 0);

  return (
    <article
      className={`collection-card collection-color-${colorIndex % 6}${expanded ? " expanded" : ""}`}
    >
      <Link
        className="collection-card-link"
        href={`/collections/${collection.slug}`}
      >
        <div className="collection-card-top">
          <span className="collection-icon" aria-hidden="true">
            {getCollectionEmoji(collection.slug, colorIndex)}
          </span>
          <div className="collection-card-heading">
            {collection.subCollectionCount > 0 && (
              <span className="collection-meta">
                {collection.subCollectionCount} sub-collections
              </span>
            )}
            <span className="collection-meta">
              {collection.topicCount} topics
            </span>
          </div>
        </div>
        <h3>{collection.title}</h3>
        <p>{collection.description}</p>
        <div className="collection-stats">
          <span>{collection.subCollectionCount} sub-collections</span>
          <span>{collection.topicCount} topics</span>
        </div>
      </Link>
      {collection.subCollections.length > 0 && (
        <div
          className={`collection-subgroups${subCollectionsExpanded ? " expanded" : ""}`}
        >
          <button
            className="collection-expand collection-subgroups-toggle"
            type="button"
            aria-expanded={subCollectionsExpanded}
            aria-controls={`collection-subcollections-${collection.slug}`}
            onClick={() => setSubCollectionsExpanded((value) => !value)}
          >
            <span className="collection-expand-label">
              <span className="collection-expand-icon" aria-hidden="true" />
              <span>
                {subCollectionsExpanded
                  ? "Hide sub-collections"
                  : "Browse sub-collections"}
              </span>
            </span>
            <span className="collection-expand-hint">
              {subCollectionsExpanded ? "Collapse" : "View list"}
            </span>
          </button>
          {subCollectionsExpanded && (
            <div
              className="collection-subgroups-list"
              id={`collection-subcollections-${collection.slug}`}
            >
              {collection.subCollections.map((subCollection) => {
                const subCollectionTopics = topics.filter((topic) =>
                  topic.path.startsWith(
                    `${collection.slug}/${subCollection.slug}/`,
                  ),
                );

                return (
                  <div className="collection-subgroup" key={subCollection.slug}>
                    <Link
                      className="collection-subgroup-link"
                      href={`/collections/${collection.slug}`}
                    >
                      <strong>{subCollection.title}</strong>
                      <span aria-hidden="true">↗</span>
                    </Link>
                    <span>{subCollection.topicCount} topics</span>
                    {subCollectionTopics.length > 0 && (
                      <div className="collection-subgroup-topics">
                        {subCollectionTopics.map((topic) => (
                          <Link href={`/topics/${topic.slug}`} key={topic.slug}>
                            {topic.title} <span aria-hidden="true">↗</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
      <button
        className="collection-expand"
        type="button"
        aria-expanded={expanded}
        aria-controls={`collection-topics-${collection.slug}`}
        onClick={() => setExpanded((value) => !value)}
      >
        <span className="collection-expand-label">
          <span className="collection-expand-icon" aria-hidden="true" />
          <span>
            {expanded ? "Hide topics" : `Browse ${topics.length} topics`}
          </span>
        </span>
        <span className="collection-expand-hint">
          {expanded ? "Collapse" : "View list"}
        </span>
      </button>
      {expanded && (
        <div
          className="collection-topic-list"
          id={`collection-topics-${collection.slug}`}
        >
          <div className="collection-topic-heading">
            <strong>Topics in collection</strong>
            <span>{topics.length} total</span>
          </div>
          <div className="collection-topic-links">
            {topics.map((topic) => (
              <Link href={`/topics/${topic.slug}`} key={topic.slug}>
                <span>
                  <span className="collection-topic-arrow" aria-hidden="true">
                    ↗
                  </span>
                  {topic.title}
                </span>
                <small>{topic.resourceCount} resources</small>
              </Link>
            ))}
          </div>
        </div>
      )}
      <div className="collection-type-list" aria-label="Resource types">
        {typePreviews.map(([type, count]) => (
          <span
            className={`collection-type type-${type.toLowerCase()}`}
            key={type}
          >
            <span className="collection-type-emoji" aria-hidden="true">
              {typeEmojis[type]}
            </span>
            <span>{type}</span>
            <strong>{count}</strong>
          </span>
        ))}
      </div>
      <Link className="card-link" href={`/collections/${collection.slug}`}>
        Open collection <span aria-hidden="true">↗</span>
      </Link>
    </article>
  );
}

export function HomeAtlas({
  collections,
  topics,
  resources,
}: {
  collections: Collection[];
  topics: Topic[];
  resources: Resource[];
}) {
  const [query, setQuery] = useState("");
  const [activeCollection, setActiveCollection] = useState("All");
  const [activeType, setActiveType] = useState<"All" | ResourceType>("All");
  const [sortBy, setSortBy] = useState<SortOption>("relevance");
  const [activeIndex, setActiveIndex] = useState(0);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const resultRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  const searchIndex = useMemo(
    () => buildSearchIndex({ collections, topics, resources }),
    [collections, resources, topics],
  );
  const searchQuery = useMemo(() => createSearchQuery(query), [query]);
  const hasQuery = !searchQuery.isEmpty;

  const results = useMemo(
    () =>
      runSearch(searchIndex, searchQuery, {
        collection: activeCollection === "All" ? null : activeCollection,
        type: activeType === "All" ? null : activeType,
      }),
    [activeCollection, activeType, searchIndex, searchQuery],
  );

  const visibleCollections = useMemo(() => {
    const ranked = rankCollections(searchIndex, searchQuery, {
      collection: activeCollection === "All" ? null : activeCollection,
      type: activeType === "All" ? null : activeType,
    });
    const bySlug = new Map(
      collections.map((collection) => [collection.slug, collection]),
    );
    const list = ranked
      .map((match) => bySlug.get(match.slug))
      .filter((collection): collection is Collection => Boolean(collection));

    if (sortBy === "topics") {
      return [...list].sort(
        (left, right) => right.topicCount - left.topicCount,
      );
    }
    if (sortBy === "resources") {
      return [...list].sort(
        (left, right) => right.resourceCount - left.resourceCount,
      );
    }
    if (sortBy === "name") {
      return [...list].sort((left, right) =>
        left.title.localeCompare(right.title),
      );
    }

    return list;
  }, [
    activeCollection,
    activeType,
    collections,
    searchIndex,
    searchQuery,
    sortBy,
  ]);

  const displayedResultCount =
    Math.min(results.topics.length, MAX_TOPIC_RESULTS) +
    Math.min(results.resources.length, MAX_RESOURCE_RESULTS);

  useEffect(() => {
    if (!hasQuery) return;
    resultRefs.current[activeIndex]?.scrollIntoView({ block: "nearest" });
  }, [activeIndex, hasQuery]);

  useEffect(() => {
    function handleShortcut(event: globalThis.KeyboardEvent) {
      if (event.key !== "/" || event.metaKey || event.ctrlKey || event.altKey) {
        return;
      }

      const target = event.target as HTMLElement | null;
      const tagName = target?.tagName;

      if (
        tagName === "INPUT" ||
        tagName === "TEXTAREA" ||
        tagName === "SELECT" ||
        target?.isContentEditable
      ) {
        return;
      }

      event.preventDefault();
      searchInputRef.current?.focus();
      searchInputRef.current?.select();
    }

    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);

  const hasFilters =
    query.trim() || activeCollection !== "All" || activeType !== "All";

  function resetFilters() {
    setQuery("");
    setActiveCollection("All");
    setActiveType("All");
    setSortBy("relevance");
    setActiveIndex(0);
  }

  function clearQuery() {
    setQuery("");
    setActiveIndex(0);
    searchInputRef.current?.focus();
  }

  function handleSearchKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Escape") {
      if (query) {
        event.preventDefault();
        clearQuery();
      } else {
        searchInputRef.current?.blur();
      }
      return;
    }

    if (!hasQuery || displayedResultCount === 0) return;

    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((current) => {
        const next = event.key === "ArrowDown" ? current + 1 : current - 1;
        return (next + displayedResultCount) % displayedResultCount;
      });
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      const target =
        resultRefs.current[Math.min(activeIndex, displayedResultCount - 1)] ??
        resultRefs.current[0];
      target?.click();
    }
  }

  return (
    <>
      <section className="home-search-strip" id="collections">
        <div className="atlas-search atlas-search-simple" role="search">
          <span className="atlas-search-icon" aria-hidden="true">
            ⌕
          </span>
          <input
            ref={searchInputRef}
            type="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setActiveIndex(0);
            }}
            onKeyDown={handleSearchKeyDown}
            placeholder="Search topics, resources, sections, or sources..."
            aria-label="Search topics, resources, sections, or sources"
            enterKeyHint="go"
          />
          <small className="search-hint">
            {hasQuery
              ? `${results.total} ${results.total === 1 ? "result" : "results"}`
              : query.trim()
                ? "Keep typing…"
                : "Press / to search"}
          </small>
          {query.trim() && (
            <button
              className="search-clear search-clear-inline"
              type="button"
              onClick={clearQuery}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
          <kbd aria-hidden="true">/</kbd>
        </div>
        <div className="advanced-search" aria-label="Advanced search filters">
          <div className="advanced-search-group">
            <span className="advanced-search-label">Collection</span>
            <div className="atlas-filter-row">
              <button
                className={`atlas-chip tag-collection-all${activeCollection === "All" ? " active" : ""}`}
                type="button"
                aria-pressed={activeCollection === "All"}
                onClick={() => {
                  setActiveCollection("All");
                  setActiveIndex(0);
                }}
              >
                All <strong>{collections.length}</strong>
              </button>
              {collections.map((collection) => (
                <button
                  className={`atlas-chip tag-collection-${collections.indexOf(collection) % 6}${activeCollection === collection.slug ? " active" : ""}`}
                  type="button"
                  aria-pressed={activeCollection === collection.slug}
                  key={collection.slug}
                  onClick={() => {
                    setActiveCollection(collection.slug);
                    setActiveIndex(0);
                  }}
                >
                  {collection.title} <strong>{collection.topicCount}</strong>
                </button>
              ))}
            </div>
          </div>
          <div className="advanced-search-group">
            <span className="advanced-search-label">Resource type</span>
            <div className="atlas-filter-row">
              <button
                className={`atlas-chip tag-all-types${activeType === "All" ? " active" : ""}`}
                type="button"
                aria-pressed={activeType === "All"}
                onClick={() => {
                  setActiveType("All");
                  setActiveIndex(0);
                }}
              >
                All types
              </button>
              {resourceTypes.map((type) => {
                const count = collections.reduce(
                  (total, collection) => total + collection.typeCounts[type],
                  0,
                );
                return (
                  <button
                    className={`atlas-chip type-${type.toLowerCase()}${activeType === type ? " active" : ""}`}
                    type="button"
                    aria-pressed={activeType === type}
                    key={type}
                    onClick={() => {
                      setActiveType(type);
                      setActiveIndex(0);
                    }}
                  >
                    {type} <strong>{count}</strong>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="advanced-search-footer">
            <span>
              {hasQuery
                ? `${results.total} results · ${visibleCollections.length} of ${collections.length} collections`
                : `Showing ${visibleCollections.length} of ${collections.length} collections`}
            </span>
            <label>
              Sort by
              <select
                value={sortBy}
                onChange={(event) =>
                  setSortBy(event.target.value as SortOption)
                }
              >
                <option value="relevance">Relevance</option>
                <option value="topics">Topics</option>
                <option value="resources">Resources</option>
                <option value="name">Name</option>
              </select>
            </label>
            {hasFilters && (
              <button
                className="filter-reset"
                type="button"
                onClick={resetFilters}
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </section>

      {hasQuery && (
        <SearchResultsPanel
          query={query}
          searchQuery={searchQuery}
          results={results}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          registerResult={(index, node) => {
            resultRefs.current[index] = node;
          }}
          onClear={clearQuery}
        />
      )}

      <section className="atlas-section" id="topics">
        <div className="atlas-section-head">
          <div>
            <p className="eyebrow">Collections</p>
            <h2>{hasQuery ? "Matching collections" : "Choose collection"}</h2>
          </div>
          <span className="section-count">
            {visibleCollections.length} shown
          </span>
        </div>
        <div className="collection-grid">
          {visibleCollections.map((collection) => (
            <CollectionCard
              key={collection.slug}
              collection={collection}
              colorIndex={collections.indexOf(collection)}
              topics={topics.filter((topic) =>
                topic.path.startsWith(`${collection.slug}/`),
              )}
            />
          ))}
        </div>
      </section>

      {visibleCollections.length === 0 && (
        <div className="empty-state">
          <strong>No collections matched.</strong>
          <span>
            Try collection name, topic name, section name, or source domain.
          </span>
        </div>
      )}
    </>
  );
}
