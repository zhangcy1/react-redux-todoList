/**
 * 存储 localStorage
 */
export const localSetItem = (name, params) => {
  if (!name) return false;
  window.localStorage.setItem(name, params);
};

/**
 * 取值 localStorage
 */
export const localGetItem = name => {
  if (!name) return false;
  return window.localStorage.getItem(name);
};

/**
 * 数组模糊查询
 */
export const queryFuzzy = (list, keyWorld) => {
  let arr = [];
  list.forEach(item => {
    if (item.indexOf(keyWorld) >= 0) {
      arr.push(item);
    }
  });
  return arr;
};
