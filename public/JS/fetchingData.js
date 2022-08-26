const fetchMeals = (cb) => {
  fetch('/meals')
    .then((res) => res.json())
    .then(cb)
    .catch(console.error);
};
const fetchChefs = (cb) => {
  fetch('/chefs')
    .then((res) => (res.json()))
    .then(cb)
    .catch(console.error);
};
const fetchResturants = (cb) => {
  fetch('/resturants')
    .then((res) => (res.json()))
    .then(cb)
    .catch(console.error);
};
