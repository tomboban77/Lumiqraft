import { MetadataRoute } from "next";
import { client } from "@/lib/sanity.client";
import { productsQuery } from "@/lib/sanityqueries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.lumiqraft.com"; // Replace with your actual domain

  // Fetch all products for dynamic URLs
  const products = await client.fetch(productsQuery).catch(() => []);

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/#products`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ];

  // Dynamic product pages (if you create individual product pages in the future)
  const productPages = products.map((product: any) => ({
    url: `${baseUrl}/products/${product.slug || product._id}`,
    lastModified: new Date(product._updatedAt || Date.now()),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...productPages];
}
