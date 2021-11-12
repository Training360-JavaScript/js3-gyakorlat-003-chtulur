const cookieHandler = {
  getAll() {
    const myStr = document.cookie.split("; ").map((item) => item.split("="));
    return Object.fromEntries(myStr);
  },
  toSessionStorage() {
    const myStr = document.cookie.split("; ").map((item) => item.split("="));
    myStr.forEach((item) => sessionStorage.setItem(item[0], item[1]));
  },
  flush() {
    const myStr = document.cookie.split("; ").map((item) => item.split("="));
    myStr.forEach(
      (item) =>
        (document.cookie = `${item[0]}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`)
    );
  },
};
export { cookieHandler };
