import Link from "next/link";
import { notFound } from "next/navigation";
import { GitHubLink } from "@/components/github-link";
import { ThemeToggle } from "@/components/theme-toggle";
import { getCatalog } from "@/lib/content";

type SubCollectionPageProps = {
  params: Promise<{ slug: string; subCollection: string }>;
};

export function generateStaticParams() {
  return getCatalog().collections.flatMap((collection) =>
    collection.subCollections.map((subCollection) => ({
      slug: collection.slug,
      subCollection: subCollection.slug,
    })),
  );
}

export default async function SubCollectionPage({
  params,
}: SubCollectionPageProps) {
  const { slug, subCollection: subCollectionSlug } = await params;
  const catalog = getCatalog();
  const collection = catalog.collections.find((item) => item.slug === slug);
  const subCollection = collection?.subCollections.find(
    (item) => item.slug === subCollectionSlug,
  );

  if (!collection || !subCollection) notFound();

  const topics = catalog.topics.filter((topic) =>
    topic.path.startsWith(`${collection.slug}/${subCollection.slug}/`),
  );

  return (
    <main>
      <a className="skip-link" href="#subcollection-topics">
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
        <Link className="back-link" href={`/collections/${collection.slug}`}>
          ← Back to {collection.title}
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
          <Link href={`/collections/${collection.slug}`}>
            {collection.title}
          </Link>
          <span>/</span>
          <strong>{subCollection.title}</strong>
        </div>
        <header className="collection-hero subcollection-hero">
          <p className="eyebrow">Sub-collection</p>
          <h1>{subCollection.title}</h1>
          <p>
            Topics and resources curated under the {collection.title}{" "}
            collection.
          </p>
          <div className="collection-hero-meta">
            <span>{subCollection.topicCount} topics</span>
            <span>{collection.title}</span>
          </div>
        </header>
        <section className="atlas-section" id="subcollection-topics">
          <div className="atlas-section-head">
            <div>
              <p className="eyebrow">Topics</p>
              <h2>Explore {subCollection.title}</h2>
            </div>
            <span className="section-count">{topics.length} topics</span>
          </div>
          <div className="topic-preview-grid">
            {topics.map((topic) => (
              <Link
                className="topic-preview-card"
                href={`/topics/${topic.slug}`}
                key={topic.slug}
              >
                <div className="topic-preview-top">
                  <span className="topic-preview-label">{topic.category}</span>
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
      </div>
    </main>
  );
}
