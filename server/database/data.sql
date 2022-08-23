BEGIN;
DROP TABLE IF EXISTS resturants, chefs, meals;
CREATE TABLE IF NOT EXISTS resturants (
    id SERIAL PRIMARY KEY,
    name VARCHAR(40) NOT NULL,
    location VARCHAR(40) NOT NULL
);
CREATE TABLE IF NOT EXISTS chefs (
    id SERIAL PRIMARY KEY,
    name VARCHAR(40) NOT NULL,
    resturant_id int NOT NULL,
    FOREIGN KEY (resturant_id) REFERENCES resturants(id)
);
CREATE TABLE IF NOT EXISTS meals (
    id SERIAL PRIMARY KEY,
    name VARCHAR(40) NOT NULL,
    image VARCHAR(1000) NOT NULL,
    price int NOT NULL,
    numofPeople int NOT NULL,
    chef_id int NOT NULL,
    FOREIGN KEY (chef_id) REFERENCES chefs(id)
);

 INSERT INTO resturants (name, location) values 
 ('Pizza++', 'Eygpt'),
 ('Break' , 'Gaza'),
 ('MAC', 'USA')
 RETURNING ID;

  INSERT INTO chefs (name, resturant_id) values 
 ('Mohammad', 1),
 ('Alan' , 2),
 ('Ahmed', 2),
 ('Majd', 3)
 RETURNING ID;

  INSERT INTO meals (name,image, price, numofPeople, chef_id) values 
 ('Pizza', 'https://images.pexels.com/photos/367915/pexels-photo-367915.jpeg?auto=compress&cs=tinysrgb&w=600', 15, 2, 1),
 ('Knafeh' , 'https://media.istockphoto.com/photos/kunafeh-picture-id809924948?b=1&k=20&m=809924948&s=612x612&w=0&h=8lCif7bHK-1KX7ad-ogvmArLR9X0YUi3wR0Dgn6FwU8=', 10, 1, 3),
 ('Beaf burger', 'https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=600', 16, 1, 2),
 ('Hot dog', 'https://images.pexels.com/photos/4637735/pexels-photo-4637735.jpeg?auto=compress&cs=tinysrgb&w=600', 8, 1,2 )
 RETURNING ID;

COMMIT;