import { projectsData } from "@/constants";
import React from "react";

/**
 * ProjectCard
 * Screenshot fades into the card body (no divider); title overlaps the faded area.
 *
 * Requires Tailwind CSS v3+ with `darkMode: "media"` (default) or `"class"`.
 * Fonts (optional): Sora 600/700 + JetBrains Mono 400/500, then in tailwind.config.js:
 *   fontFamily: { display: ["Sora", "system-ui", "sans-serif"], mono: ["JetBrains Mono", "ui-monospace", "monospace"] }
 *
 * Props
 *  title, description, tags[], href, image, imageAlt
 *  imagePosition  CSS object-position for the screenshot crop (default "top")
 *  fadeStart      (0-100) % of image height where the fade begins   (default 48)
 *  overlap        (px)    how far the text is pulled up into the fade (default 64)
 */
export function ProjectCardV2({
  title,
  description,
  tags = [],
  href = "#",
  image,
  imageAlt = "",
  imagePosition = "top",
  fadeStart = 48,
  overlap = 64,
}: { title: string; description: string; tags?: string[]; href?: string; image?: string; imageAlt?: string; imagePosition?: string; fadeStart?: number; overlap?: number }) {
  const mask = `linear-gradient(to bottom, #000 ${fadeStart}%, rgba(0,0,0,.55) 78%, transparent 100%)`;

  const hasLink = href !== '#';

  return (
    <article className="group flex flex-col overflow-hidden rounded-[14px] bg-navy-light shadow-[0_1px_0_rgba(255,255,255,.04)_inset,0_18px_40px_-22px_rgba(0,0,0,.7)] transition-colors duration-200 hover:bg-[#172c55]">
      {/* Media – masked so it dissolves into the card colour */}
      <div
        className="relative aspect-video overflow-hidden"
        style={{ maskImage: mask, WebkitMaskImage: mask }}
      >
        {image ? (
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            style={{ objectPosition: imagePosition }}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        ) : (
          <div
            aria-hidden="true"
            className="h-full w-full bg-gradient-to-br from-[#1d3a6b] via-[#2b5ca8] to-[#3ec5ff]"
          />
        )}
      </div>

      {/* Body – pulled up into the faded zone */}
      <div
        className="relative flex flex-1 flex-col gap-3 px-6 pb-6"
        style={{ marginTop: -overlap }}
      >
        <h3 className="text-[1.3rem] font-bold leading-tight tracking-tight text-bright">
          {title}
        </h3>

        <p className="max-w-[62ch] text-sm leading-[1.7] text-slate-light">
          {description}
        </p>

        {(tags.length > 0 || hasLink) && (
          <ul className="mt-1.5 flex flex-wrap items-center gap-2">
            {hasLink && (
              <li>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${title}`}
                  className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/[.07] text-slate-light transition-colors duration-200 hover:bg-heading hover:text-navy focus-visible:bg-heading focus-visible:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-heading"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </a>
              </li>
            )}
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-white/[.07] px-[11px] py-[5px] text-[0.72rem] text-slate-light"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

/* ───────────── Project data + demo grid ───────────── */

// Put the screenshots in /public/images/projects/ (or change this base path).
const IMG = "/images/projects";

const stack = ["PHP", "CodeIgniter 3", "MySQL", "jQuery", "AJAX", "Bootstrap 4", "HTML5", "CSS3", "JavaScript"];

export const projects = [
  {
    title: "Custom Content Management System (CMS)",
    description:
      "A web application for publishing, editing, organizing and deleting content, plus maintenance, all from one central interface.",
    tags: ["PHP", "CodeIgniter 3", "MySQL", "AdminLTE", "Bootstrap 4"],
    image: `${IMG}/ui-cms.png`,
    imageAlt: "CMS dashboard with user, site and package counts",
    href: "#",
  },
  {
    title: "pH Care",
    description:
      "Official website of pH Care, a leading feminine hygiene brand offering a range of products for women's health and wellness.",
    tags: ["PHP", "CodeIgniter 3", "MySQL", "Docker", ...stack.slice(3)],
    image: `${IMG}/ui-phcare.jpg`,
    imageAlt: "pH Care homepage with the OdorProTech campaign",
    href: "#",
  },
  {
    title: "Lactezin",
    description:
      "Official website of Lactezin, the first over-the-counter drug registered anti-acne treatment in the Philippines.",
    tags: stack,
    image: `${IMG}/ui-lactezin.jpg`,
    imageAlt: "Lactezin homepage banner",
    href: "#",
  },
  {
    title: "Fortima",
    description:
      "Official website of Fortima, a dietary supplement that helps boost skin health and immunity.",
    tags: stack,
    image: `${IMG}/ui-fortima.jpg`,
    imageAlt: "Fortima homepage hero",
    href: "#",
  },
  {
    title: "GynePro",
    description:
      "Official website of GynePro, a feminine wash brand that helps maintain intimate hygiene and freshness during red days.",
    tags: stack,
    image: `${IMG}/ui-gynepro.jpg`,
    imageAlt: "GynePro homepage hero",
    href: "#",
  },
  {
    title: "UCC Trade Office",
    description:
      "Order entry system for Unahco Central Credit's trade office, with order forms, draft orders, order tracking and processed order reports.",
    tags: [], // TODO: add stack
    image: `${IMG}/ui-ucc.jpg`,
    imageAlt: "UCC Trade Office order form and draft orders",
    href: "#",
  },
  {
    title: "Communities of One",
    description:
      "Sales dashboard with announcements, YTD performance, gross-up growth and monthly sales against annual quota charts.",
    tags: [], // TODO: add stack
    image: `${IMG}/ui-c1ulisys.jpg`,
    imageAlt: "Communities of One dashboard with sales charts",
    href: "#",
  },
  {
    title: "Digital Business Card",
    description:
      "Employee portal for managing contact details and social links, with a QR business card that can be downloaded or sent by email.",
    tags: [], // TODO: add stack
    image: `${IMG}/ui-ebusinesscard.jpg`,
    imageAlt: "Digital business card employee details form and QR card",
    href: "#",
  },
  {
    title: "JobFinder",
    description:
      "Careers portal with searchable job listings, salary, date and job type filters, and one-click apply.",
    tags: [], // TODO: add stack
    image: `${IMG}/ui-jobfinder.jpg`,
    imageAlt: "JobFinder job listings with filters",
    href: "#",
  },
  {
    title: "SAMS",
    description:
      "Audit management system for audit reports, report templates, report analysis, supplier records and an audit trail.",
    tags: [], // TODO: add stack
    image: `${IMG}/ui-sams.jpg`,
    imageAlt: "SAMS dashboard with audit report counts",
    href: "#",
  },
  {
    title: "Trading App",
    description:
      "Live trade blotter with a scrolling ticker, buy and sell volume summary, filters, and amend or cancel actions.",
    tags: [], // TODO: add stack
    image: `${IMG}/ui-trading-app.png`,
    imageAlt: "Trading app blotter with live feed and trade table",
    href: "#",
  },
];

export default function ProjectCardGrid({ data } : { data: typeof projectsData}) {
  return (
    <section className="bg-navy px-6 py-10">
      <div className="mx-auto grid max-w-[1240px] gap-6 [grid-template-columns:repeat(auto-fill,minmax(min(100%,340px),1fr))]">
        {data.map((p) => (
          <ProjectCardV2 key={p.title} image={p.imageUrl} {...p} />
        ))}
      </div>
    </section>
  );
}