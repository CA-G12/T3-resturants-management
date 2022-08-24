const fetchMeals = () => {
  console.log('meaaallsss');
  fetch('/meals')
    .then((res) => res.json())
    .then((data) => createMeals(data))
    .catch(console.error);
};
const fetchChefs = () => {
  fetch('/chefs')
    .then((res) => (res.json()))
    .then((data) => createChefs(data))
    .catch(console.error);
};
const fetchResturants = () => {
  fetch('/resturants')
    .then((res) => (res.json()))
    .then((data) => createResturants(data))
    .catch(console.error);
};
