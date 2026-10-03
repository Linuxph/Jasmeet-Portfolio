import {
  BriefcaseBusiness,
  Award,
  Layers,
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
  Sparkles,
  Video,
  Printer,
  Compass,
  CheckCircle2,
} from 'lucide-react'

export interface ProjectCaseStudy {
  id: string
  title: string
  category: 'Brand Identity' | 'Print & Editorial' | 'Social & Campaigns' | 'Digital & Motion'
  client: string
  year: string
  image: string
  accent: 'cyan' | 'orange' | 'violet'
  tags: string[]
  shortDescription: string
  fullDescription: string
  challenge: string
  solution: string
  deliverables: string[]
  toolsUsed: string[]
  colorPalette: { name: string; hex: string }[]
  metrics?: { label: string; value: string }
}

export const navigationItems = [
  { id: 'home', label: 'Home', icon: House },
  { id: 'about', label: 'Creative DNA', icon: Compass },
  { id: 'skills', label: 'Arsenal', icon: Layers },
  { id: 'projects', label: 'Portfolio', icon: FolderKanban },
  { id: 'experience', label: 'Journey', icon: BriefcaseBusiness },
  { id: 'contact', label: 'Contact', icon: Mail },
]

export const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com', icon: Instagram },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { label: 'WhatsApp', href: 'https://wa.me/919876543210', icon: MessageCircle },
  { label: 'GitHub', href: 'https://github.com', icon: Github },
]

export const heroBadges = [
  { label: '10+ Years Experience', tone: 'orange' },
  { label: 'Senior Art Director', tone: 'cyan' },
  { label: 'Brand & Editorial Specialist', tone: 'violet' },
]

export const typewriterRoles = [
  'Senior Graphic Designer',
  'Lead Art Director',
  'Brand Identity Architect',
  'Print & Packaging Specialist',
  'Motion & AI Visual Artist',
]

export const stats = [
  { value: '10+', label: 'Years of Visual Art Direction', detail: 'Crafting brands since 2014' },
  { value: '250+', label: 'Commercial & Editorial Projects', detail: 'Across Healthcare, Retail & Tech' },
  { value: '40+', label: 'Healthcare & Enterprise Brands', detail: 'Multi-specialty hospitals & clinics' },
  { value: '99%', label: 'Client Trust & Retention Rate', detail: 'Long-term agency & direct partners' },
]

export const services = [
  {
    title: 'Brand Identity Architecture',
    subtitle: 'Logos, Systems & Guidelines',
    description:
      'Holistic visual identities engineered for instant recognition. Complete vector suites, responsive typography scales, color theory psychology, and exhaustive brand books.',
    icon: Palette,
    accent: 'orange',
    deliverables: ['Logo Mark & Monogram Suites', 'Comprehensive Brand Guidelines', 'Color & Typographic Tokens', 'Stationery & Environmental Signage'],
  },
  {
    title: 'Healthcare & Institutional Campaigns',
    subtitle: 'Trust-Driven Visuals',
    description:
      'Proven expertise in large-scale multi-specialty hospital branding (V-One, Anandam, DNS). Creating patient-reassuring, compliant, and dignified design languages.',
    icon: Compass,
    accent: 'cyan',
    deliverables: ['Campus Wayfinding & Signage', 'Patient Care Information Systems', 'Doctor Spotlight Campaigns', 'Multi-Floor Wall Graphics & Art'],
  },
  {
    title: 'Editorial, Packaging & Prepress',
    subtitle: 'Precision Print Mastery',
    description:
      'Obsessive CMYK prepress calibration, large-format billboards, clinical brochures, foil-stamped luxury packaging, and exhibition trade show graphics.',
    icon: Printer,
    accent: 'violet',
    deliverables: ['Large-Format Outdoor Billboards', 'Die-Cut Product Packaging', 'Annual Reports & Editorial Catalogs', 'Exhibition Booth Architecture'],
  },
  {
    title: 'Motion Design & AI Visuals',
    subtitle: 'Kinetic & Generative Flow',
    description:
      'High-impact social reels, kinetic typographic title sequences, promo teasers, and AI-accelerated cinematic mood boards curated with human art direction.',
    icon: Video,
    accent: 'cyan',
    deliverables: ['Social Reel Sequences & Pacing', 'Animated Logo Intros & Stings', 'Midjourney Concept Explorations', 'Promo Launch Video Editing'],
  },
]

export interface SkillCategory {
  id: string
  label: string
  description: string
  skills: {
    name: string
    level: number
    experience: string
    accent: 'cyan' | 'orange' | 'violet'
    description: string
  }[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'all',
    label: 'Complete Stack',
    description: '10+ years of mastery across creative industry standards',
    skills: [],
  },
  {
    id: 'vector',
    label: 'Brand & Vector',
    description: 'Precision vector geometry and publication design',
    skills: [
      { name: 'Adobe Illustrator', level: 98, experience: '10+ Yrs', accent: 'orange', description: 'Complex vector illustration, brand marks, and iconography' },
      { name: 'CorelDRAW', level: 96, experience: '10+ Yrs', accent: 'cyan', description: 'Large-scale commercial printing, flex banners, and prepress output' },
      { name: 'Adobe InDesign', level: 92, experience: '8+ Yrs', accent: 'violet', description: 'Multi-page editorial books, catalogs, and clinical reports' },
      { name: 'Figma', level: 90, experience: '5+ Yrs', accent: 'cyan', description: 'Design systems, modern UI prototypes, and client review decks' },
    ],
  },
  {
    id: 'raster',
    label: 'Raster & Retouching',
    description: 'Advanced compositing, color correction and digital art',
    skills: [
      { name: 'Adobe Photoshop', level: 99, experience: '10+ Yrs', accent: 'cyan', description: 'High-end photo manipulation, matte painting, and frequency separation' },
      { name: 'Adobe Lightroom', level: 92, experience: '8+ Yrs', accent: 'orange', description: 'Commercial RAW processing, color grading, and tone harmonization' },
      { name: 'Digital Compositing', level: 94, experience: '9+ Yrs', accent: 'violet', description: 'Lighting simulation, shadow casting, and photorealistic integration' },
      { name: 'Canva Pro', level: 98, experience: '7+ Yrs', accent: 'cyan', description: 'Rapid collaborative templating for high-volume client teams' },
    ],
  },
  {
    id: 'motion',
    label: 'Motion & Video',
    description: 'Kinetic storytelling, rhythmic pacing and sound design',
    skills: [
      { name: 'Adobe Premiere Pro', level: 94, experience: '8+ Yrs', accent: 'cyan', description: 'Commercial promotional cuts, narrative pacing, and color timing' },
      { name: 'Adobe After Effects', level: 90, experience: '7+ Yrs', accent: 'violet', description: 'Kinetic typography, logo stings, visual effects, and animated UI' },
      { name: 'Audio Design & Sync', level: 86, experience: '6+ Yrs', accent: 'orange', description: 'SFX placement, sonic branding, and beat-matched cuts' },
    ],
  },
  {
    id: 'ai',
    label: 'Generative AI & 3D',
    description: 'Next-generation prompt engineering and concept synthesis',
    skills: [
      { name: 'Midjourney & Firefly', level: 96, experience: '3+ Yrs', accent: 'orange', description: 'Photorealistic concept art, custom stylized backdrops, and mood boards' },
      { name: 'Runway & Pika AI', level: 88, experience: '2+ Yrs', accent: 'violet', description: 'Generative motion camera moves, morphing transitions, and AI video' },
      { name: 'AI Workflow Integration', level: 92, experience: '3+ Yrs', accent: 'cyan', description: 'Hybrid pipeline combining AI generation with Photoshop manual precision' },
    ],
  },
]

export const allSkillsList = skillCategories
  .filter((c) => c.id !== 'all')
  .flatMap((c) => c.skills)

export const projects: ProjectCaseStudy[] = [
  {
    id: 'v-one-rebrand',
    title: 'V-One Hospitals Complete Rebrand',
    category: 'Brand Identity',
    client: 'V-One Multi-Specialty Healthcare',
    year: '2024 - 2025',
    image: '/projects/brand-identity-mockup.jpg',
    accent: 'cyan',
    tags: ['Brand Identity', 'Healthcare', 'Packaging', 'Signage System'],
    shortDescription:
      'A holistic visual identity and wayfinding ecosystem engineered for a premier 200-bed hospital network.',
    fullDescription:
      'V-One Hospitals required a transformative brand evolution to reflect their cutting-edge robotic surgical center while maintaining a deeply compassionate, human-centered patient experience. The redesign spanned from the primary master logo to 500+ touchpoints across print, digital, and architectural spaces.',
    challenge:
      'The previous identity felt outdated, inconsistent across clinical departments, and lacked legibility in high-stress emergency wayfinding environments.',
    solution:
      'Developed a fluid geometric monogram merging a protective shield with an organic pulse line. Implemented an accessibility-tested color hierarchy with deep medical navy and reassuring cyan, paired with high-contrast Swiss typography.',
    deliverables: [
      'Master Identity & Sub-Department Lockups',
      'Hospital Environmental Signage & Room Directory',
      'Patient Prescription Pads & Folder Systems',
      'Fleet Vehicle Graphics & Ambulances',
      'Digital Patient Portal Visual Tokens',
    ],
    toolsUsed: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign', 'CorelDRAW'],
    colorPalette: [
      { name: 'Clinical Navy', hex: '#0B1E36' },
      { name: 'Electric Cyan', hex: '#00F0FF' },
      { name: 'Patient White', hex: '#FFFFFF' },
      { name: 'Steel Slate', hex: '#64748B' },
    ],
    metrics: { label: 'Patient Recognition', value: '+78%' },
  },
  {
    id: 'anandam-posters',
    title: 'Anandam Hospitals Master Poster Series',
    category: 'Print & Editorial',
    client: 'Anandam Super-Specialty Centers',
    year: '2024',
    image: '/projects/poster-editorial.jpg',
    accent: 'orange',
    tags: ['Poster Design', 'Typography', 'Art Direction', 'Large Format'],
    shortDescription:
      'A museum-grade editorial poster series blending Swiss modernist grid architecture with human health storytelling.',
    fullDescription:
      'Created for Anandam Super-Specialty healthcare facilities, this expansive print installation breaks the stereotype of dull medical posters. Each piece functions both as an informative public health guide and a visually captivating piece of interior artwork.',
    challenge:
      'Medical information is frequently ignored because posters look institutional and cluttered with wall-to-wall text.',
    solution:
      'Employed asymmetric modular grids, bold expressive typography, and custom hand-drawn medical cross-sections with vibrant amber accent cues to draw eyes from across the atrium.',
    deliverables: [
      '12-Piece Large-Format Atrium Poster Series',
      'Preventive Healthcare Infographic Banners',
      'Modular Exhibition Rollup Displays',
      'Press-Ready CMYK Separation Plates',
    ],
    toolsUsed: ['Adobe Photoshop', 'CorelDRAW', 'Adobe Illustrator'],
    colorPalette: [
      { name: 'Warm Amber', hex: '#FF6B35' },
      { name: 'Deep Obsidian', hex: '#111827' },
      { name: 'Paper White', hex: '#F9FAFB' },
      { name: 'Subtle Gold', hex: '#F59E0B' },
    ],
    metrics: { label: 'Foot Traffic Dwell Time', value: '4.2x' },
  },
  {
    id: 'dns-campaign',
    title: 'DNS Hospital 360° Social Campaign',
    category: 'Social & Campaigns',
    client: 'DNS Multi-Specialty Hospital',
    year: '2025',
    image: '/projects/senior-art-direction.jpg',
    accent: 'violet',
    tags: ['Social Campaign', 'Motion Reels', 'Brand Systems', 'Templates'],
    shortDescription:
      'End-to-end digital launch and recurring social campaign kit driving 300% patient community engagement.',
    fullDescription:
      'A comprehensive digital marketing rollout designed to humanize the surgical team, debunk common health myths, and announce state-of-the-art diagnostic facilities through mobile-first video reels and carousel decks.',
    challenge:
      'Strict clinical accuracy requirements paired with tight daily production deadlines across 4 distinct social networks.',
    solution:
      'Built a 60-part modular graphic kit in Illustrator & After Effects with drag-and-drop doctor portrait masks, typographic presets, and animated data badges that guaranteed brand consistency in under 15 minutes per post.',
    deliverables: [
      '60+ Custom Carousel Templates',
      '15 Kinetic Typography Short Reels',
      'Doctor Video Overlay Frames & Lower Thirds',
      'Community Health Awareness Infographics',
    ],
    toolsUsed: ['Adobe Premiere Pro', 'Adobe After Effects', 'Adobe Illustrator', 'Photoshop'],
    colorPalette: [
      { name: 'Royal Violet', hex: '#8B5CF6' },
      { name: 'Deep Space', hex: '#090D16' },
      { name: 'Hyper Cyan', hex: '#38BDF8' },
      { name: 'Crisp White', hex: '#FFFFFF' },
    ],
    metrics: { label: 'Organic Impressions', value: '1.2M+' },
  },
  {
    id: 'linkedin-pro-digital',
    title: 'LinkedIn Pro Masterclass Visual Identity',
    category: 'Digital & Motion',
    client: 'LinkedIn Pro Career Academy',
    year: '2025',
    image: '/projects/digital-landing.jpg',
    accent: 'cyan',
    tags: ['Landing UI', 'Course Visuals', 'Digital Campaign', 'Conversion Design'],
    shortDescription:
      'High-conversion digital brand presence and course landing layout with striking cobalt-to-cyan visual dynamics.',
    fullDescription:
      'An elite digital curriculum identity designed for career executives and creative leaders. The visual direction merges executive prestige with electric tech energy, structuring course curriculum modules into tangible, desirable visual achievements.',
    challenge:
      'Creating an identity that felt prestigious enough for Fortune 500 executives while staying approachable for mid-level professionals.',
    solution:
      'Balanced rich cobalt blue gradients with sharp neo-grotesque typography and glassmorphic card containers highlighting instructor credentials and curriculum previews.',
    deliverables: [
      'High-Conversion Landing Page Visual Design',
      'Course Slide Deck Template Suite (100+ slides)',
      'Digital Certificate of Completion Artwork',
      'Social Promo Ads & Story Assets',
    ],
    toolsUsed: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator'],
    colorPalette: [
      { name: 'Electric Cobalt', hex: '#0066FF' },
      { name: 'Sky Cyan', hex: '#00F2FE' },
      { name: 'Pure White', hex: '#FFFFFF' },
      { name: 'Slate Dark', hex: '#0F172A' },
    ],
    metrics: { label: 'Cohort Conversion Rate', value: '14.8%' },
  },
  {
    id: 'jenna-editorial',
    title: 'Jenna Creative & Fashion Series',
    category: 'Print & Editorial',
    client: 'Studio Neo-Creative',
    year: '2024',
    image: '/projects/fashion-social-campaign.jpg',
    accent: 'orange',
    tags: ['Editorial', 'Art Direction', 'Lighting Direction', 'Concentric Geometry'],
    shortDescription:
      'Avant-garde editorial portrait series exploring circular geometric framing and high-fashion typographic tension.',
    fullDescription:
      'A personal art direction exploration examining how 3D geometric framing, subtle spherical float elements, and bold typography interact with contemporary studio portraiture.',
    challenge:
      'Harmonizing futuristic floating 3D props with intimate studio lighting without overpowering the model’s expression.',
    solution:
      'Designed concentric radial lines that draw focal focus into the eyes, framed by high-contrast typography and subtle orange backlighting.',
    deliverables: [
      'Digital Magazine Cover Layout',
      'Exhibition Gallery Art Prints (A1 size)',
      'Interactive Web Editorial Case Study',
      'Social Reveal Teaser Posters',
    ],
    toolsUsed: ['Adobe Photoshop', 'Adobe Lightroom', 'Adobe Illustrator'],
    colorPalette: [
      { name: 'Midnight Deep', hex: '#0A192F' },
      { name: 'Sky Blue', hex: '#38BDF8' },
      { name: 'Neon Coral', hex: '#FF6B35' },
      { name: 'Oatmeal White', hex: '#F8FAFC' },
    ],
    metrics: { label: 'Behance Curated', value: 'Featured' },
  },
  {
    id: 'nextgen-uiux',
    title: 'NextGen Design System & Prototyping',
    category: 'Digital & Motion',
    client: 'FutureTech Labs',
    year: '2024',
    image: '/projects/uiux-design-system.jpg',
    accent: 'violet',
    tags: ['Design System', 'Dark UI', 'Micro-interactions', 'Iconography'],
    shortDescription:
      'Futuristic dark-mode interface ecosystem featuring custom neon icon sets, glowing states, and modular layouts.',
    fullDescription:
      'A cohesive UI/UX and visual system created for next-generation developer and creator tooling. Highlights include custom multi-tone iconography, frosted glass panels, and interactive state definitions.',
    challenge:
      'Managing extreme data density while maintaining an ethereal, ultra-clean aesthetic that minimizes eye strain.',
    solution:
      'Constructed an 8-pixel tokenized grid with luminous cyan and violet edge lighting to establish hierarchy without heavy container borders.',
    deliverables: [
      'Comprehensive Figma Component Library (200+ components)',
      'Custom Vector Icon Set (80+ icons)',
      'Interactive Motion Prototype in After Effects',
      'Design Token Documentation',
    ],
    toolsUsed: ['Figma', 'Adobe Illustrator', 'Adobe After Effects'],
    colorPalette: [
      { name: 'Void Black', hex: '#0B132B' },
      { name: 'Dark Indigo', hex: '#1C2541' },
      { name: 'Aqua Glow', hex: '#48CAE4' },
      { name: 'Ultraviolet', hex: '#7209B7' },
    ],
    metrics: { label: 'Token Reusability', value: '94%' },
  },
]

export const clientRoster = [
  { name: 'V-One Hospitals', industry: 'Super-Specialty Healthcare' },
  { name: 'Anandam Healthcare', industry: 'Medical Centers' },
  { name: 'DNS Multi-Specialty', industry: 'Hospital Network' },
  { name: 'Apex Media Group', industry: 'Publishing & Print' },
  { name: 'LinkedIn Pro', industry: 'Executive Education' },
  { name: 'Pulse Agency', industry: 'Digital Brand Strategy' },
  { name: 'Horizon Creative Labs', industry: 'Consumer Products' },
  { name: 'Novus Clinical', industry: 'Pharmaceuticals' },
]

export const timeline = [
  {
    period: '2021 — PRESENT',
    role: 'Lead Art Director & Studio Founder',
    company: 'Jasmeet Visual Studio • Punjab / Remote',
    description:
      'Spearheading comprehensive brand overhauls, high-impact healthcare campaigns, and cross-platform visual systems. Leading design strategy, supervising prepress print quality, and mentoring junior creative talent.',
    highlights: [
      'Delivered end-to-end rebranding for 3 major regional hospital networks (V-One, Anandam, DNS)',
      'Architected 100+ commercial print runs with zero prepress rejection rate',
      'Integrated AI-assisted concept pipelines to slash initial moodboard turnaround by 60%',
    ],
  },
  {
    period: '2018 — 2021',
    role: 'Senior Graphic & Brand Designer',
    company: 'Apex Media & Healthcare Solutions',
    description:
      'Directed editorial publications, clinical identity manuals, exhibition stall designs, and multi-channel marketing collateral for commercial and institutional accounts.',
    highlights: [
      'Standardized corporate brand books across 14 enterprise subsidiaries',
      'Led 12 large-scale outdoor advertising campaigns across Northern India',
      'Collaborated directly with chief medical officers and marketing directors',
    ],
  },
  {
    period: '2015 — 2018',
    role: 'Graphic Designer & Visual Specialist',
    company: 'Horizon Design Communications',
    description:
      'Hands-on execution of packaging design, vector iconography, event collateral, and photo manipulation for retail and consumer brands.',
    highlights: [
      'Designed over 40 retail product packaging SKUs from sketch to store shelves',
      'Mastered CorelDRAW and Illustrator workflows for rapid vector turnaround',
    ],
  },
  {
    period: '2014 — 2015',
    role: 'Associate Graphic Artist',
    company: 'Creative Arts & Print Lab',
    description:
      'Formative apprenticeship in commercial printing processes, CMYK separation, typography hierarchy, and photographic retouching.',
    highlights: [
      'Managed prepress film outputs, plate making, and spot color matching',
    ],
  },
]

export const education = [
  {
    title: 'Bachelor of Computer Applications (BCA)',
    institution: 'University of Technology',
    year: '2011 — 2014',
    subtitle: 'Computational graphics, software architecture, and interactive interface design.',
    icon: GraduationCap,
  },
  {
    title: 'Advanced Prepress & Color Reproduction',
    institution: 'Print Media Institute',
    year: 'Certified Specialist',
    subtitle: 'Exhaustive training in CMYK calibration, Pantone matching, and large-format print physics.',
    icon: Printer,
  },
  {
    title: 'Masterclass in Brand Strategy & Typography',
    institution: 'Global Design Collective',
    year: 'Executive Diploma',
    subtitle: 'Swiss grid philosophy, micro-typographic hierarchy, and brand asset management.',
    icon: Palette,
  },
]

export const contactDetails = [
  { label: 'Email', value: 'jasmeet.design@example.com', icon: Mail, copyable: true },
  { label: 'Phone', value: '+91 98765 43210', icon: Phone, copyable: true },
  { label: 'Location', value: 'Punjab, India (Available Globally)', icon: House, copyable: false },
  { label: 'Direct Chat', value: 'WhatsApp Available', icon: MessageCircle, href: 'https://wa.me/919876543210', copyable: false },
]

export const certifications = [
  'Adobe Certified Professional — Visual Design',
  'Adobe Certified Professional — Graphic Design & Illustration',
  'Prepress Print Calibration Specialist',
  'Swiss Typographic Systems & Hierarchy',
  'Advanced Generative AI for Art Directors',
]

export const languages = [
  { name: 'English', level: 95, fluency: 'Professional Working' },
  { name: 'Hindi', level: 100, fluency: 'Native / Bilingual' },
  { name: 'Punjabi', level: 100, fluency: 'Native / Bilingual' },
]
