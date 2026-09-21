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
 *  ctaLabel       button text (default "Visit site")
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
  ctaLabel = "Visit site",
}: { title: string; description: string; tags?: string[]; href?: string; image?: string; imageAlt?: string; imagePosition?: string; fadeStart?: number; overlap?: number; ctaLabel?: string }) {
  const mask = `linear-gradient(to bottom, #000 ${fadeStart}%, rgba(0,0,0,.55) 78%, transparent 100%)`;

  return (
    <article className="group flex flex-col overflow-hidden rounded-[14px] bg-white shadow-[0_1px_2px_rgba(15,28,58,.06),0_18px_40px_-24px_rgba(15,28,58,.35)] transition-colors duration-200 dark:bg-[#14264a] dark:shadow-[0_1px_0_rgba(255,255,255,.04)_inset,0_18px_40px_-22px_rgba(0,0,0,.7)] dark:hover:bg-[#172c55]">
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
        <h3 className="font-display text-[1.3rem] font-bold leading-tight tracking-tight text-[#0f1c3a] dark:text-[#f4f7ff]">
          {title}
        </h3>

        <p className="max-w-[62ch] font-mono text-sm leading-[1.7] text-[#4b5a7a] dark:text-[#9fb0d0]">
          {description}
        </p>

        {tags.length > 0 && (
          <ul className="mt-1.5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-[#eaf0fb] px-[11px] py-[5px] font-mono text-[0.72rem] text-[#2b3c62] dark:bg-white/[.07] dark:text-[#c3cfe8]"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        {/* mt-auto pins the CTA to the bottom so cards line up in a grid */}
        <a
          href={href}
          className="mt-auto self-start rounded-lg bg-[#0a7fc2]/10 px-[18px] py-[9px] font-mono text-[0.8rem] font-medium tracking-wide text-[#0a7fc2] ring-1 ring-inset ring-[#0a7fc2]/45 transition-colors duration-200 hover:bg-[#0a7fc2] hover:text-white hover:ring-[#0a7fc2] focus-visible:bg-[#0a7fc2] focus-visible:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[#0a7fc2] motion-reduce:transition-none dark:bg-[#3ec5ff]/10 dark:text-[#3ec5ff] dark:ring-[#3ec5ff]/45 dark:hover:bg-[#3ec5ff] dark:hover:text-[#06202e] dark:hover:ring-[#3ec5ff] dark:focus-visible:bg-[#3ec5ff] dark:focus-visible:text-[#06202e] dark:focus-visible:outline-[#3ec5ff]"
        >
          {ctaLabel}
          <span className="sr-only"> – {title}</span>
        </a>
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
    <section className="min-h-screen bg-[#eef2fa] px-6 py-10 dark:bg-[#0c1730]">
      <div className="mx-auto grid max-w-[1240px] gap-6 [grid-template-columns:repeat(auto-fill,minmax(min(100%,340px),1fr))]">
        {data.map((p) => (
          <ProjectCardV2 key={p.title} image={p.imageUrl} {...p} />
        ))}
      </div>
    </section>
  );
}