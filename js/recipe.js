const productContainer = document.querySelector(".recipe_container");
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const userId = urlParams.get("id"); 

console.log(userId);

fetch(`https://dummyjson.com/recipes/${userId}`)
  .then((response) => response.json())
  .then((data) => {
    console.log("Fetched Recipe Data:", data);

    function getRandomCardNumber() {
      return Math.floor(Math.random() * 8) + 1;
    }

    const number = getRandomCardNumber()

productContainer.innerHTML = `
        <h1 class="overskrift_recipe">${data.name}</h1>
        <ul class="recipe_list">
          <li class="border"> Servings: ${data.servings} </li>
          <li class="border"> Prep-time: ${data.prepTimeMinutes}</li>
          <li class="border">Cook-time: ${data.cookTimeMinutes}</li>
        </ul>
        <div class="grid_recipe">
          <article class="recipe_card${number}">
            <img src="https://cdn.dummyjson.com/recipe-images/${data.id}.webp" alt="Pizza" class="card_picture" />
            <h1 class="recipe_overskift${number}">${data.name}</h1>
            <p class="total_time2">Total time: ${data.prepTimeMinutes + data.cookTimeMinutes}</p>
          </article>
          <div class="ingredients">
            <h2>Ingredients:</h2>
           <ul class="ingredients_list">
            ${data.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
          </ul>
          </div>
        </div>
        <div class="instructions">
          <h2>Instructions:</h2>
          <ol class="instructions_list">
          ${data.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
          </ol>
        </div>
    `;
  });



