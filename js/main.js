import Menu from './Menu.js';

Menu.getThisWeeksMenu().then(menu => {
    document.getElementById('date').innerHTML = `Vecka ${menu.week}, ${menu.year}`;

    menu.meals.forEach(meal => {
        const day = document.createElement('li');
        day.style.listStyleType = 'none';
        
        if (Menu.isToday(meal.day))
            day.style.backgroundColor = '#cfe3d4';

        const dayHeader = getElementWithContent('h3', meal.day);
        const dishes = getDishes(meal);

        day.appendChild(dayHeader);
        day.appendChild(dishes);

        document.getElementById('menu').appendChild(day);
    });
});

function getElementWithContent(elementName, content) {
    const element = document.createElement(elementName);
    element.innerHTML = content;
    return element;
}

function getDishes(meal) {
    const dishes = document.createElement('ul');

    const dish = getDish(false, meal);
    const altDish = getDish(true, meal);

    dishes.appendChild(dish);
    dishes.appendChild(altDish);

    return dishes;
}

function getDish(altDish, meal){
    const dish = document.createElement('li');
    const dishName = document.createElement('p');

    dishName.appendChild(getElementWithContent('strong', altDish ? 'Alternativ 2: ' : 'Alternativ 1: '));
    dishName.innerHTML += altDish ? meal.alt_dish : meal.dish;
    dish.appendChild(dishName);

    return dish;
}