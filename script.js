function toggleSidebar() {
    var sidebar = document.getElementById("mySidebar");
    var content = document.getElementById("main");
    sidebar.classList.toggle("sidebar-closed");
    content.classList.toggle("sidebar-closed");
  }

  function showContent(contentId) {
    var contentDivs = document.getElementsByClassName("content")[0].children;
    for (var i = 0; i < contentDivs.length; i++) {
      contentDivs[i].style.display = "none";
    }

    document.getElementById(contentId).style.display = "block";

    var linkElements = document.getElementsByClassName("left-panel")[0].getElementsByTagName("a");
    for (var i = 0; i < linkElements.length; i++) {
      linkElements[i].classList.remove("active");
    }
    document.getElementById(contentId + "Link").classList.add("active");
  }
  var form = document.getElementById("contactForm");
  form.addEventListener("submit", function(event) {
    alert("Submitted");
  });