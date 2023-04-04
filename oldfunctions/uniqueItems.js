//------Unique items in an array-----

export const uniqueItems = (arr) =>
  arr.filter((item, index) => index === arr.indexOf(item));

//------Unique items in an array of objects (by key)-----

export const uniqueObjByOneKey = (arr, keyname) => {
  return [...arr].reduce((listItems, currentValue) => {
    if (!listItems.find((item) => item[keyname] === currentValue[keyname])) {
      listItems.push(currentValue);
    }
    return listItems;
  }, []);
};

//------SET-----

export const uniqueValuesArr = (arr) => Array.from(new Set(arr));

export const arrValuesInSet = (set) => Array.from(set.values());

export const getNewSet = (data, value) => {
  return data.reduce((acc, item) => {
    acc.add(item[value], item);
    return acc;
  }, new Set());
};
