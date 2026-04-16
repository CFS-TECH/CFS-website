import BlogDetails from '@/page/Blogs/BlogDetails/BlogDetails'
import React from 'react'
import api from "@/utils/api";
import { stripHtml } from '@/utils/UseFuncation';

export async function generateMetadata({ params }) {
  try {
    const { slug } = await params;
    const { data } = await api.get(`/blogs/${slug}`);
    if (data.success) {
      const blog = data.data;
      const cleanDesc = stripHtml(blog.content).substring(0, 160) + "...";
      
      return {
        title: `${blog.title} | Crossover Blog`,
        description: cleanDesc,
        openGraph: {
          title: blog.title,
          description: cleanDesc,
          images: [blog.image],
        },
        twitter: {
          card: "summary_large_image",
          title: blog.title,
          description: cleanDesc,
          images: [blog.image],
        },
      };
    }
  } catch (error) {
    console.error("Error generating metadata:", error);
  }

  return {
    title: "Blog Post | Crossover Fintech Support",
    description: "Read our latest insights on fintech and business growth.",
  };
}

const page = async({params}) => {
    const {slug} = await params
    
    // Fetch blog data for JSON-LD
    let blogData = null;
    try {
      const { data } = await api.get(`/blogs/${slug}`);
      if (data.success) blogData = data.data;
    } catch (err) {}

    const blogJsonLd = blogData ? {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": blogData.title,
      "image": [blogData.image],
      "datePublished": blogData.createdAt,
      "dateModified": blogData.updatedAt || blogData.createdAt,
      "author": [{
          "@type": "Person",
          "name": blogData.author || "Crossover Admin",
          "url": "https://crossoverfintechsupport.com/about-us"
        }]
    } : null;
    
  return (
    <div>
        {blogJsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
          />
        )}
        <BlogDetails slug={slug}/>
    </div>
  )
}

export default page