//Start anonymous Finction
(function() {

    //Accesse Body tag 
    var body = document.getElementById('body');
    //Create Header Tag 
    var header = document.createElement('header');
    body.appendChild(header);
    header.setAttribute('id', 'my_header');

    //create Jason for Tag...
    var header_element = function() {
        var header_jason = [{
            logo: 'images/logo_jay_jagadamba_palace.png',
            phone: '8357080000',
            phone01: '07752357487',
            email: 'maajagdambahotel2021@gmail.com'
        }]
        document.querySelector('header').innerHTML += `
	<div class="container">
	   <div class="row">
	      <div class="col-md-4">
	         <img src="${header_jason[0].logo}" class="logo">
	      </div>
	      <div class="col-md-8">
	           <div class="my_Widget pad-10">
	               <ul class="navbar-nav nav pad_10">
	                  <li><a href="tel:"><i class="fa fa-whatsapp"></i> ${header_jason[0].phone}</a></li>
	                  <li><a href="tel:"><i class="fa fa-phone" ></i> ${header_jason[0].phone01}</a></li>
	                  <li><a href="mailto:"><i class="fa fa-envelope" ></i> ${header_jason[0].email}</a></li>
	                </ul>          
	           </div>
	       </div>
	     </div>
	     <div class="menu" onclick="my_menu()">
	        <div class="first"></div> 
	        <div class="sec"></div>
	           
	     </div>
	</div>
	`;
    }
    header_element();
})();