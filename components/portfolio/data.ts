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
  { label: 'Instagram', href: 'https://instagram.com', icon: Instagram },
  { label: 'GitHub', href: 'https://github.com', icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { label: 'WhatsApp', href: 'https://wa.me/919876543210', icon: MessageCircle },
]

export const heroBadges = [
  { label: 'UI/UX Design', tone: 'orange' },
  { label: 'Frontend', tone: 'cyan' },
  { label: 'Modern UI', tone: 'violet' },
]

export const stats = [
  { value: '04+', label: 'Years of interface practice' },
  { value: '20+', label: 'Responsive builds shipped' },
  { value: '12+', label: 'Design concepts turned live' },
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
  { name: 'Figma', level: 84, accent: 'orange' },
  { name: 'UI Systems', level: 86, accent: 'violet' },
]

export const skillCards = [
  { title: 'React', subtitle: 'Interactive UI', icon: Code2, accent: 'cyan' },
  { title: 'Next.js', subtitle: 'App Router', icon: LaptopMinimal, accent: 'orange' },
  { title: 'Figma', subtitle: 'Wireframes & flows', icon: Figma, accent: 'violet' },
  { title: 'UI Thinking', subtitle: 'Clean visual structure', icon: BrainCircuit, accent: 'cyan' },
]

export const projects = [
  {
    title: 'Modern E-Commerce Platform',
    category: 'Build Complete',
    description: 'A modern commerce experience with bold visuals, product discovery, and responsive shopping flows.',
    tags: ['Next.js', 'Tailwind CSS', 'Responsive'],
    accent: 'cyan',
    liveUrl: '#',
    caseStudyUrl: '#contact',
  },
  {
    title: 'Task Management App',
    category: 'Build Complete',
    description: 'A productivity dashboard with a clean board system, quick actions, and user-friendly component states.',
    tags: ['React', 'Tailwind CSS', 'UI'],
    accent: 'orange',
    liveUrl: '#',
    caseStudyUrl: '#contact',
  },
  {
    title: 'Weather Dashboard',
    category: 'Build Complete',
    description: 'A data-first weather interface with concise summaries, forecast modules, and clean visual hierarchy.',
    tags: ['Dashboard', 'API', 'Components'],
    accent: 'violet',
    liveUrl: '#',
    caseStudyUrl: '#contact',
  },
  {
    title: 'Course Landing Page',
    category: 'Build Complete',
    description: 'A focused landing page for course promotion with structured sections and strong conversion cues.',
    tags: ['Landing Page', 'Branding', 'SEO'],
    accent: 'orange',
    liveUrl: '#',
    caseStudyUrl: '#contact',
  },
  {
    title: 'Creative Agency Website',
    category: 'Build Complete',
    description: 'A studio showcase with portfolio previews, service storytelling, and a confident art-direction system.',
    tags: ['Agency', 'Case Study', 'Responsive'],
    accent: 'cyan',
    liveUrl: '#',
    caseStudyUrl: '#contact',
  },
  {
    title: 'LMS Platform UI',
    category: 'Build Complete',
    description: 'An educational product interface with dashboard widgets, lesson cards, and a scalable UI structure.',
    tags: ['EdTech', 'UI Design', 'Next.js'],
    accent: 'cyan',
    liveUrl: '#',
    caseStudyUrl: '#contact',
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
