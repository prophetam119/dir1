"use strict";

function showPopup() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("popup").style.animation = "show .2s ease";
    document.getElementById("main").style.display = "none";
  }
  
  function hidePopup() {
    document.getElementById("popup").style.animation = "hide .2s ease";
    setTimeout(function () {
      document.getElementById("popup").style.display = "none";
      document.getElementById("main").style.display = "block";
    }, 150);
  }

  const element = document.querySelector("#scroll__container");

  element.addEventListener('wheel', (event) => {
    event.preventDefault();
  
    element.scrollBy({
      left: event.deltaY < 0 ? -100 : 100,
      
    });
  });
