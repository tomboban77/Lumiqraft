import { groq } from "next-sanity";

export const productsQuery = groq`
  *[_type == "product"] | order(order asc, _createdAt desc) {
    _id,
    title,
    description,
    price,
    amazonLink,
    "imageUrl": image.asset->url,
    featured,
    category,
    order
  }
`;

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    title,
    tagline,
    description,
    heroTitle,
    heroSubtitle,
    aboutText,
    contactEmail,
    socialLinks
  }
`;
