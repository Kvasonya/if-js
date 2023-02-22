export const uniqueItems = (arr) =>
  arr.filter((item, index) => index === arr.indexOf(item));

export const uniqueObjByOneKey = (arr, keyname) => {
  return [...arr].reduce((listItems, currentValue) => {
    if (!listItems.find((item) => item[keyname] === currentValue[keyname])) {
      listItems.push(currentValue);
    }
    return listItems;
  }, []);
};
