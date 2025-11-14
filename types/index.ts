export interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  amazonLink: string;
  imageUrl: string;
  featured?: boolean;
  category?: string;
  order?: number;
}

export interface SiteSettings {
  title?: string;
  tagline?: string;
  description?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  aboutText?: string;
  contactEmail?: string;
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
}
