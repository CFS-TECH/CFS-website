import BrochurePage from '@/page/BrochurePage/BrochurePage';
import React from 'react';

export const metadata = {
  title: "Official Brochure | Crossover Fintech Support",
  description: "Download our official 2026 corporate brochure. Explore our BPO, Finance, and Technical service offerings in detail.",
  keywords: ["CFS Brochure", "BPO services PDF", "Fintech support guide", "Download Brochure"],
};

const Page = () => {
  return (
    <div>
        <BrochurePage />
    </div>
  );
};

export default Page;
