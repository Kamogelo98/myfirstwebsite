let backToTopButton = document.querySelector("#back-to-top-btn");
window.addEventListener("scroll",scrollFuction);

function scrollFuction(){
  if (window.pageYOffset>300){
    backToTopButton.style.display = "block";
  }
else{
  backToTopButton.style.display = "none";
}
}


backToTopButton.addEventListener("click",backToTop);

function backToTop(){
  window.scrollTo(0,0);
}




function validateform(){
  let userName= document.getElementById("name");
  var userEmail= document.getElementById("email");
  var userNum= document.getElementById("number");


  if(userName == "" || userEmail == "" || userNum == ""){
    alert("Please fill out the form!");
    return false;
  }else{
  alert("You have successfully submmited your form!");
  return true;
  }
}


function validatesub(){
  let userEmail=document.getElementsByClassName("email");
  if(userEmail == ""){
    alert("Please  enter your email to subscribe");
  }else{
    alert("You have successfully subscribed for our newsletter!");
  }
}