/**
 * MMR Safety — Shared Type Definitions
 */

/** SEO metadata for a page */
export interface SEOMeta {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  noindex?: boolean;
}

/** Navigation link item */
export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

/** Site-wide contact information */
export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

/** Responsive Picture Assets for Services */
export interface ServiceVisual {
  image: string;
  imageDesktop: string;
  imageMobile: string;
  imageAlt: string;
}
