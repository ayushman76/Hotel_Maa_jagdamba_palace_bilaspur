(function() {
    var body = document.getElementById('body');
    var section = document.createElement('section');

    body.appendChild(section);
	
	
	document.querySelector('section').innerHTML += `
       <div class="container">
	        <div class="row">
			     <div class="col-md-12">
				    <h1 class="color_white">Our Book Your Table & Room</h1>
				 </div>
			</div>
	   </div>`
        ;
})()

var form = function(){
	 var body = document.getElementById('my_body');
    var article09 = document.createElement('article');
	
	body.appendChild(article09);
	article09.setAttribute('class','article09');
	
	article09.innerHTML+=`
	   <div class="container">
	        <div class="row">
			    <div class="col-md-6">
				    <div class="my_form">
					     <h2>Don't be Feel Hasitate To Contact Us</h3>
						 <form>
						      <div class="form-group">
							      <input type="text" placeholder="Name" class="form-control">
							  </div>
							  <div class="form-group">
							      <input type="Email" placeholder="Email" class="form-control">
							  </div>
							  <div class="form-group">
							      <input type="text" placeholder="Phone" class="form-control">
							  </div>
							  <div class="form-group">
							      <input type="date" placeholder="Date" class="form-control">
							  </div>
							  <div class="form-group">
							      <input type="city" placeholder="city" class="form-control">
							  </div>
							  <div class="form-group">
							      <input type="text" placeholder="Table/Room" class="form-control">
							  </div>
							  <div class="form-group">
							      <input type="Submit" placeholder="Table/Room" class="my_btn">
							  </div>
						 </form>
					</div>
				</div>
				<div class="col-md-6">
				    <div class="my_form pad-10">
					     <h3>Visit Us</h3>
						 <ul class="nav">
						     <li><a href="tel:8349680000">8349680000</a></li>
							 <li><a href="tel:07752357487">07752357487</a></li>
							 <li><a href="mailto:maajagdambahotel2021@gmail.com">maajagdambahotel2021@gmail.com</a></li>
							  <li><a href="#">Mangla Road, Beside Holy Cross School, Bilaspur</a></li>
						 </ul>
						 
					</div>
				</div>
			</div>
	   </div>
	`;
	
	
}
form();