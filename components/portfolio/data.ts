import {
  BriefcaseBusiness,
  ChartNoAxesColumn,
  Code2,
  FolderKanban,
  Github,
  GraduationCap,
  House,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Palette,
  Phone,
  Rocket,
} from 'lucide-react'

export const navigationItems = [
  { id: 'home', label: 'Home', icon: House },
  { id: 'skills', label: 'Skills', icon: Code2 },
  { id: 'projects', label: 'Projects', icon: FolderKanban },
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
  { name: 'Photoshop', level: 95, accent: 'cyan' },
  { name: 'Illustrator', level: 93, accent: 'orange' },
  { name: 'Corel Draw', level: 90, accent: 'violet' },
  { name: 'Premier Pro', level: 88, accent: 'cyan' },
  { name: 'After Effects', level: 86, accent: 'orange' },
  { name: 'Canva', level: 96, accent: 'violet' },
]

export const projects = [
  {
    title: 'V-One hospitals Rebrand',
    category: 'Brand Identity',
    description: 'A premium packaging and campaign system with soft gradients, refined typography, and social-ready brand assets.',
    tags: ['Brand Design', 'Packaging', 'Campaign'],
    accent: 'cyan',
    liveUrl: '#',
    caseStudyUrl: '#contact',
  },
  {
    title: 'Anandam Hospitals Poster Series',
    category: 'Print Design',
    description: 'A bold editorial poster collection built around layered texture, expressive typography, and high-contrast compositions.',
    tags: ['Poster Design', 'Typography', 'Art Direction'],
    accent: 'orange',
    liveUrl: '#',
    caseStudyUrl: '#contact',
  },
  {
    title: 'DNS Hospital Social Campaign',
    category: 'Social Content',
    description: 'A playful rollout of launch graphics, reel covers, and promo carousels designed for consistent mobile-first branding.',
    tags: ['Instagram', 'Campaign Design', 'Templates'],
    accent: 'violet',
    liveUrl: '#',
    caseStudyUrl: '#contact',
  },
  {
    title: 'Shell Be hospital social media templates',
    category: 'Invitation Design',
    description: 'A romantic invitation suite with floral layouts, elegant serif pairings, and coordinated print-ready assets.',
    tags: ['Invitation', 'Print Layout', 'Luxury Styling'],
    accent: 'orange',
    liveUrl: '#',
    caseStudyUrl: '#contact',
  },
  {
    title: 'Apollo Hospital Lookbook',
    category: 'Editorial Design',
    description: 'A high-fashion brochure concept mixing image rhythm, whitespace, and curated text blocks into a polished visual story.',
    tags: ['Lookbook', 'Editorial', 'Layout System'],
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
    icon: Palette,
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
