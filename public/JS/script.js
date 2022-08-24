const navId = document.getElementById('nav_menu');
const ToggleBtnId = document.getElementById('toggle_btn');
const CloseBtnId = document.getElementById('close_btn');
const resturantsTab = document.getElementById('resturants-tab');
const chefsTab = document.getElementById('chefs-tab');
const mealsTab = document.getElementById('meals-tab');
const formAddMeal = document.getElementById('addMeal');
const select = document.getElementById('Chef')
const addMeal = document.getElementById('add-meal')

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

formAddMeal.addEventListener('click', () => {
  console.log('clicked this ched', select.value)

})


addMeal.addEventListener('click' , ()=>{
  
})

  // fetchChefs and add them to the drop down menu
  fetch('/chefs')
    .then((res) => (res.json()))
    .then((chefs) => {
        chefs.forEach(chef => {
           let option = document.createElement('option');
           option.setAttribute('value' , chef.id);
           option.textContent = chef.name ;
           select.appendChild(option);
            console.log(chef.name , chef.id)
        });
    })
    .catch(console.error);
// });