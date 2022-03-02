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
  const mutable = [...data];
  const sorted = mutable.sort((a, b) => {
    return new Date(a.registered).getTime() - new Date(b.registered).getTime();
  });
  const items = sorted.reverse().slice(0, 3);
  return items;
};

export const getBlogItemData = (data, itemId) => {
  const mutable = [...data];
  console.log("mutable:", data);
  const itemData = mutable.filter((item) => {
    return item._id === itemId;
  });
  return itemData[0];
};

//search state
export const searchBlog = (data, term) => {
  const mutable = [...data];
  if (term !== "" || term !== undefined) {
    return mutable.filter((item) => {
      return (
        item.text.toLowerCase().includes(term.toLowerCase().trim()) ||
        item.title.toLowerCase().includes(term.toLowerCase().trim())
      );
    });
  } else {
    return window.location.replace("/error");
  }
};
export const searchBlogCategory = (data, term) => {
  const mutable = [...data];
  if (term !== "" || term !== undefined) {
    return mutable.filter((item) => {
      return item.category.includes(term);
    });
  } else {
    return window.location.replace("/error");
  }
};
