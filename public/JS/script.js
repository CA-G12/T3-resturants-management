/* eslint-disable no-undef */
const navId = document.getElementById('nav_menu');
const ToggleBtnId = document.getElementById('toggle_btn');
const CloseBtnId = document.getElementById('close_btn');
const resturantsTab = document.getElementById('resturants-tab');
const chefsTab = document.getElementById('chefs-tab');
const mealsTab = document.getElementById('meals-tab');
const selectchefs = document.getElementById('Chef');
const selectresturants = document.getElementById('resturant');

// ==== SHOW MENU ==== //
ToggleBtnId.addEventListener('click', () => {
  navId.classList.add('show');
});

// ==== HIDE MENU ==== //
CloseBtnId.addEventListener('click', () => {
  navId.classList.remove('show');
});

// handle nav bar button
resturantsTab.addEventListener('click', () => fetchResturants(createResturants));
chefsTab.addEventListener('click', () => fetchChefs(createChefs));
mealsTab.addEventListener('click', () => fetchMeals(createMeals));

// add chefs to 'Cooked by'/chefs drop down menu
const handleChefsMenu = (chefs) => {
  chefs.forEach((chef) => {
    const option = document.createElement('option');
    option.setAttribute('value', chef.id);
    option.textContent = chef.name;
    selectchefs.appendChild(option);
  });
};

// fetch chefs stored in the database and handle chefs drop down menu
fetchChefs(handleChefsMenu);

// add resturants to 'Wroking at'/resturants drop down menu
const handleResturantsMenu = (resturants) => {
  resturants.forEach((resturant) => {
    const option = document.createElement('option');
    option.setAttribute('value', resturant.id);
    option.textContent = resturant.name;
    selectresturants.appendChild(option);
  });
};

// fetch resturants stored in the database and handle resturants drop down menu
fetchResturants(handleResturantsMenu);
