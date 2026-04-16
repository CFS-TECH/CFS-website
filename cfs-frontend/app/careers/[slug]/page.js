import CareerDetails from '@/page/career/CareersDetails/CareerDetails'
import React from 'react'
import api from "@/utils/api";

export async function generateMetadata({ params }) {
  try {
    const { slug } = await params;
    const { data } = await api.get(`jobs/slug/${slug}`);
    if (data.success) {
      const job = data.data;
      return {
        title: `${job.title} at ${job.company || "Crossover Fintech Support"}`,
        description: `Join our team as a ${job.title} in ${job.location}. Apply now for this ${job.type} position!`,
        openGraph: {
          title: `${job.title} | Careers`,
          description: `We are hiring for the position of ${job.title}. Explore this opportunity at Crossover Fintech Support.`,
        },
      };
    }
  } catch (error) {
    console.error("Error generating metadata:", error);
  }

  return {
    title: "Job Opportunity | Crossover Fintech Support",
    description: "Explore rewarding career opportunities in BPO, Finance, and Technology.",
  };
}

const page = async({params}) => {
    const {slug} = await params
  return (
    <div>
      <CareerDetails slug={slug} />
    </div>
  )
}

export default page