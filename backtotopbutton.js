window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.querySelector(".back-to-top").style.display = "block";
    } else {
      document.querySelector(".back-to-top").style.display = "none";
    }
  };