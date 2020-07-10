window.handleHomeRequest = () => {
  document.body.innerHTML = `<header>
  <div class="container">
    <div class="logo-box">
      <a href="/">
        <img src="pages/mealsharing_logo.png">
      </a>
    </div>
    <nav>
    <ul>
      <li><a href="">home</a></li>
      <li><a href="">work</a></li>
      <li><a href="meals" data-navigo>Meals</a></li>
      <li><a href="">about</a></li>
      <li><a href="">contact</a></li>
   </ul>
  </nav>
  </div>
</header>
  <div class="main_img"></div>
  <div class="topnav" id="myTopnav">
		<footer class="footer-distributed">

			<div class="footer-right">

				<a href="#"><i class="fa fa-facebook"></i></a>
				<a href="#"><i class="fa fa-twitter"></i></a>
				<a href="#"><i class="fa fa-linkedin"></i></a>
				<a href="#"><i class="fa fa-github"></i></a>

			</div>

			<div class="footer-left">

				<p class="footer-links">

					<a class="link-1" href="#">Blog</a>

					<a href="#">Pricing</a>

					<a href="#">Faq</a>
				</p>

				<p>Company Name &copy; 2020</p>
			</div>

		</footer>
  `;

  // if any links are added to the dom, use this function
  // make the router handle those links.
  router.updatePageLinks();
};
