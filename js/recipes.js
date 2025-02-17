const listContainer = document.querySelector(".card_grid");
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const mealType = urlParams.get("mealType");

console.log(mealType)

fetch(`https://dummyjson.com/recipes?mealType=${mealType}`)
.then((response) => response.json())
.then((data) => showList(data.recipes));

function showList(recipes){
    console.log(recipes);
    let markup = "";
    recipes.map((recipe)=>{
        markup +=
        ` <article class="card_1">
         <a href="recipe.html">
          <img src="https://cdn.dummyjson.com/recipe-images/${recipe.id}.webp" alt="Pizza" class="card_picture" />
          <h1 class="card_overskift1">${recipe.name}</h1>
          <p class="total_time">Total time: ${recipe.prepTimeMinutes + recipe.cookTimeMinutes}</p></a>
        </article>`;
    })
    .join("");
    listContainer.innerHTML = markup;
}

fetch('https://dummyjson.com/recipes')
  .then((response) => response.json())
  .then(showRecipe);

function showRecipe(data) {
  console.log("Full API response:", data); // Log the structure to see the data

  // Access the 'recipes' array inside the data object
  const recipes = data.recipes;

  console.log("Recipes array:", recipes); // Log the recipes array

  // Create a Set to collect unique meal types
  const mealTypes = new Set();

  // Loop through all recipes and add each mealType to the Set
  recipes.forEach((recipe) => {
    recipe.mealType.forEach((meal) => mealTypes.add(meal));
  });

  console.log("Unique meal types:", [...mealTypes]); // Log the unique meal types

  // Now generate the markup using only the unique meal types
  const markup = [...mealTypes]
    .map(
      (meal) => `
        <a href="recipes.html?mealType=${meal}">
          <li>${meal}</li>
        </a>`
    )
    .join("");

  console.log("Generated markup:", markup); // Log the generated markup
  document.querySelector(".category_list").innerHTML = markup; // Update the DOM with the links
}



