export const dateFormate = (date) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

export const stripHtml = (html) => {
  if (!html) return "";
  return html
    .replace(/<[^>]*>?/gm, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&[a-z0-9#]+;/gi, " ");
};

export const encodeURIComponent = (slug) => {
  if (!slug) return "";
  const newSlug = slug.split("").join("-");
  console.log(newSlug);
  return newSlug;
};