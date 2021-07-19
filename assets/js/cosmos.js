(function (cosmos) {
  cosmos.onReady = function (ready) {
    if (document.readyState != "loading") {
      ready();
    } else if (document.addEventListener) {
      document.addEventListener("DOMContentLoaded", ready);
    } else {
      document.attachEvent("onreadystatechange", function () {
        if (document.readyState == "complete") {
          ready();
        }
      });
    }
  };

  function handleBurgerClick() {
    const burger = document.getElementById("burger");
    const mobileNavigation = document.getElementById("mobile-navigation");
    burger.classList.toggle("active");
    mobileNavigation.classList.toggle("visible");
  }

  function initBurger() {
    const burger = document.getElementById("burger");
    burger.addEventListener("click", handleBurgerClick);
  }

  cosmos.onReady(function () {
    initBurger();
  });
})((window.cosmos = window.cosmos || {}));
