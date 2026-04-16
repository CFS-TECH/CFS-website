import React from 'react'
import BlogPage from '../../page/Blogs/BlogPage'

export const metadata = {
  title: "Blog | Insights into Fintech, BPO & Technology",
  description: "Stay updated with the latest trends and insights in the fintech, BPO, and technology sectors. Read our latest articles and industry updates.",
  keywords: ["Fintech Blog", "BPO Insights", "Tech Trends", "Business Support Blog", "Industry Updates"],
};

const page = () => {
  return (
    <div>
        <BlogPage/>
    </div>
  )
}

export default page