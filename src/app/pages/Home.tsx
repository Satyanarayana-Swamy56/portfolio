import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, Plus } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router'

import { certifications, projects, services, site } from '../../data/site'
import { Lines, Magnetic, Parallax, Reveal } from '../components/motion'
import { WorkCard } from '../components/WorkCard'
import { cx } from '../lib/cx'

const ease = [0.22, 1, 0.36, 1] as const

export function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden">
        <HeroField />
        <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-10 pt-28 sm:px-8 sm:pb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13.5px] text-muted sm:text-[14px]"
          >
            <span>{site.fullName}</span>
            <span className="hidden h-3 w-px bg-line-strong sm:block" />
            <span>{site.role}</span>
            <span className="inline-flex items-center gap-1.5 rounded-[8px] border border-line-strong px-2 py-0.5 text-[12px] text-fg/70">
              <span className="round size-1.5 rounded-full bg-accent" />
              Available for work
            </span>
          </motion.p>
          <h1 className="font-display text-[clamp(64px,13.5vw,210px)]">
            {site.name.split(' ').map((word, i) => (
              <span key={word} className="block overflow-hidden pb-[0.06em] -mb-[0.06em]">
                <motion.span className="block" initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 1.1, delay: 0.25 + i * 0.12, ease }}>
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.7, ease }} className="mt-10 border-t border-fg/15 pt-6">
            <p className="max-w-xl text-pretty text-[17px] leading-relaxed text-muted sm:text-[19px]">{site.intro}</p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href="#work" className="inline-flex h-12 items-center gap-2 rounded-[14px] bg-fg px-6 text-[15px] font-medium text-bg transition-colors hover:bg-[#2b2925]">
                See my work
                <ArrowUpRight className="size-4 rotate-45" />
              </a>
              <Magnetic>
                <a href={`mailto:${site.email}`} className="inline-flex h-12 items-center gap-2 rounded-[14px] border border-line-strong px-6 text-[15px] font-medium transition-colors hover:border-fg">
                  Email me
                  <ArrowUpRight className="size-4" />
                </a>
              </Magnetic>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-line py-5" aria-hidden>
        <ul className="font-display flex w-max animate-marquee items-center gap-10 whitespace-nowrap text-[28px] text-fg/70 sm:text-[36px]">
          {[...site.marquee, ...site.marquee].map((item, i) => (
            <li key={i} className="flex items-center gap-10">
              {item}
              <span className="round size-2 rounded-full bg-accent" />
            </li>
          ))}
        </ul>
      </div>

      {/* Work */}
      <section id="work" className="mx-auto max-w-[1400px] scroll-mt-20 px-5 pt-24 sm:px-8 sm:pt-32">
        <div className="flex items-end justify-between">
          <Lines as="h2" className="font-display text-[44px] sm:text-[64px]" lines={['Selected work']} />
          <Reveal className="hidden max-w-[220px] text-right text-[14px] leading-relaxed text-muted sm:block">
            Live builds and self-initiated projects
          </Reveal>
        </div>
        <div className="mt-12 grid gap-x-6 gap-y-14 md:grid-cols-2 lg:gap-x-8 lg:gap-y-20">
          {projects.map((p, i) => (
            <WorkCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>

      {/* About teaser */}
      <section className="mx-auto max-w-[1400px] px-5 pt-32 sm:px-8 sm:pt-44">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal>
            <Parallax src="/images/portrait.svg" alt={site.fullName} className="aspect-[3/4] max-w-[460px] rounded-image" strength={6} />
          </Reveal>
          <div className="flex flex-col justify-center">
            <Lines
              as="h2"
              className="font-display text-balance text-[40px] sm:text-[56px] lg:text-[64px]"
              lines={['I build interfaces', 'that hold up', 'on any screen']}
            />
            <Reveal delay={0.2} className="mt-8 max-w-xl text-pretty text-[17px] leading-relaxed text-muted">
              <p>
                I am in the final stretch of a B.Tech in Computer Science (AI &amp; Data Science), and most of my time outside coursework goes into frontend work: laying out pages, naming components properly, and fixing the one breakpoint that always breaks first.
              </p>
              <p className="mt-4">
                I like clear structure, real content and a page that loads before anyone has time to leave it. Based in {site.location}, open to work anywhere.
              </p>
            </Reveal>
            <Reveal delay={0.3} className="mt-8 flex flex-wrap items-center gap-6">
              <Link to="/about" className="link-draw inline-flex items-center gap-1.5 text-[15px] font-medium">
                More about me
                <ArrowUpRight className="size-4" />
              </Link>
              <a href={site.github} target="_blank" rel="noreferrer" className="link-draw inline-flex items-center gap-1.5 text-[15px] text-muted">
                GitHub
                <ArrowUpRight className="size-4" />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-[1400px] px-5 pt-32 sm:px-8 sm:pt-44">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div>
            <Lines as="h2" className="font-display text-[40px] sm:text-[56px]" lines={['What I bring']} />
            <Reveal delay={0.1} className="mt-4 max-w-xs text-[15px] leading-relaxed text-muted">
              Four areas I can contribute to from the first week, without a long ramp-up.
            </Reveal>
          </div>
          <Services />
        </div>
      </section>

      {/* Certifications */}
      <section className="mx-auto max-w-[1400px] px-5 pt-32 sm:px-8 sm:pt-44">
        <Certifications />
      </section>
    </>
  )
}

// Slow colour fields behind the hero: the accent, a coral and a warm peach,
// blurred and drifting, fading into the paper before the intro line. The
// grain keeps it from reading as a flat gradient.
function HeroField() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,#000_60%,transparent_96%)]">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.6, ease }} className="absolute inset-0">
        <div className="round absolute -top-[25%] right-[-12%] h-[95%] w-[70%] animate-drift-a rounded-full bg-[radial-gradient(closest-side,rgb(47_59_255/0.72),transparent)] blur-3xl" />
        <div className="round absolute -top-[10%] left-[-12%] h-[80%] w-[62%] animate-drift-b rounded-full bg-[radial-gradient(closest-side,rgb(255_106_61/0.62),transparent)] blur-3xl" />
        <div className="round absolute top-[22%] left-[32%] h-[70%] w-[56%] animate-drift-c rounded-full bg-[radial-gradient(closest-side,rgb(255_196_120/0.7),transparent)] blur-3xl" />
        <div className="round absolute top-[45%] right-[12%] h-[50%] w-[40%] animate-drift-b rounded-full bg-[radial-gradient(closest-side,rgb(196_170_255/0.55),transparent)] blur-3xl" />
      </motion.div>
      <div className="grain absolute inset-0" />
    </div>
  )
}

function Services() {
  const [open, setOpen] = useState(0)
  return (
    <ul className="border-t border-line">
      {services.map((s, i) => {
        const isOpen = open === i
        return (
          <li key={s.title} className="border-b border-line">
            <button type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)} className="group flex w-full items-center gap-6 py-7 text-left">
              <span className="w-10 shrink-0 text-[14px] tabular-nums text-faint">0{i + 1}</span>
              <span className={cx('font-display flex-1 text-[32px] transition-colors sm:text-[44px]', isOpen ? 'text-fg' : 'text-fg/60 group-hover:text-fg')}>{s.title}</span>
              <span className={cx('grid size-10 shrink-0 place-items-center rounded-[12px] border border-line-strong transition-colors duration-300', isOpen && 'border-fg bg-fg text-bg')}>
                <Plus className={cx('size-4 transition-transform duration-500', isOpen && 'rotate-45')} />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.45, ease }} className="overflow-hidden">
                  <p className="max-w-xl pb-8 pl-16 text-pretty text-[16px] leading-relaxed text-muted">{s.body}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        )
      })}
    </ul>
  )
}

function Certifications() {
  return (
    <Reveal>
      <div className="rounded-[32px] bg-fg px-6 py-14 text-bg sm:px-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <h2 className="font-display text-[40px] leading-[1.02] sm:text-[52px]">Certified, and still learning</h2>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-bg/60">
              Three credentials behind the coursework, each one finished outside class. Certificates and verification links available on request.
            </p>
            <a
              href={`mailto:${site.email}?subject=Certificate%20verification`}
              className="link-draw mt-7 inline-flex items-center gap-1.5 text-[15px] text-bg/85 hover:text-bg"
            >
              Ask for the certificates
              <ArrowUpRight className="size-4" />
            </a>
          </div>
          <ul className="divide-y divide-bg/15 border-t border-bg/15">
            {certifications.map((c) => (
              <li key={c.name} className="py-5">
                <p className="text-[17px] font-medium leading-snug">{c.name}</p>
                <p className="mt-1 text-[13.5px] text-bg/55">{c.issuer}</p>
                <p className="mt-2 max-w-md text-[14px] leading-relaxed text-bg/60">{c.detail}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-12 border-t border-bg/15 pt-6 text-[14px] text-bg/55">
          Currently going deeper into JavaScript, React and core computer science fundamentals.
        </div>
      </div>
    </Reveal>
  )
}
