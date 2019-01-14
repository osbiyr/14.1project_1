function cloneThat(){
		//if (dataArr === undefined){
		//	console.error("What the hell, no data");
		//	return null;
		//}
	

	var dataArr = document.getElementsByName('reg_form');
     
	

	var indicators = ["first_name","last_name","email","password","confirm_password","m","f"];



	var target = document.querySelector("#output");

	
	
	var template = document.querySelector("#new_data");
	
	var clonedCont = template.cloneNode(true);
	clonedCont.id = "neweStat" + Math.random();
	
	for(var i = 0; i < indicators.length;i++){
	  var current = indicators[i];
	  clonedCont.querySelector('.' + current).innerText = current+":"+" "+dataArr[i].value;

	  }

	return target.append(clonedCont);



                }
		 document.querySelector("#sub").addEventListener("click", function(event) {
         event.preventDefault();
              }, false);
			  
function confirm_pass() {

    var password1 = document.querySelector("#pas1");
    var confirmPassword = document.querySelector("#pas2");

    if (password1.value != confirmPassword.value) {
      confirmPassword.setCustomValidity("Passwords do not match"); //if the passwords are not equal.
                                                  } 
    else {
    confirmPassword.setCustomValidity(""); //if they do equal continue.
         }

                       }