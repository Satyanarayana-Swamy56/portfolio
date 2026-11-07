import { ArrowUpRight } from 'lucide-react'

import { certifications, education, site, stats, toolkit } from '../../data/site'
import { Lines, Parallax, Reveal } from '../components/motion'

export function About() {
  return (
    <article className="mx-auto max-w-[1400px] px-5 pt-28 sm:px-8 sm:pt-36">
      <Lines as="h1" className="font-display text-balance text-[clamp(44px,7.5vw,112px)]" lines={['Frontend developer,', 'with an eye for detail']} />
      <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
        <Reveal>
          <Parallax src="/images/portrait.svg" alt={site.fullName} className="aspect-[3/4] rounded-image" strength={6} />
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[14px]">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="link-draw inline-flex items-center gap-1 text-muted hover:text-fg">
                  {s.label}
                  <ArrowUpRight className="size-3.5" />
                </a>
              </li>
            ))}
          </ul>
          <dl className="mt-6 space-y-1.5 border-t border-line pt-5 text-[14px]">
            <div className="flex gap-2">
              <dt className="w-20 shrink-0 text-muted">Phone</dt>
              <dd>
                <a href={`tel:${site.phoneHref}`} className="link-draw">
                  {site.phone}
                </a>
              </dd>
            </div>
            <div className="flex gap-2">
              <dt className="w-20 shrink-0 text-muted">Email</dt>
              <dd>
                <a href={`mailto:${site.email}`} className="link-draw break-all">
                  {site.email}
                </a>
              </dd>
            </div>
            <div className="flex gap-2">
              <dt className="w-20 shrink-0 text-muted">Based in</dt>
              <dd>{site.location}</dd>
            </div>
          </dl>
        </Reveal>
        <div>
          <Reveal className="text-pretty text-[19px] leading-relaxed sm:text-[22px]">
            <p>
              I am {site.fullName}, a final-year Computer Science student specialising in Artificial Intelligence and Data Science. I build web interfaces, and I care about the details most people only notice when they are missing.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 flex flex-col gap-5 text-[17px] leading-relaxed text-muted">
            <p>
              My route into it was straightforward: I started with HTML and CSS, moved to Bootstrap 5 to learn how real layouts are structured, and picked up JavaScript to make them respond. Two live builds followed — a food delivery front end and a boutique storefront — each one teaching me something about scale, spacing and the behaviour of a page on a phone.
            </p>
            <p>
              Alongside that, my degree gave me Python and a grounding in AI and data science, and AWS Academy Cloud Foundations gave me the broader picture of how a site is actually delivered. I am now going deeper into JavaScript and React, and looking for a team where I can be useful early and learn from people better than me.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-16">
            <h2 className="text-[14px] text-muted">Education</h2>
            <ol className="mt-4 divide-y divide-line border-y border-line">
              {education.map((e) => (
                <li key={e.title} className="grid gap-1 py-5 sm:grid-cols-[160px_1fr]">
                  <span className="text-[14px] tabular-nums text-faint">{e.period}</span>
                  <span>
                    <span className="block text-[16px] font-medium">{e.title}</span>
                    <span className="block text-[14.5px] text-muted">{e.detail}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.18} className="mt-16">
            <h2 className="text-[14px] text-muted">Toolkit</h2>
            <dl className="mt-4 grid gap-x-8 gap-y-6 border-y border-line py-6 sm:grid-cols-2">
              {toolkit.map((group) => (
                <div key={group.label}>
                  <dt className="text-[14px] text-faint">{group.label}</dt>
                  <dd className="mt-2 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-[8px] border border-line-strong px-2.5 py-1 text-[13px] text-fg/80">
                        {item}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.2} className="mt-16">
            <h2 className="text-[14px] text-muted">Certifications</h2>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {certifications.map((c) => (
                <li key={c.name} className="py-4">
                  <p className="text-[15.5px] font-medium">{c.name}</p>
                  <p className="mt-0.5 text-[14px] text-muted">{c.issuer}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.22} className="mt-16 grid grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-[52px] leading-none sm:text-[72px]">{s.value}</p>
                <p className="mt-2 text-[14px] leading-snug text-muted">{s.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </article>
  )
}
