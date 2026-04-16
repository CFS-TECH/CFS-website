import IndustryUpdateDetails from '@/page/IndustryUpdate/IndustryUpdateDetails';
import React from 'react';

const Page = async ({ params }) => {
  const { id } = await params;
  
  return (
    <div>
      <IndustryUpdateDetails id={id} />
    </div>
  );
};

export default Page;
