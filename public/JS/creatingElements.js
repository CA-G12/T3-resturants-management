let body = document.querySelector('body');



const createMeals = (allData)=>{
    console.log(allData);
    body.innerText = '';
    const section = document.createElement('section');
    const table = document.createElement('table');
    section.classList.add('meals-table');
    table.classList.add('users-table');
    table.innerHTML = `         <tr>
    <th>Meal name</th>
    <th>Price</th>
    <th>Enough for</th>
    <th>Chef</th>
    <th>Resturant</th>
    <th>img</th>
    <th></th>
  </tr>`;

    allData.forEach((data) => {
        const tr = document.createElement('tr');

        const th1 = document.createElement('th');
        const th2 = document.createElement('th');
        const th3 = document.createElement('th');
        const th4 = document.createElement('th');
        const th5 = document.createElement('th');
        const th6 = document.createElement('th');
        const th7 = document.createElement('th');
    
        th1.innerText = data.name;
        th2.innerText = data.price;
        th3.innerText = data.numofpeople;
        th4.innerText = data.chef;
        th5.innerText = data.resturant;
        th6.innerHTML = `<img src="${data.image}" style = " width : 250px ; height: 200px;">`;
        th7.innerHTML = '<button>Delete</button>';
    
        tr.appendChild(th1);
        tr.appendChild(th2);
        tr.appendChild(th3);
        tr.appendChild(th4);
        tr.appendChild(th5);
        tr.appendChild(th6);
        tr.appendChild(th7);
    
        table.appendChild(tr);
    
    })
    section.appendChild(table);
    body.appendChild(table);

}



const createChefs = (allData)=>{
        console.log(allData);
        body.innerText = '';
        const section = document.createElement('section');
        const table = document.createElement('table');
        section.classList.add('chefs-table');
        table.classList.add('users-table');
        table.innerHTML = ` <tr>
        <th>Chef name</th>
        <th>Workplace</th>
        <th></th>
      </tr>`;
    
        allData.forEach((data) => {
            const tr = document.createElement('tr');
    
            const th1 = document.createElement('th');
            const th2 = document.createElement('th');
            const th7 = document.createElement('th');
        
            th1.innerText = data.name;
            th2.innerText = data.resturants;
            th7.innerHTML = '<button>Delete</button>';
        
            tr.appendChild(th1);
            tr.appendChild(th2);
            tr.appendChild(th7);
        
            table.appendChild(tr);
        
        })
        section.appendChild(table);
        body.appendChild(table);
    

}






const createResturants = (allData)=>{
        console.log(allData);
        body.innerText = '';
        const section = document.createElement('section');
        const table = document.createElement('table');
        section.classList.add('resturants-table');
        table.classList.add('users-table');
        table.innerHTML = `    <tr>
        <th>Resturant name</th>
        <th>Location</th>
        <th></th>
      </tr>`;
        
        allData.forEach((data) => {
            const tr = document.createElement('tr');
    
            const th1 = document.createElement('th');
            const th2 = document.createElement('th');
            const th7 = document.createElement('th');
        
            th1.innerText = data.name;
            th2.innerText = data.location;
            th7.innerHTML = '<button>Delete</button>';
        
            tr.appendChild(th1);
            tr.appendChild(th2);
            tr.appendChild(th7);
        
            table.appendChild(tr);
        
        })
        section.appendChild(table);
        body.appendChild(table);
    


}