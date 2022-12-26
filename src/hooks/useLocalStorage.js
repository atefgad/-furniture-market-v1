export const setLocalStorage = (name, val) => {
  return localStorage.setItem(name, JSON.stringify(val));
};

export const getLocalStorage = (name) => {
  return localStorage.getItem(name);
};
