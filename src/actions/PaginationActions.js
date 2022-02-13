export const paginateAction = (blogData, perPage, pageNumber) => {
  // blog items per page status
  const idxLastItem = pageNumber * perPage;
  const idxFirstItem = idxLastItem - perPage;
  const currentItems = blogData.slice(idxFirstItem, idxLastItem);
  return currentItems;
};
export const scrollToRef = (refItem) => {
  //scroll state
  window.scrollTo(0, refItem.current.offsetTop);
};

export const changePage = (n, setPageNumber, refItem) => {
  setPageNumber(n);
  scrollToRef(refItem);
};

export const nextPage = (pageNumber, setPageNumber, refItem) => {
  setPageNumber(pageNumber + 1);
  scrollToRef(refItem);
};

export const prevPage = (pageNumber, setPageNumber, refItem) => {
  setPageNumber(pageNumber - 1);
  scrollToRef(refItem);
};
