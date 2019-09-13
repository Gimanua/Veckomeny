Menu.getThisWeeksMenu().then(menu => {
    document.getElementById('date').innerHTML = `Vecka ${menu.week}, ${menu.year}`
    menu.meals.forEach(meal => {
        const liTag = document.createElement('li');
        liTag.style.listStyleType = 'none';
        if(Menu.isToday(meal.day)){
            liTag.style.backgroundColor = '#cfe3d4';
        }

        const ulTag = document.createElement('ul');
        
        const dishLiTag = document.createElement('li');
        const dishPTag = document.createElement('p');

        const altDishLiTag = document.createElement('li');
        const altDishPTag = document.createElement('p');

        const strongTag1 = document.createElement('strong');
        strongTag1.innerHTML = 'Alternativ 1: ';

        dishPTag.appendChild(strongTag1);
        dishPTag.innerHTML += meal.dish;
        dishLiTag.appendChild(dishPTag);

        const strongTag2 = document.createElement('strong');
        strongTag2.innerHTML = 'Alternativ 2: ';

        altDishPTag.appendChild(strongTag2);
        altDishPTag.innerHTML += meal.alt_dish;
        altDishLiTag.appendChild(altDishPTag);

        ulTag.appendChild(dishLiTag);
        ulTag.appendChild(altDishLiTag);

        const dayh2Tag = document.createElement('h3');
        dayh2Tag.innerHTML = meal.day;

        liTag.appendChild(dayh2Tag);
        liTag.appendChild(ulTag);

        document.getElementById('menu').appendChild(liTag);
    });
});
