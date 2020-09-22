(function() {
'use strict';
window.addEventListener('load', function() {
	

// custom Bootstrap validation styles to
var forms = document.getElementsByClassName('needs-validation');

var fname = document.getElementsByClassName('#fname_validation');

// Loop to prevent submission
var validation = Array.prototype.filter.call(forms, function(form) {
form.addEventListener('submit', function(event) {

function allLetter(inputtxt)

      { 
      	
      var letters = /^[A-Za-z]+$/;
      if(inputtxt.value.match(letters))
      {
      
      return true;
      }
      else
      {
      
      return false;
      }
      }

if ((form.checkValidity() === false) || (allLetter(fname)==false) ) {

event.preventDefault();
event.stopPropagation();

}



form.classList.add('was-validated');
}, false);
});
}, false);
})();