document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const slideMenu = document.querySelector('.slide-menu');
  
    hamburger.addEventListener('click', () =>  {
      slideMenu.classList.toggle('open');
    });
  });
  
  
  let Contact = document.querySelector("#Contact")
  Contact.addEventListener("click", () => {
    window.location.href = "form.html"
  })
  
  let year = document.getElementById("year")
  year.innerHTML = new Date().getFullYear();
  
  
  document.querySelector("#signup").addEventListener("click", () => {
    let email = document.querySelector("#input").value;
    if (email === "") {
      alert("Please enter details.");
    } else {
      window.location.href = "form.html"
    }
  });