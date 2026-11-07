import { ArrowUpRight } from 'lucide-react'
import { useState, type FormEvent } from 'react'

import { site } from '../../data/site'
import { Lines, Magnetic, Reveal } from './motion'
import { useLocalTime } from './Nav'

export function Footer() {
  const time = useLocalTime()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  // The site is static, so the form hands the message to the visitor's email
  // client rather than pretending to deliver it from the browser.
  function submit(e: FormEvent) {
    e.preventDefault()
    const subject = `Portfolio enquiry${form.name ? ` from ${form.name}` : ''}`
    const body = `${form.message}\n\n${form.name}\n${form.email}`
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const field = 'h-14 w-full rounded-control border border-line-strong bg-transparent px-5 text-[15px] placeholder:text-faint transition-colors focus:border-fg focus:outline-none'

  return (
    <footer id="contact" className="mt-32 border-t border-line sm:mt-44">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
          <div>
            <Lines as="h2" className="font-display text-[clamp(48px,8vw,120px)]" lines={['Hiring for a', <>frontend <span className="text-accent">role</span>?</>]} />
            <Reveal delay={0.2} className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Magnetic>
                <a href={`mailto:${site.email}`} className="inline-flex h-14 items-center gap-2 rounded-[16px] bg-fg px-7 text-[16px] font-medium text-bg transition-colors hover:bg-[#2b2925]">
                  {site.email}
                  <ArrowUpRight className="size-4" />
                </a>
              </Magnetic>
              <p className="text-[14px] text-muted">{site.available}</p>
            </Reveal>
            <Reveal delay={0.25} className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-2 text-[14px] text-muted">
              <a href={`tel:${site.phoneHref}`} className="link-draw">
                {site.phone}
              </a>
              <a href={site.github} target="_blank" rel="noreferrer" className="link-draw inline-flex items-center gap-1">
                GitHub
                <ArrowUpRight className="size-3.5" />
              </a>
              <a href={site.linkedin} target="_blank" rel="noreferrer" className="link-draw inline-flex items-center gap-1">
                LinkedIn
                <ArrowUpRight className="size-3.5" />
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            {sent ? (
              <div className="flex h-full min-h-[320px] flex-col justify-center rounded-card bg-surface-2/60 p-8">
                <p className="font-display text-[36px]">Thank you</p>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  Your email app should be open with the message ready. If it did not open, write to{' '}
                  <a href={`mailto:${site.email}`} className="link-draw text-fg">
                    {site.email}
                  </a>{' '}
                  or call {site.phone}.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-3">
                <p className="text-[13.5px] text-muted">A short message opens in your email app, addressed to me.</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <input required placeholder="Your name" className={field} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  <input required type="email" placeholder="Email" className={field} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
                <textarea
                  required
                  placeholder="The role, the team, and what you are building"
                  className={`${field} h-auto min-h-[140px] resize-none py-4`}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
                <button type="submit" className="h-14 rounded-control border border-fg text-[15px] font-medium transition-colors hover:bg-fg hover:text-bg">
                  Send an email
                </button>
              </form>
            )}
          </Reveal>
        </div>

        <div className="mt-24 grid gap-8 border-t border-line pt-8 text-[14px] sm:grid-cols-3">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="link-draw text-muted transition-colors hover:text-fg">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-faint sm:text-center">
            {site.location}, {time}
          </p>
          <p className="text-faint sm:text-right">
            © {new Date().getFullYear()} {site.fullName}
          </p>
        </div>
      </div>
    </footer>
  )
}
