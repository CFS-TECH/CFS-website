import { LatestBlogCard } from "@/components/Cards/Cards";
import { encodeURIComponent } from "@/utils/UseFuncation";
import { Divider } from "@mui/material";
import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const BlogSearchPage = ({ slug }) => {
  return (
    <div className="w-full h-full flex items-start ">
      {/* Search Title */}

      <section className="w-6xl  mt-6 mx-auto ">
        <section className="flex items-center mb-4 space-x-3 w-full">
          <h2 className="text-2xl font-semibold">Search Result</h2>{" "}
          <MdOutlineKeyboardDoubleArrowRight size={30} />{" "}
          <span className="text-orange-500 text-xl capitalize">
            {decodeURIComponent(slug)}
          </span>
        </section>
        <Divider className="mt-4 " />

        <section className="grid grid-cols-3 gap-4 mt-8">
          {Array.from({ length: 8 }).map((item, idx) => {
            return (
              <div  key={idx} >
                <LatestBlogCard {...item}/>
              </div>
            );
          })}
        </section>
      </section>
    </div>
  );
};

export default BlogSearchPage;
