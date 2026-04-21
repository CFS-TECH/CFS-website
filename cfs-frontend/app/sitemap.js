import api from "@/utils/api";

export default async function sitemap() {
  const baseUrl = "https://crossoverfintech.com";

  // Static routes
  const staticRoutes = [
    "",
    "/about-us",
    "/services",
    "/business-support",
    "/financial-solutions",
    "/technical-services",
    "/blog",
    "/careers",
    "/contact-us",
    "/industries",
    "/insight",
    "/industry-update",
    "/privacy-policy",
    "/terms-conditions",
    "/cookies-policy",
    "/services/personal-loan",
    "/services/business-loan",
    "/services/property-loan",
    "/services/vehicle-loan",
    "/services/web-development",
    "/services/application-development",
    "/services/game-development",
    "/services/seo",
    "/services/bulk-hiring-services",
    "/services/CRM-Management-and-Reporting",
    "/services/customer-support-outsourcing",
    "/services/Telecalling-and-Outreach-Support",
    "/services/Backend-and-Administrative-Support",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  // Dynamic blog routes
  let blogRoutes = [];
  try {
    const { data } = await api.get("/blogs");
    if (data.success) {
      blogRoutes = data.data.map((blog) => ({
        url: `${baseUrl}/blog/${blog.slug}`,
        lastModified: new Date(blog.updatedAt || blog.createdAt),
        changeFrequency: "monthly",
        priority: 0.7,
      }));
    }
  } catch (error) {
    console.error("Error fetching blogs for sitemap:", error);
  }

  return [...staticRoutes, ...blogRoutes];
}
