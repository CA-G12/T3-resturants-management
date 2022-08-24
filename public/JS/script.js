const navId = document.getElementById('nav_menu');
const ToggleBtnId = document.getElementById('toggle_btn');
const CloseBtnId = document.getElementById('close_btn');
const resturantsTab = document.getElementById('resturants-tab');
const chefsTab = document.getElementById('chefs-tab');
const mealsTab = document.getElementById('meals-tab');
const addMealBtn = document.getElementById('addMeal');

// ==== SHOW MENU ==== //
ToggleBtnId.addEventListener('click', () => {
  navId.classList.add('show');
});

// ==== HIDE MENU ==== //
CloseBtnId.addEventListener('click', () => {
  navId.classList.remove('show');
});

resturantsTab.addEventListener('click', fetchResturants);
chefsTab.addEventListener('click', fetchChefs);
mealsTab.addEventListener('click', fetchMeals);

addMealBtn.addEventListener('click', () => {
  // fetchChefs and add them to the drop down menu
  fetch('/chefs')
    .then((res) => (res.json()))
    .then((chefs) => chefs.json().name)
    .then((chefsNames) => { console.log(chefsNames);
     })
    .catch(console.error);
});
