import {
  BriefcaseBusiness,
  BrainCircuit,
  ChartNoAxesColumn,
  Code2,
  Figma,
  FolderKanban,
  Github,
  GraduationCap,
  House,
  Instagram,
  LaptopMinimal,
  Linkedin,
  Mail,
  MessageCircle,
  ScrollText,
  Palette,
  Phone,
  Rocket,
} from 'lucide-react'

export const navigationItems = [
  { id: 'home', label: 'Home', icon: House },
  { id: 'skills', label: 'Skills', icon: Code2 },
  { id: 'projects', label: 'Projects', icon: FolderKanban },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'contact', label: 'Contact', icon: Mail },
]

export const socialLinks = [
  { label: 'Instagram', href: '#', icon: Instagram },
  { label: 'GitHub', href: '#', icon: Github },
  { label: 'LinkedIn', href: '#', icon: Linkedin },
  { label: 'WhatsApp', href: '#', icon: MessageCircle },
]

export const heroBadges = [
  { label: 'UI/UX Design', tone: 'orange' },
  { label: 'Frontend', tone: 'cyan' },
  { label: 'Modern UI', tone: 'violet' },
]

export const stats = [
  { value: '04+', label: 'Years of interface practice' },
  { value: '20+', label: 'Responsive builds shipped' },
  { value: '12+', label: 'Design ideas turned live' },
]

export const services = [
  {
    title: 'Creative UI Design',
    description:
      'Premium dark interfaces, landing pages, and visual systems designed to feel modern, clear, and memorable.',
    icon: Palette,
  },
  {
    title: 'Frontend Development',
    description:
      'Responsive interfaces built with React and Next.js, focused on performance, structure, motion, and polish.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Dashboard Layouts',
    description:
      'Section-based portfolio and dashboard layouts with stronger spacing, contrast, and reusable visual patterns.',
    icon: ChartNoAxesColumn,
  },
  {
    title: 'Launch Support',
    description:
      'Portfolio setup, deployment guidance, and iteration support so the final result feels production-ready.',
    icon: Rocket,
  },
]

export const skills = [
  { name: 'React', level: 95, accent: 'cyan' },
  { name: 'Tailwind CSS', level: 92, accent: 'orange' },
  { name: 'JavaScript', level: 90, accent: 'violet' },
  { name: 'Next.js', level: 88, accent: 'cyan' },
]

export const skillCards = [
  { title: 'React', subtitle: 'Interactive UI', icon: Code2, accent: 'cyan' },
  { title: 'Next.js', subtitle: 'App Router', icon: LaptopMinimal, accent: 'orange' },
  { title: 'Figma', subtitle: 'Wireframes & flows', icon: Figma, accent: 'violet' },
  { title: 'UI Thinking', subtitle: 'Clean visual structure', icon: BrainCircuit, accent: 'cyan' },
]

export const projects = [
  {
    title: 'Creator Portfolio',
    category: 'Personal Brand',
    description: 'A dark personal site with glowing cards, section navigation, and a cleaner story-driven layout.',
    tags: ['Next.js', 'Motion', 'UI'],
    accent: 'cyan',
  },
  {
    title: 'Storefront Concept',
    category: 'Commerce UI',
    description: 'A modern product showcase using strong hierarchy, polished cards, and conversion-friendly sections.',
    tags: ['E-commerce', 'Branding', 'Responsive'],
    accent: 'orange',
  },
  {
    title: 'Dashboard Concept',
    category: 'Product Interface',
    description: 'A sleek admin concept using compact data cards, clear hierarchy, and neon-accent surfaces.',
    tags: ['Dashboard', 'Cards', 'Components'],
    accent: 'violet',
  },
  {
    title: 'Agency Website',
    category: 'Studio Presence',
    description: 'A presentation-focused website for a creative team with bold hero sections and portfolio previews.',
    tags: ['Agency', 'Case Study', 'SEO'],
    accent: 'cyan',
  },
]

export const timeline = [
  {
    year: '2026',
    title: 'Freelance Portfolio Designer',
    description: 'Building portfolio websites and frontend interfaces for students, creators, and small startups.',
  },
  {
    year: '2025',
    title: 'Frontend Projects & UI Practice',
    description: 'Built responsive websites while improving card layouts, section hierarchy, and motion details.',
  },
  {
    year: '2024',
    title: 'Learning Design + Development',
    description: 'Focused on translating visual ideas into real websites using React, Tailwind CSS, and modern tooling.',
  },
]

export const education = [
  {
    title: 'Bachelor of Computer Applications',
    subtitle: 'Focused on software, web development, and interface thinking.',
    icon: GraduationCap,
  },
  {
    title: 'Modern Frontend Practice',
    subtitle: 'Hands-on work with React, Next.js, component systems, and motion.',
    icon: Code2,
  },
  {
    title: 'Self-Led UI Exploration',
    subtitle: 'Daily practice around layout references, section systems, and polished portfolio presentation.',
    icon: ScrollText,
  },
]

export const contactDetails = [
  { label: 'Email', value: 'jasmeet.dev@example.com', icon: Mail },
  { label: 'Phone', value: '+91 98765 43210', icon: Phone },
  { label: 'Location', value: 'Punjab, India', icon: House },
]

export const certifications = [
  'Responsive Web Design',
  'React Fundamentals',
  'JavaScript Projects',
  'Google UX Basics',
]

export const languages = [
  { name: 'English', level: 90 },
  { name: 'Hindi', level: 95 },
  { name: 'Punjabi', level: 98 },
  { name: 'Basic French', level: 45 },
]
