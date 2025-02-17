const productContainer = document.querySelector(".recipe_container");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get("id"); 

console.log(productId);

fetch(`https://dummyjson.com/recipes/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    console.log("Fetched Recipe Data:", data);

productContainer.innerHTML = `
        <h1 class="overskrift_recipe">${data.name}</h1>
        <ul class="recipe_list">
          <li class="border"> ${data.servings} </li>
          <li class="border">${data.prepTimeMinutes}</li>
          <li class="border">${data.cookTimeMinutes}</li>
        </ul>
        <div class="grid_recipe">
          <article class="recipe_card">
            <img src="https://cdn.dummyjson.com/recipe-images/${data.id}.webp" alt="Pizza" class="card_picture" />
            <h1 class="recipe_overskift1">${data.name}</h1>
            <p class="total_time2">Total time: ${data.prepTimeMinutes + data.cookTimeMinutes}</p>
          </article>
          <div class="ingredients">
            <h2>Ingredients:</h2>
            <ul class="ingredients_list">
              <li>test</li>
              <li>Tomato sauce</li>
              <li>Fresh mozzarella cheese</li>
              <li>Fresh basil leaves</li>
              <li>Olive oil</li>
              <li>Salt and pepper to taste</li>
            </ul>
          </div>
        </div>
        <div class="instructions">
          <h2>Instructions:</h2>
          <ol class="instructions_list">
            <li>Preheat the oven to 475°F (245°C).</li>
            <li>Roll out the pizza dough and spread tomato sauce evenly.</li>
            <li>Top with slices of fresh mozzarella and fresh basil leaves.</li>
            <li>Drizzle with olive oil and season with salt and pepper.</li>
            <li>Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.</li>
            <li>Slice and serve hot.</li>
          </ol>
        </div>
    `;
  });

