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
    const mobileNavigation = document.getElementById("mobile-navigation");
    this.classList.toggle("active");
    mobileNavigation.classList.toggle("visible");
  }

  function initBurger() {
    const burger = document.getElementById("burger");
    burger.addEventListener("click", handleBurgerClick);
  }

  function handleMeetingNoteClick(e) {
    if (this.classList.contains("active")) {
      this.scrollTop = 0;
      if (e.target.className === "minimize") {
        this.classList.remove("active");
        document.body.classList.remove("no-scroll");
      }
    } else {
      this.classList.add("active");
      document.body.classList.add("no-scroll");
    }
  }

  function initMeetingNotes() {
    Array.from(document.getElementsByClassName("meeting-note-overlay")).forEach(
      (element) => {
        element.addEventListener("click", handleMeetingNoteClick);
      }
    );
  }

  cosmos.onReady(function () {
    initBurger();
    initMeetingNotes();
  });
})((window.cosmos = window.cosmos || {}));
