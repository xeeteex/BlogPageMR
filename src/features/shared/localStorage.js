export const setBlogToLocal = (blogs) => {
  localStorage.setItem("blogs", JSON.stringify(blogs));
  //string ko form ma set garnu parcha jaile
  //const age=90
  //'90'
};

export const getBlogToLocal = () => {
  const data = localStorage.getItem("blogs");
  return data === null ? [] : JSON.parse(data);

  // '[{id:1}]'
  // aba data tanda like array ni string ko form ma aucha so parse garincha
};
