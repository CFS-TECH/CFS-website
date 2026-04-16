import CareerSearchPage from "@/page/SearchResult/CareerSearch/CareerSearchPage";

import React from "react";

const page = async ({ params }) => {
  const { slug } = await params;
  return (
    <div>
      <CareerSearchPage slug={slug} />
    </div>
  );
};
export default page;
