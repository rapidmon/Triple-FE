//https://www.geeksforgeeks.org/fabric-js-easeoutexpo-method/

const easeOutExpo = (t) => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

export { easeOutExpo };
