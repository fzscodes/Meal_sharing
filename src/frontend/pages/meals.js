window.handleMealsRequest = async() => {
  document.body.innerHTML = `
  <h1>Meals</h1>
  <ul></ul>
    <form action="../../api/meals" method="post">
    <label for="fname">Title:</label>
    <input type="text" id="title" name="Title"><br><br>
    <label for="lname">Price:</label>
    <input type="text" id="price" name="Price"><br><br>
    <input type="submit" value="Submit">
  </form>`;

  // make sure the backend api works before working with it here
  const mealsResponse = await fetch("/api/meals");
  const meals = await mealsResponse.json();

const ul = document.querySelector("ul");
meals.forEach((meal) => {
  const li = document.createElement("li");
  li.innerHTML = `<a href = "meal/${meal.id}" data-navigo> ${meal.title}</a>`
  ul.appendChild(li);
});
};
