const { beforeEach, afterAll, test, expect } = require('@jest/globals');
const dbBuild = require('../database/bulid');
const connection = require('../database/config/connection');

const {getMealsFromDB} = require('../database/queries/meals');

beforeEach(() => dbBuild);
afterAll(() => connection.end());


test('dummy', () => {
    expect(1).toBe(1)
})

test('Test getMeals', () => getMealsFromDB()
  .then((data) => {
    expect(data.rows.length).toBe(4);
  }));