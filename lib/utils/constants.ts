// Site-wide constants and configuration for Patron Group

// Brand Colors
export const BRAND_COLORS = {
  primary: {
    dutchBlue: '#002366',
    tealSky: '#008080',
    jetBlack: '#000000',
    concrete: '#7e8081',
    subtleWhite: '#ffffff',
  },
  secondary: {
    noirBlue: '#334f85',
    pastelBlue: '#339999',
    duskGrey: '#96999b',
    ceramic: '#e8e0d9',
  },
} as const;

export const COMPANY_INFO = {
  name: 'Patron Group',
  tagline: 'Towards Development',
  established: 2025,
  description: 'Patron Group is a leading Bangladeshi business conglomerate with a strong presence in infrastructure, construction, real estate, and engineering. Through its specialized companies, including Patron Holdings Ltd. as a core subsidiary, the group delivers integrated solutions that support sustainable development and modern nation-building.',
  vision: 'To be a leading and most trusted conglomerate in Bangladesh, recognized for transforming the nation\'s infrastructure landscape through innovation, quality, and sustainable development while creating long-term value for stakeholders.',
  mission: 'To deliver world-class infrastructure, real estate, and engineering solutions with integrity, innovation, and excellence.',
  locations: ['Bashundhara Residential Area', 'Jolshiri'],
  website: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
} as const;

// Vision
export const VISION = {
  title: 'Vision',
  description: 'To be a leading and most trusted conglomerate in Bangladesh, recognized for transforming the nation\'s infrastructure landscape through innovation, quality, and sustainable development while creating long-term value for stakeholders.',
} as const;

// Mission
export const MISSION = {
  title: 'Mission',
  points: [
    'Develop high-quality real estate and construction projects that enhance living standards.',
    'Build durable roads, highways, and river protection systems for national connectivity and safety.',
    'Provide reliable import-export services and advanced technology solutions.',
    'Practice sustainable business operations that protect the environment and benefit local communities.',
    'Achieve operational excellence and long-term growth through professional management and strong partnerships.',
  ],
} as const;

// Leadership Team
export const LEADERSHIP_TEAM = [
  {
    name: 'B.M Dalim',
    position: 'Chairman',
    image: '/images/team/bm_dalim1.png',
  },
  {
    name: 'Riyadh Khondaker',
    position: 'Managing Director',
    image: '/images/team/riyad_khondoker.png',
  },
  {
    name: 'Md Saddam Hossain',
    position: 'Deputy Managing Director',
    image: '/images/team/saddam_hossain_n.png',
  },
] as const;

// Core Values
export const CORE_VALUES = [
  {
    title: 'Integrity',
    description: 'Operating with honesty, fairness, and transparency to build enduring trust.',
    icon: 'Shield',
  },
  {
    title: 'Excellence',
    description: 'Delivering superior quality in design, construction, and service.',
    icon: 'Award',
  },
  {
    title: 'Innovation',
    description: 'Embracing advanced technology and creative solutions for future-ready properties.',
    icon: 'Lightbulb',
  },
  {
    title: 'Sustainability',
    description: 'Integrating eco-conscious practices for greener, healthier urban environments.',
    icon: 'Leaf',
  },
  {
    title: 'Customer-Centricity',
    description: 'Providing personalized services and exceptional value at every stage.',
    icon: 'Heart',
  },
  {
    title: 'Collaboration',
    description: 'Building strong partnerships with stakeholders to realize shared visions.',
    icon: 'Handshake',
  },
  {
    title: 'Accountability',
    description: 'Ensuring timely delivery and lasting value for homeowners and investors.',
    icon: 'ClipboardCheck',
  },
] as const;

// Legacy Company Values (kept for backward compatibility)
export const COMPANY_VALUES = [
  {
    title: 'Empowering Growth',
    description: 'At Patron Group, we focus on strategic opportunities and integrated development services designed to maximize long-term value for partners, clients, and communities.',
    icon: 'growth',
  },
  {
    title: 'Team Work',
    description: 'We believe in the power of collaboration. Our success is built on strong partnerships and the collective expertise of our dedicated team working together toward common goals.',
    icon: 'team',
  },
  {
    title: 'Innovative Solutions',
    description: 'Patron Group and its subsidiaries offer a diverse portfolio of infrastructure and development projects aligned with market demand and national priorities.',
    icon: 'innovation',
  },
] as const;

export const CAREERS_EMAIL = process.env.NEXT_PUBLIC_CAREERS_EMAIL || 'careers@example.com';

export const CONTACT_INFO = {
  address: 'Level- 6, JCX Business Tower, Japan Street, Dhaka 1229',
  phone: '09611 678 0520', // Update with actual phone number
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@example.com',
  // Add social media links when available
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61581445431198',
    linkedin: 'https://www.linkedin.com/company/patrongroupbd/',
    instagram: '',
  },
} as const;

export const COMPANY_STATS = {
  consultancy: {
    value: 200,
    label: 'Consultancy',
  },
  totalProjects: {
    value: 15,
    label: 'Total Projects',
  },
  members: {
    value: 100,
    label: 'Members',
  },
  ongoingProjects: {
    value: 5,
    label: 'Ongoing Projects',
  },
} as const;

export const NAV_LINKS = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About Us',
    href: '/about',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'Properties',
    href: '/properties',
  },
  {
    name: 'Blogs',
    href: '/blogs',
  },
  {
    name: 'Careers',
    href: '/careers',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
] as const;

// Social media links for StaggeredMenu
export const SOCIAL_LINKS = [
  {
    label: 'Facebook',
    link: 'https://www.facebook.com/profile.php?id=61581445431198',
  },
  {
    label: 'LinkedIn',
    link: '',
  },
  {
    label: 'Instagram',
    link: '',
  },
];

// Convert existing NAV_LINKS to StaggeredMenuItem format
export const STAGGERED_NAV_ITEMS = NAV_LINKS.map(link => ({
  label: link.name,
  ariaLabel: `Navigate to ${link.name}`,
  link: link.href,
}));

export const PROJECT_TYPES = ['Residential', 'Commercial', 'Mixed-Use'] as const;
export type ProjectType = typeof PROJECT_TYPES[number];

export const PROJECT_STATUS = ['Ongoing', 'Completed', 'Upcoming'] as const;
export type ProjectStatus = typeof PROJECT_STATUS[number];

export const SITE_CONFIG = {
  siteName: 'Patron Group',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  siteDescription: 'Premium residential and commercial real estate developments in Dhaka, Bangladesh. Transforming urban living with contemporary design and sustainable practices.',
  defaultMetaImage: '/images/og-image.jpg', // Update when available
} as const;

export const HERO_CONTENT = {
  home: {
    title: 'Patron Group',
    tagline: 'Towards Development',
    description: 'Delivering infrastructure, construction, real estate, and engineering solutions that support sustainable development in Bangladesh.',
    image: '/images/hero_home.jpg',
    cta: {
      text: 'View Our Projects',
      href: '/projects',
    },
  },
  about: {
    title: 'About Patron Group',
    description: 'A trusted Bangladeshi conglomerate in infrastructure, real estate, and engineering',
  },
  projects: {
    title: 'Our Projects',
    description: 'Explore our portfolio of premium developments in Bashundhara and Jolshiri',
  },
  contact: {
    title: 'Get In Touch',
    description: 'Let\'s discuss your real estate needs',
  },
  blogs: {
    title: 'News & Insights',
    description: 'Stay updated with the latest news, insights, and updates from Patron Group',
  },
  careers: {
    title: 'Join Our Team',
    description: 'Build your career with one of Bangladesh\'s leading conglomerates',
  },
  properties: {
    title: 'Available Properties',
    description: 'Browse land plots and apartments available for purchase across Dhaka',
  },
} as const;

// Service areas
export const SERVICE_AREAS = [
  'Bashundhara Residential Area',
  'Jolshiri',
  'Dhaka',
] as const;

// Company office location for map
export const MAP_MARKERS = [
  {
    key: 'office',
    name: 'Patron Group - Head Office',
    position: { lat: 23.814480724353214, lng: 90.43856628265402 },
  },
] as const;

// Features for real estate projects
export const PROJECT_FEATURES = {
  amenities: [
    'CCTV Surveillance',
    'Backup Generator',
    'Lift/Elevator',
    'Parking',
    'Security',
    'Community Space',
  ],
  specifications: [
    'Land Size',
    'Apartment Size',
    'Number of Units',
    'Number of Floors',
    'Number of Parking',
    'Front Road',
    'Orientation',
  ],
} as const;

// Stats for homepage counter section
export const HOMEPAGE_STATS = [
  {
    value: '25+',
    label: 'Years Experience',
    icon: 'calendar',
  },
  {
    value: '50+',
    label: 'Projects Completed',
    icon: 'building',
  },
  {
    value: '2M+',
    label: 'Sq. Ft. Delivered',
    icon: 'area',
  },
  {
    value: '500+',
    label: 'Happy Families',
    icon: 'people',
  },
] as const;

// Why Choose Us section
export const WHY_CHOOSE_US = [
  {
    title: 'Prime Locations',
    description: 'Strategic locations in Dhaka\'s most sought-after areas including Bashundhara and Jolshiri.',
    icon: 'location',
  },
  {
    title: 'Quality Construction',
    description: 'International standards with premium materials and expert craftsmanship in every project.',
    icon: 'quality',
  },
  {
    title: 'Timely Delivery',
    description: 'Proven track record of completing projects on schedule with transparent timelines.',
    icon: 'time',
  },
  {
    title: 'Flexible Payment Plans',
    description: 'Customized payment options designed to make your dream property accessible.',
    icon: 'payment',
  },
  {
    title: 'After-Sales Service',
    description: 'Comprehensive support and maintenance services for complete peace of mind.',
    icon: 'service',
  },
  {
    title: 'Legal Compliance',
    description: 'Complete documentation and RAJUK approval for all developments.',
    icon: 'legal',
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    name: 'Ahmed Rahman',
    role: 'Apartment Owner',
    location: 'Bashundhara Project',
    quote: 'Exceptional quality and timely delivery. Patron Holdings made our dream home a reality with their professional approach and attention to detail.',
    rating: 5,
  },
  {
    name: 'Fatima Khan',
    role: 'Commercial Space Owner',
    location: 'Jolshiri Development',
    quote: 'Outstanding service from start to finish. The team was responsive, transparent, and delivered exactly what they promised.',
    rating: 5,
  },
  {
    name: 'Karim Abdullah',
    role: 'Investor',
    location: 'Multiple Properties',
    quote: 'I have invested in three properties with Patron Holdings. Their commitment to quality and customer satisfaction is unmatched in Dhaka.',
    rating: 5,
  },
  {
    name: 'Sarah Begum',
    role: 'Homeowner',
    location: 'Residential Complex',
    quote: 'The entire process was smooth and professional. Patron Holdings truly understands what families need in a modern home.',
    rating: 5,
  },
] as const;

// Development Process Timeline
export const DEVELOPMENT_PROCESS = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description: 'Site acquisition, feasibility studies, and comprehensive project planning with regulatory approvals.',
    icon: 'search',
  },
  {
    step: '02',
    title: 'Design & Architecture',
    description: 'Architectural excellence with modern design, ensuring functionality and aesthetic appeal.',
    icon: 'design',
  },
  {
    step: '03',
    title: 'Construction',
    description: 'Quality execution with premium materials, expert supervision, and regular progress updates.',
    icon: 'construction',
  },
  {
    step: '04',
    title: 'Handover & Support',
    description: 'Seamless handover with complete documentation and ongoing after-sales support.',
    icon: 'handover',
  },
] as const;

// News and Press mentions
export const NEWS_PRESS = [
  {
    title: 'Patron Holdings Launches New Premium Project in Bashundhara',
    date: '2024-10-15',
    source: 'Real Estate Weekly',
    excerpt: 'Leading developer announces state-of-the-art residential complex with modern amenities.',
    link: '#',
  },
  {
    title: 'Excellence in Real Estate Development Award 2024',
    date: '2024-09-20',
    source: 'Bangladesh Property Awards',
    excerpt: 'Recognized for outstanding contribution to quality residential development in Dhaka.',
    link: '#',
  },
  {
    title: 'Sustainable Building Practices Recognition',
    date: '2024-08-05',
    source: 'Green Building Council',
    excerpt: 'Commitment to environmental sustainability in construction earns industry praise.',
    link: '#',
  },
] as const;

// CTA Banner content
export const CTA_BANNER = {
  title: 'Ready to Find Your Dream Property?',
  description: 'Schedule a site visit or download our latest project brochure to explore premium developments.',
  primaryCTA: {
    text: 'Schedule Site Visit',
    href: '/contact',
  },
  secondaryCTA: {
    text: 'Download Brochure',
    href: '#',
  },
} as const;

// Fallback projects data for error handling
// Used when database connection fails to ensure site never looks empty
export const FALLBACK_PROJECTS = [
  {
    id: -1,
    title: 'New Project Coming Soon',
    slug: 'coming-soon-1',
    type: 'Residential' as const,
    status: 'Upcoming' as const,
    address: 'Bashundhara Residential Area, Dhaka',
    description: 'Exciting new residential development coming soon. Stay tuned for updates on this premium project.',
    featured: true,
    hidden: false,
    displayOrder: 0,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    featuredImage: {
      id: -1,
      projectId: -1,
      filename: 'placeholder-project.jpg',
      altText: 'Coming Soon Project',
      imageType: 'gallery' as const,
      displayOrder: 0,
      isFeatured: true,
      createdAt: new Date().toISOString(),
    },
  },
  {
    id: -2,
    title: 'Premium Development',
    slug: 'coming-soon-2',
    type: 'Mixed-Use' as const,
    status: 'Upcoming' as const,
    address: 'Jolshiri, Dhaka',
    description: 'Contemporary mixed-use development featuring residential and commercial spaces designed for modern urban living.',
    featured: true,
    hidden: false,
    displayOrder: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    featuredImage: {
      id: -2,
      projectId: -2,
      filename: 'placeholder-project.jpg',
      altText: 'Premium Development Project',
      imageType: 'gallery' as const,
      displayOrder: 0,
      isFeatured: true,
      createdAt: new Date().toISOString(),
    },
  },
  {
    id: -3,
    title: 'Future Landmark',
    slug: 'coming-soon-3',
    type: 'Commercial' as const,
    status: 'Upcoming' as const,
    address: 'Dhaka, Bangladesh',
    description: 'Landmark commercial project bringing world-class facilities and modern architecture to Dhaka.',
    featured: true,
    hidden: false,
    displayOrder: 2,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    featuredImage: {
      id: -3,
      projectId: -3,
      filename: 'placeholder-project.jpg',
      altText: 'Future Landmark Project',
      imageType: 'gallery' as const,
      displayOrder: 0,
      isFeatured: true,
      createdAt: new Date().toISOString(),
    },
  },
] as const;

export const FALLBACK_CAROUSEL_SLIDES = [
  {
    filename: 'patron_group_carousel_1.jpg',
    headlineText: 'Building Dreams',
    altText: 'patron_group_carousel Patron Group residential development',
  },
  {
    filename: 'patron_group_carousel_2.jpg',
    headlineText: 'Modern Living',
    altText: 'patron_group_carousel Patron Group modern living spaces',
  },
  {
    filename: 'patron_group_carousel_3.jpg',
    headlineText: 'Premium Spaces',
    altText: 'patron_group_carousel Patron Group premium property',
  },
  {
    filename: 'patron_group_carousel_4.jpg',
    headlineText: 'Quality First',
    altText: 'patron_group_carousel Patron Group quality construction',
  },
  {
    filename: 'patron_group_carousel_5.jpg',
    headlineText: 'Urban Excellence',
    altText: 'patron_group_carousel Patron Group urban development Dhaka',
  },
] as const;

