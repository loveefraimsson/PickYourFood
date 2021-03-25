let main = document.getElementById("main");
let categoryContainer = document.getElementById("categoryContainer");
let infoContainer = document.getElementById("infoContainer");

let categoryArray = [];

let categoryList = document.createElement("UL");
categoryContainer.appendChild(categoryList);


fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
.then(response => response.json())
.then(data => {
    printCategories(data);
})

function printCategories(data) {
    for (category in data.categories) {      
        categoryArray.push(data.categories[category].strCategory);      
    }
    categoryArray.sort();

    for (i = 0; i < categoryArray.length; i++) {
        categoryList.insertAdjacentHTML("beforeend", "<li>" + categoryArray[i] + "</li>");
    }

}

//FILTER BY CATEGORIES - https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood