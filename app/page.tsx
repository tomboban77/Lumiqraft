import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import ProductGrid from "@/components/ProductGrid";
import { client } from "@/lib/sanity.client";
import { productsQuery, siteSettingsQuery } from "@/lib/sanityqueries";
import { Product, SiteSettings } from "@/types";
import { Metadata } from "next";

async function getProducts(): Promise<Product[]> {
  try {
    return await client.fetch(productsQuery);
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

async function getSiteSettings(): Promise<SiteSettings> {
  try {
    const settings = await client.fetch(siteSettingsQuery);
    return settings || {};
  } catch (error) {
    console.error("Error fetching site settings:", error);
    return {};
  }
}

// SEO Metadata
export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const products = await getProducts();

  const siteName = "Lumiqraft";
  const siteUrl = "https://www.lumiqraft.com"; // Replace with your actual domain
  const defaultDescription =
    "Discover amazing children's books, coloring books, and educational materials at Lumiqraft. Quality books that inspire imagination, creativity, and learning for kids of all ages.";

  return {
    title: {
      default: `${siteName} - Quality Children's Books & Educational Materials`,
      template: `%s | ${siteName}`,
    },
    description: settings.aboutText?.substring(0, 160) || defaultDescription,
    keywords: [
      "children's books",
      "kids books",
      "coloring books",
      "educational books",
      "drawing books",
      "activity books",
      "books for kids",
      "children's literature",
      "picture books",
      "learning books",
      "creative books",
      "Amazon books",
    ],
    authors: [{ name: siteName }],
    creator: siteName,
    publisher: siteName,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteUrl,
      siteName: siteName,
      title: `${siteName} - Quality Children's Books & Educational Materials`,
      description: settings.aboutText?.substring(0, 160) || defaultDescription,
      images: [
        {
          url: `${siteUrl}/og-image.jpg`, // Add your OG image
          width: 1200,
          height: 630,
          alt: `${siteName} - Children's Books`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${siteName} - Quality Children's Books & Educational Materials`,
      description: settings.aboutText?.substring(0, 160) || defaultDescription,
      images: [`${siteUrl}/og-image.jpg`],
      creator: "@lumiqraft", // Replace with your Twitter handle
    },
    alternates: {
      canonical: siteUrl,
    },
    verification: {
      google: "your-google-verification-code", // Add your Google Search Console verification
      // yandex: "your-yandex-verification-code",
      // bing: "your-bing-verification-code",
    },
    category: "Books & Literature",
  };
}

export default async function Home() {
  const [products, siteSettings] = await Promise.all([
    getProducts(),
    getSiteSettings(),
  ]);

  // Generate JSON-LD structured data for better SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.lumiqraft.com/#website",
        url: "https://www.lumiqraft.com",
        name: "Lumiqraft",
        description:
          "Quality children's books, coloring books, and educational materials",
        publisher: {
          "@id": "https://www.lumiqraft.com/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.lumiqraft.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.lumiqraft.com/#organization",
        name: "Lumiqraft",
        url: "https://www.lumiqraft.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.lumiqraft.com/logo.png",
          width: 512,
          height: 512,
        },
        contactPoint: {
          "@type": "ContactPoint",
          email: siteSettings.contactEmail || "contact@lumiqraft.com",
          contactType: "Customer Service",
        },
        sameAs: [
          siteSettings.socialLinks?.facebook || "",
          siteSettings.socialLinks?.instagram || "",
          siteSettings.socialLinks?.twitter || "",
        ].filter(Boolean),
      },
      {
        "@type": "CollectionPage",
        "@id": "https://www.lumiqraft.com/#webpage",
        url: "https://www.lumiqraft.com",
        name: "Lumiqraft - Quality Children's Books & Educational Materials",
        description:
          "Browse our collection of amazing children's books, coloring books, and educational materials",
        isPartOf: {
          "@id": "https://www.lumiqraft.com/#website",
        },
        about: {
          "@id": "https://www.lumiqraft.com/#organization",
        },
        breadcrumb: {
          "@id": "https://www.lumiqraft.com/#breadcrumb",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.lumiqraft.com/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.lumiqraft.com",
          },
        ],
      },
      // Add ItemList for products
      {
        "@type": "ItemList",
        itemListElement: products.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Book",
            name: product.title,
            description: product.description,
            image: product.imageUrl,
            offers: {
              "@type": "Offer",
              price: product.price,
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: product.amazonLink,
              seller: {
                "@type": "Organization",
                name: "Amazon",
              },
            },
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen">
        <Navigation />
        <Hero settings={siteSettings} />
        <ProductGrid products={products} />
        <About settings={siteSettings} />
        <Contact settings={siteSettings} />
        <Footer settings={siteSettings} />
      </main>
    </>
  );
}
