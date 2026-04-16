
"use client";
import React, { useState } from 'react'
import BlogBanner from './BlogBanner';
import BlogSection1 from './BlogSection1';
import BlogSection2 from './BlogSection2';
import BlogSection3 from './BlogSection3';
import BlogSection4 from './BlogSectionCopy3';

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All Categories");

  return (
    <div>
       <BlogBanner activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
       <BlogSection1 activeCategory={activeCategory} />
       <BlogSection2 activeCategory={activeCategory} />
       <BlogSection3 activeCategory={activeCategory} />
       <BlogSection4 activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
    </div>
  )
}

export default BlogPage;