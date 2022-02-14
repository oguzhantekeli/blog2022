//categories state
export const getCategories = (blogData) => {
  const categoryNames = [];
  const categoriesArray = [];
  for (let i = 0; i < blogData.length; i++) {
    if (!categoryNames.includes(blogData[i].category)) {
      categoryNames.push(blogData[i].category);
    }
  }

  categoryNames.forEach((name) => {
    let count = 0;
    blogData.forEach((blogItemObject) => {
      if (name === blogItemObject.category) {
        count++;
      }
    });
    categoriesArray.push({ categoryName: name, categoryCount: count });
  });
  return categoriesArray;
};
//recent items state
export const getRecentItems = (data) => {
  const sorted = data.sort((a, b) => {
    return new Date(a.registered).getTime() - new Date(b.registered).getTime();
  });
  const items = sorted.reverse().slice(0, 3);
  return items;
};

export const getBlogItemData = (data, itemId) => {
  const itemData = data.filter((item) => {
    return item.id === itemId;
  });
  return itemData[0];
};
