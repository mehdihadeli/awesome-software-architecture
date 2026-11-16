"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { GitHubIcon, GitHubLink } from "@/components/github-link";
import { ThemeToggle } from "@/components/theme-toggle";
import type { Resource, Section, Topic } from "@/lib/content";

function getTypeClass(type: string) {
  return `type-${type.toLowerCase()}`;
}

function ResourceCard({ resource }: { resource: Resource }) {
  const isGitHub = resource.domain === "github.com";

  return (
    <article
      className={`resource-card ${getTypeClass(resource.type)} ${isGitHub ? "source-github" : ""}`}
    >
      <div className="resource-card-top">
        <span className="resource-icon" aria-hidden="true">
          {resource.icon}
        </span>
        <span className="resource-type">{resource.type}</span>
        {isGitHub && (
          <span className="source-badge github-badge">
            <GitHubIcon />
            GitHub
          </span>
        )}
      </div>
      <h3>{resource.title}</h3>
      <p>{resource.description}</p>
      <div className="resource-meta">
        <span>{resource.domain}</span>
        <span>{resource.section}</span>
      </div>
      <a
        className="resource-link"
        href={resource.url}
        target="_blank"
        rel="noreferrer"
      >
        Open resource <span aria-hidden="true">↗</span>
      </a>
    </article>
  );
}

export function TopicExplorer({
  topic,
  resources,
}: {
  topic: Topic;
  resources: Resource[];
}) {
  const [activeSection, setActiveSection] = useState(
    topic.sections[0]?.slug || "",
  );
  const activeResources = useMemo(
    () =>
      resources.filter((resource) => resource.sectionSlug === activeSection),
    [activeSection, resources],
  );
  const activeSectionInfo = topic.sections.find(
    (section) => section.slug === activeSection,
  );

  return (
    <main className="topic-page">
      <a className="skip-link" href="#section-resources">
        Skip to section resources
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
      <div className="topic-page-shell">
        <div className="breadcrumbs">
          <Link href="/">Explore</Link>
          <span>/</span>
          <span>{topic.category}</span>
          <span>/</span>
          <strong>{topic.title}</strong>
        </div>
        <header className="topic-hero">
          <p className="eyebrow">{topic.category}</p>
          <h1>{topic.title}</h1>
          <p>{topic.description}</p>
          <div className="topic-hero-band">
            <span className="topic-total">
              {topic.resourceCount} curated resources
            </span>
            <span className="topic-total">
              {topic.sections.length} section cards
            </span>
          </div>
        </header>
        <section className="section-browser" aria-label="Topic sections">
          <div className="section-browser-heading">
            <div>
              <p className="eyebrow">Navigate this topic</p>
              <h2>Sections</h2>
            </div>
            <span>{topic.sections.length} sections</span>
          </div>
          <div
            className="section-nav-list"
            role="tablist"
            aria-label="Sections"
          >
            {topic.sections.map((section: Section) => (
              <button
                role="tab"
                aria-selected={activeSection === section.slug}
                className={
                  activeSection === section.slug
                    ? `section-nav-item ${getTypeClass(section.type)} active`
                    : `section-nav-item ${getTypeClass(section.type)}`
                }
                key={section.slug}
                onClick={() => setActiveSection(section.slug)}
              >
                <span
                  className="section-nav-icon section-icon"
                  aria-hidden="true"
                >
                  {section.icon}
                </span>
                <strong className="section-nav-title">{section.title}</strong>
                <div className="section-nav-meta">
                  <small>{section.count} links</small>
                </div>
              </button>
            ))}
          </div>
        </section>
        <section className="topic-results" id="section-resources">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Current section</p>
              <h2>{activeSectionInfo?.title || "Resources"}</h2>
            </div>
            <span className="result-count">{activeResources.length} shown</span>
          </div>
          <div className="resource-grid">
            {activeResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
          {activeResources.length === 0 && (
            <div className="empty-state">
              <strong>This section has no link cards yet.</strong>
              <span>
                More source content will appear here as the catalog expands.
              </span>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
