// nav bar toggle 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



// Scroll section 
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a')


window.onscroll = ()=>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height =  sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            // Add active class to current link
            navlinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }

    })
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);


    // remove toggle icon an dnavbar 

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


}

































































// form-contact


// function validateName() {
//     var name = document.getElementById('name').value;
//     if(name.length == 0) {
//       alert("Name can't be blank") ;
//       return false;

//     }
//     if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
//       alert("Please enter your correct name") ;//Validation Message
//       return false;
//     }
//     return true;
//   }

//   function validatePhone() {
//     var phone = document.getElementById('phone').value;
//     if(phone.length == 0) {
//       alert("Phone number can't be blank") ;//Validation Message
//       return false;
//     }

//     if(!phone.match(/^[0]?[789]\d{9}$/)) {
//      alert("Please enter a correct phone number") ;//Validation Message
//      return false;
//    }

//    return true;

//  }

//  function validateEmail () {

//   var email = document.getElementById('email').value;
//   if(email.length == 0) {
//     alert("Email can't be blank") ;//Validation Message
//     return false;

//   }

//   if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
//     alert("Please enter a correct email address") ;//Validation Message
//     return false;

//   }

//   return true;

// }


// function validateForm() {
//   if (!validateName() || !validatePhone() || !validateEmail()) {

//     alert("Form not submitted");//Validation Message
//     return false;
//   }
//   else {
//     submitted=true;
//     return true;
//   }
// }
