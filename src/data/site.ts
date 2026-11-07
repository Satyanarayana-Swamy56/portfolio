// Everything about me lives here. The pages read from this file.

export const site = {
  name: 'Satya Swamy',
  fullName: 'Dangeti Satyanarayana Swamy',
  role: 'Frontend developer',
  roleLong: 'Frontend developer · B.Tech CSE (AI & Data Science)',
  location: 'Andhra Pradesh, India',
  timezone: 'Asia/Kolkata',
  email: 'trendyswamy2002@gmail.com',
  phone: '+91 95159 15188',
  phoneHref: '+919515915188',
  available: 'Open to frontend internships and junior roles',
  intro:
    'B.Tech Computer Science (AI & Data Science) student and frontend developer. I build clean, mobile-first interfaces with HTML, CSS, JavaScript and Bootstrap 5, and I care about how they behave at 320px as much as at 1440px.',
  github: 'https://github.com/Trendyswamy2002',
  linkedin: 'https://www.linkedin.com/in/satya-swamy',
  socials: [
    { label: 'GitHub', href: 'https://github.com/Trendyswamy2002' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/satya-swamy' },
    { label: 'Email', href: 'mailto:trendyswamy2002@gmail.com' },
  ],
  marquee: [
    'Responsive UI',
    'Bootstrap 5',
    'HTML5 & CSS3',
    'JavaScript',
    'Python',
    'Mobile first',
    'Accessibility',
    'Git & GitHub',
  ],
}

export interface Project {
  slug: string
  title: string
  client: string
  category: string
  year: string
  cover: string
  tint: string
  summary: string
  role: string[]
  stack: string[]
  deliverables: string[]
  link?: string
  body: string[]
  size: 'large' | 'small'
}

export const projects: Project[] = [
  {
    slug: 'freshfetch',
    title: 'FreshFetch',
    client: 'Live project',
    category: 'Food delivery frontend',
    year: '2026',
    cover: '/images/freshfetch.svg',
    tint: '#f6e4d5',
    summary:
      'A mobile-first food ordering interface: browse the menu, build a basket and check out on any screen size without the layout breaking.',
    role: ['Frontend', 'Responsive layout', 'UI components'],
    stack: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript'],
    deliverables: ['Landing and menu pages', 'Reusable cards and nav', 'Responsive grid', 'Cross-browser pass'],
    body: [
      'FreshFetch is a food delivery front end built around one constraint: most people will open it on a phone, standing up, deciding what to eat. Every layout starts as a single column and only gains columns when there is room.',
      'I designed a small set of reusable pieces — the restaurant card, the category rail, the basket summary — so new menu sections can be added without writing new CSS. Spacing, type sizes and image ratios come from the same scale on every page.',
      'The result is one interface that behaves consistently on phone, tablet and desktop, with images and stylesheets kept light so the first screen paints quickly on a slow connection.',
    ],
    size: 'large',
  },
  {
    slug: 'chicstyle',
    title: 'ChicStyle',
    client: 'Live project',
    category: 'Boutique e-commerce',
    year: '2025',
    cover: '/images/chicstyle.svg',
    tint: '#e5e7dc',
    summary:
      'A category-driven boutique storefront where the grid, the type and the product hierarchy do the selling.',
    role: ['Frontend', 'Layout system', 'Visual polish'],
    stack: ['HTML5', 'CSS3', 'Bootstrap 5'],
    deliverables: ['Category pages', 'Product grid', 'Lookbook sections', 'Responsive QA'],
    body: [
      'ChicStyle needed to show a growing catalogue without looking crowded. The page is built around a category-first structure: one clear entry point per collection, then a grid that stays calm as products are added.',
      'I used responsive grids with consistent image ratios and a restrained type scale, so a product card looks the same whether it sits in a two-column phone layout or a four-column desktop one. Layout stability was checked at several resolutions to stop images pushing content around as they load.',
      'The structure is deliberately simple enough for the owner to extend: a new category is a copy of a section and a swap of the images.',
    ],
    size: 'small',
  },
  {
    slug: 'portfolio',
    title: 'This Portfolio',
    client: 'Self-initiated',
    category: 'Design and build',
    year: '2026',
    cover: '/images/portfolio.svg',
    tint: '#e9e3d8',
    summary:
      'The site you are reading: a fast, quiet personal site with motion that knows when to stop.',
    role: ['Design', 'Frontend', 'Deployment'],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    deliverables: ['Design tokens', 'Custom motion', 'Accessibility pass', 'GitHub Pages deploy'],
    body: [
      'I wanted a portfolio that reads like a well-set page rather than a template: one typeface with character, one accent colour, and a lot of whitespace doing the work. All of the content lives in a single data file, so the site can grow without touching layout code.',
      'The animation is intentionally small — lines rising into place, a slow drift of colour behind the hero, images that move a little slower than the page. Everything switches off when the visitor prefers reduced motion, and the whole thing is keyboard navigable.',
      'It is built with React, TypeScript, Tailwind CSS and Vite, and deployed as a static site through GitHub Pages so anyone can open it without an account.',
    ],
    size: 'small',
  },
]

export const bySlug = (slug: string) => projects.find((p) => p.slug === slug)

export const services = [
  {
    title: 'Responsive frontend',
    body: 'Mobile-first layouts with HTML5, CSS3 and Bootstrap 5 that hold together from a 320px phone to a wide desktop — including the awkward sizes in between.',
  },
  {
    title: 'UI implementation',
    body: 'Turning a design or a rough idea into clean, reusable components: cards, navigation, forms and grids that stay consistent as the page count grows.',
  },
  {
    title: 'Python foundations',
    body: 'Scripting, data handling and small automation tasks, backed by the programming and data science coursework in my degree.',
  },
  {
    title: 'Cloud fundamentals',
    body: 'AWS Academy Cloud Foundations certified: core services, shared responsibility and a working idea of how a frontend is actually served.',
  },
]

export const certifications = [
  {
    name: 'AWS Academy Graduate — Cloud Foundations',
    issuer: 'Amazon Web Services',
    detail: 'Cloud concepts, core AWS services, security, architecture and pricing models.',
  },
  {
    name: 'Basics of Python',
    issuer: 'Infosys Springboard',
    detail: 'Syntax, data structures, functions, modules and problem solving in Python.',
  },
  {
    name: 'Artificial Intelligence',
    issuer: 'Edufyi Tech Solutions',
    detail: 'AI fundamentals, intelligent agents and an introduction to machine learning.',
  },
]

export const toolkit = [
  { label: 'Languages', items: ['HTML5', 'CSS3', 'JavaScript', 'Python'] },
  { label: 'Frontend & UI', items: ['Bootstrap 5', 'Responsive design', 'Flexbox & Grid', 'Accessibility'] },
  { label: 'Tools', items: ['Git & GitHub', 'VS Code', 'Google Colab'] },
  { label: 'Cloud', items: ['AWS Academy', 'Cloud Foundations'] },
]

export const education = [
  {
    period: '2021 — 2025',
    title: 'B.Tech, Computer Science (AI & Data Science)',
    detail: 'Bonam Venkata Chalamayya Engineering College, Odalarevu — CGPA 7.01',
  },
  {
    period: '2019 — 2021',
    title: 'Intermediate, MPC',
    detail: 'Aditya Junior College, Mandapeta — CGPA 7.24',
  },
  {
    period: '2019',
    title: 'Secondary school',
    detail: 'Little Flower EM High School, Ravulapalem — GPA 10.0',
  },
]

export const stats = [
  { value: '3', label: 'projects built end to end' },
  { value: '3', label: 'certifications' },
  { value: '10.0', label: 'SSC GPA' },
]
