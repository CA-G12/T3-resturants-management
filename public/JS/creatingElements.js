/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
const body = document.querySelector('.body');

// Cleaning chlidren of a section and get it empty
const clearing = (section) => {
  while (section.firstElementChild) {
    section.firstChild.remove();
  }
};

// Displying all meals stored in the databse in a table
const createMeals = (meals) => {
  clearing(body);
  const section = document.createElement('section');
  const table = document.createElement('table');
  section.classList.add('meals-table');
  table.classList.add('users-table');
  const firstTr = document.createElement('tr');
  firstTr.classList.add('first-tr');
  const col1 = document.createElement('th');
  col1.textContent = 'Meal name';
  const col2 = document.createElement('th');
  col2.textContent = 'Price';
  const col3 = document.createElement('th');
  col2.textContent = 'Enough for';
  const col4 = document.createElement('th');
  col2.textContent = 'Chef';
  const col5 = document.createElement('th');
  col2.textContent = 'Resturant';
  const col6 = document.createElement('th');
  col2.textContent = 'Iamge';
  const col7 = document.createElement('th');
  firstTr.appendChild(col1);
  firstTr.appendChild(col2);
  firstTr.appendChild(col3);
  firstTr.appendChild(col4);
  firstTr.appendChild(col5);
  firstTr.appendChild(col6);
  firstTr.appendChild(col7);
  table.appendChild(firstTr);
  meals.forEach((data) => {
    const tr = document.createElement('tr');
    const th1 = document.createElement('th');
    const th2 = document.createElement('th');
    const th3 = document.createElement('th');
    const th4 = document.createElement('th');
    const th5 = document.createElement('th');
    const th6 = document.createElement('th');
    const th7 = document.createElement('th');
    th1.textContent = data.name;
    th2.textContent = data.price;
    th3.textContent = data.numofpeople;
    th4.textContent = data.chef;
    th5.textContent = data.resturant;
    const image = document.createElement('img');
    image.classList.add('meal-image');
    image.src = data.image;
    th6.appendChild(image);
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => { deleteSelectedMeal(data.id); });
    th7.appendChild(deleteBtn);
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    tr.appendChild(th5);
    tr.appendChild(th6);
    tr.appendChild(th7);
    table.appendChild(tr);
  });
  section.appendChild(table);
  body.appendChild(section);
};

// Displying all chefs stored in the databse in a table
const createChefs = (chefs) => {
  clearing(body);
  const section = document.createElement('section');
  const table = document.createElement('table');
  table.classList.add('users-table');
  const firstTr = document.createElement('tr');
  firstTr.classList.add('first-tr');
  const col1 = document.createElement('th');
  col1.textContent = 'Chef name';
  const col2 = document.createElement('th');
  col2.textContent = 'Workplace';
  const col3 = document.createElement('th');
  firstTr.appendChild(col1);
  firstTr.appendChild(col2);
  firstTr.appendChild(col3);
  table.appendChild(firstTr);
  chefs.forEach((data) => {
    const tr = document.createElement('tr');
    const th1 = document.createElement('th');
    const th2 = document.createElement('th');
    const th7 = document.createElement('th');
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      deleteSelectedChef(data.id);
    });
    th7.appendChild(deleteBtn);
    th1.textContent = data.name;
    th2.textContent = data.resturants;
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th7);
    table.appendChild(tr);
  });
  section.appendChild(table);
  body.appendChild(section);
};

// Displying all restaurants stored in the databse in a table
const createResturants = (resturants) => {
  clearing(body);
  const section = document.createElement('section');
  const table = document.createElement('table');
  table.classList.add('users-table');
  const firstTr = document.createElement('tr');
  firstTr.classList.add('first-tr');
  const col1 = document.createElement('th');
  col1.textContent = 'Resturant name';
  const col2 = document.createElement('th');
  col2.textContent = 'location';
  const col3 = document.createElement('th');
  firstTr.appendChild(col1);
  firstTr.appendChild(col2);
  firstTr.appendChild(col3);
  table.appendChild(firstTr);
  resturants.forEach((data) => {
    const tr = document.createElement('tr');
    const th1 = document.createElement('th');
    th1.textContent = data.name;
    const th2 = document.createElement('th');
    th2.textContent = data.location;
    const th7 = document.createElement('th');
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => { deleteSelectedResturant(data.id); });
    th7.appendChild(deleteBtn);
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th7);
    table.appendChild(tr);
  });
  section.appendChild(table);
  body.appendChild(section);
};

const deleteSelectedMeal = (id) => fetch(`/meals/delete-meal/${id}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
}).then(fetchMeals(createMeals)).catch(console.error);

const deleteSelectedChef = (id) => fetch(`/chefs/delete-chef/${id}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
}).then(fetchChefs(createChefs)).catch(console.error);

const deleteSelectedResturant = (id) => fetch(`/resturants/delete-resturant/${id}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
}).then(fetchResturants(createResturants)).catch(console.error);