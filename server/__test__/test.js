const { beforeEach, afterAll, test, expect } = require('@jest/globals');
const dbBuild = require('../database/bulid');
const connection = require('../database/config/connection');

const {getMealsFromDB, getChefsFromDB, getResturantsFromDB, addMeal, addChef, addResturant, deleteById} = require('../database/queries/');

beforeEach(() => dbBuild);
afterAll(() => connection.end());


test('dummy', () => {
    expect(1).toBe(1)
})

test('Test getMeals', () => getMealsFromDB()
  .then((data) => {
    expect(data.rows.length).toBe(4);
  }));
  test('Test getChefs', () => getChefsFromDB()
  .then((data) => {
    expect(data.rows.length).toBe(4);
  }));
  test('Test getResturants', () => getResturantsFromDB()
  .then((data) => {
    expect(data.rows.length).toBe(3);
  }));

  test('Test Add Meal', () => addMeal('Makloba', 'makImg', 50, 3,1)
  .then(getMealsFromDB)
  .then((data) => {
    expect(data.rows.length).toBe(5);
  }));

  test('Test Add Chef', () => addChef('Salma', 2)
  .then(getChefsFromDB)
  .then((data) => {
    expect(data.rows.length).toBe(5);
  }));
  test('Test Add Resturant', () => addResturant('Candrilla', 'USA')
  .then(getResturantsFromDB)
  .then((data) => {
    expect(data.rows.length).toBe(4);
  }));
  test('Test delete meal', () => deleteById('meals', 5)
  .then(getMealsFromDB)
  .then((data) => {
    expect(data.rows.length).toBe(4);
  }));

  test('Test delete chef', () => deleteById('chefs', 1)
  .then(getChefsFromDB)
  .then((data) => {
    expect(data.rows.length).toBe(4);
  }));
  test('Test delete resturant', () => deleteById('resturants', 1)
  .then(getResturantsFromDB)
  .then((data) => {
    expect(data.rows.length).toBe(3);
  }));