import Link from "next/link";
import { notFound } from "next/navigation";
import { GitHubLink } from "@/components/github-link";
import { ThemeToggle } from "@/components/theme-toggle";
import { getCatalog } from "@/lib/content";

type CollectionPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getCatalog().collections.map((collection) => ({
    slug: collection.slug,
  }));
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = await params;
  const catalog = getCatalog();
  const collection = catalog.collections.find((item) => item.slug === slug);

  if (!collection) notFound();

  const topics = catalog.topics.filter((topic) =>
    topic.path.startsWith(`${collection.slug}/`),
  );
  const subCollectionGroups = collection.subCollections.map(
    (subCollection) => ({
      ...subCollection,
      topics: topics.filter((topic) =>
        topic.path.startsWith(`${collection.slug}/${subCollection.slug}/`),
      ),
    }),
  );
  const directTopics = topics.filter((topic) => {
    const pathParts = topic.path.split("/");
    return pathParts.length === 2 && pathParts[0] === collection.slug;
  });

  return (
    <main>
      <a className="skip-link" href="#collection-topics">
        Skip to topics
      </a>
      <nav className="site-nav" aria-label="Main navigation">
        <Link className="brand" href="/">
          <span className="brand-mark">A</span>
          <span>
            Awesome
            <br />
            <em>Architecture</em>
          </span>
        </Link>
        <Link className="back-link" href="/">
          ← Back to Awesome Architecture
        </Link>
        <div className="nav-actions">
          <GitHubLink />
          <ThemeToggle />
        </div>
      </nav>
      <div className="collection-page-shell">
        <div className="breadcrumbs">
          <Link href="/">Explore</Link>
          <span>/</span>
          <strong>{collection.title}</strong>
        </div>
        <header className="collection-hero">
          <p className="eyebrow">Collection</p>
          <h1>{collection.title}</h1>
          <p>{collection.description}</p>
          <div className="collection-hero-meta">
            <span>{collection.topicCount} topics</span>
            <span>{collection.resourceCount} resources</span>
            <span>{collection.sectionCount} sections</span>
          </div>
        </header>
        <section className="atlas-section" id="collection-topics">
          <div className="atlas-section-head">
            <div>
              <p className="eyebrow">Browse collection</p>
              <h2>Choose a sub-collection</h2>
            </div>
            <span className="section-count">
              {collection.subCollectionCount} sub-collections
            </span>
          </div>
          <nav className="subcollection-index" aria-label="Sub-collections">
            {subCollectionGroups.map((subCollection) => (
              <Link
                className="subcollection-card"
                href={`/collections/${collection.slug}/${subCollection.slug}`}
                key={subCollection.slug}
              >
                <span className="subcollection-card-top">
                  <strong>{subCollection.title}</strong>
                  <span aria-hidden="true">↗</span>
                </span>
                <span>{subCollection.topics.length} topics</span>
              </Link>
            ))}
            {directTopics.length > 0 && (
              <a className="subcollection-card" href="#direct-topics">
                <span className="subcollection-card-top">
                  <strong>Topics</strong>
                  <span aria-hidden="true">↓</span>
                </span>
                <span>{directTopics.length} topics</span>
              </a>
            )}
          </nav>
        </section>
        {directTopics.length > 0 && (
          <section
            className="atlas-section subcollection-section"
            id="direct-topics"
          >
            <div className="atlas-section-head">
              <div>
                <p className="eyebrow">Topics</p>
                <h2>Topics</h2>
              </div>
              <span className="section-count">
                {directTopics.length} topics
              </span>
            </div>
            <div className="topic-preview-grid">
              {directTopics.map((topic) => (
                <Link
                  className="topic-preview-card"
                  href={`/topics/${topic.slug}`}
                  key={topic.slug}
                >
                  <div className="topic-preview-top">
                    <span className="topic-preview-label">
                      {topic.category}
                    </span>
                    <span className="topic-preview-meta">
                      {topic.sections.length} sections
                    </span>
                  </div>
                  <h3>{topic.title}</h3>
                  <p>{topic.description}</p>
                  <div className="topic-preview-footer">
                    <span>{topic.resourceCount} resources</span>
                    <span>Open topic</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
