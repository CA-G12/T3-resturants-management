const navId = document.getElementById('nav_menu');
const ToggleBtnId = document.getElementById('toggle_btn');
const CloseBtnId = document.getElementById('close_btn');
const resturantsTab = document.getElementById('resturants-tab');
const chefsTab = document.getElementById('chefs-tab');
const mealsTab = document.getElementById('meals-tab');
const selectchefs = document.getElementById('Chef');
const selectresturants = document.getElementById('resturant');
const addMeal = document.getElementById('add-meal');

// ==== SHOW MENU ==== //
ToggleBtnId.addEventListener('click', () => {
  navId.classList.add('show');
});

// ==== HIDE MENU ==== //
CloseBtnId.addEventListener('click', () => {
  navId.classList.remove('show');
});

resturantsTab.addEventListener('click', () => fetchResturants(createResturants));
chefsTab.addEventListener('click', () => fetchChefs(createChefs));
mealsTab.addEventListener('click', () => fetchMeals(createMeals));

addMeal.addEventListener('click', () => {

});

// fetchChefs and add them to the drop down menu
fetch('/chefs')
  .then((res) => (res.json()))
  .then((chefs) => {
    chefs.forEach((chef) => {
      const option = document.createElement('option');
      option.setAttribute('value', chef.id);
      option.textContent = chef.name;
      selectchefs.appendChild(option);
    });
  })
  .catch(console.error);
// fetchChefs and add them to the drop down menu
fetch('/resturants')
  .then((res) => (res.json()))
  .then((resturants) => {
    resturants.forEach((resturant) => {
      const option = document.createElement('option');
      option.setAttribute('value', resturant.id);
      option.textContent = resturant.name;
      selectresturants.appendChild(option);
    });
  })
  .catch(console.error);
