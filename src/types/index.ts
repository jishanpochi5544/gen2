import type { LucideIcon } from 'lucide-react';

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string; // e.g., "CCTV Cameras", "DVRs/NVRs"
  shortDescription: string;
  longDescription: string;
  images: string[];
  dataAiHints?: string[]; // Optional: one hint per image
  specifications: { key: string; value: string }[];
  benefits: string[];
  icon?: LucideIcon;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  customer: string;
  industry: string;
  challenge: string;
  solutionProvided: string;
  results: string;
  image?: string;
  dataAiHint?: string;
  date: string; // e.g., "2023-10-26"
}

export interface Industry {
  id: string;
  slug: string;
  name: string;
  description: string;
  iconName: LucideIcon; // Using LucideIcon type directly
  representativeImage: string;
  dataAiHint?: string;
}

export interface NavItem {
  href: string;
  label: string;
  icon?: LucideIcon;
  isMegaMenu?: boolean; // To identify the solutions mega menu trigger
  megaMenuCards?: MegaMenuCardItem[]; // Data for mega menu cards
}

export interface MegaMenuSubItem {
  name: string;
  href: string;
}

export interface MegaMenuCardItem {
  name: string;
  href: string; // Main link for the card, typically filters by this category name
  icon: LucideIcon;
  description: string; // General description for the category/item
  image?: string;
  dataAiHint?: string;
  subItems?: MegaMenuSubItem[]; // Optional array of sub-categories/links
}

export interface WhyChooseUsItem {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorRole: string;
  company?: string;
  avatar?: string; // Placeholder image URL
  dataAiHint?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  image: string;
  dataAiHint?: string;
  email?: string; // Added email
  phone?: string; // Added phone
}

export interface ClientLogo {
  id: string;
  name: string;
  logoUrl: string;
  dataAiHint?: string;
  description: string;
  category?: string; // e.g., "Technology", "Finance"
}

export interface CoreOfferingItem {
  gifSrc: string; // Changed from icon: LucideIcon to gifSrc: string
  title: string;
  description: string;
  link: string;
  linkText: string;
  dataAiHint?: string; // Added data-ai-hint for GIFs
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface SolutionCategory {
  id: string;
  name: string; // e.g., "CCTV Cameras" - used for display and link generation
  description: string;
  icon: LucideIcon;
  dataAiHint?: string;
  slug?: string;
}
