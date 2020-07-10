window.handleMealRequest = (params) => {
  document.body.innerHTML = `
  <h1></h1>
  <div class="reservation_form">
  </div>
  <p></p>`
  
  fetch("/api/meals/" + `${params.id}`)
    .then((response) => response.json())
    .then((result) => {
      const mealName = result.map((meal) => meal.title);
      const h1tag = document.querySelector("h1");
      h1tag.innerHTML = `${mealName}`;
      
    });
    

  fetch("/api/reservations")
  .then((response) => response.json())
  .then((result) => {
    const mealReservationsId = result.map((reservation) => reservation.id);
    const mealId = `${params.id}`
if(mealReservationsId.includes(parseInt(mealId))){
  const div = document.querySelector("div")
  div.innerHTML = `
  <h2>Make a reservation</h2>
  <form action="/api/reservations" method="post">
    <label for="fname">FirstName:</label>
    <input type="text" id="fname" name="fname" placeholder="Your name.."><br><br>
    <label for="lname">LastName:</label>
    <input type="text" id="lname" name="lname" placeholder="Your last name.."><br><br>
    <label for="phone">Phone number:</label>
    <input type="tel" id="phone" name="phone"
      placeholder="123-456-7890"
       pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
       required><br><br>
       <label for="email">Email:</label>
    <input type="email" id="email" name="email" placeholder="example@domain.com"><br><br>
    <input type="submit" value="Submit">
  </form>`
  
}else{
  const p = document.querySelector("p")
  p.innerHTML = `Sorry no available reservations`
}
});
};
