function previewImages() {
  /* CONFIG */

  xOffset = 310;
  yOffset = -60;

  // these 2 variable determine popup's distance from the cursor
  // you might want to adjust to get the right result

  /* END CONFIG */

  $("a.screenshot").hover(
    function(e) {
      var $this = $(this); // caching $(this)


      $("body").append(
        "<div id='previewImage'><img src='" +
        this.rel +
        "' alt='rens preview image' />" +
        "</div>"
      );

      $("#previewImage")
        .css("top", e.pageY - xOffset + "px")
        .css("left", e.pageX + yOffset + "px")
        .fadeIn("fast");
    },
    function() {
      var $this = $(this); // caching $(this)
      $this.text($this.data("initialText"));

      $("#previewImage").remove();
    }
  );

  $("a.screenshot").mousemove(function(e) {
    $("#previewImage")
      .css("top", e.pageY - xOffset + "px")
      .css("left", e.pageX + yOffset + "px");
  });
}

// This checks to see what the size of the window is when the page loads. If the page is more than 700 when it loads, the popup screens will not display. 

$(document).ready(function() {
   $(window).resize();
});

$(window).resize(function() {
   if ($(this).width() > 700) {
      previewImages()
   }
});



$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});



// Show / hide contact button.



var contactDiv = document.getElementById("contact")
var contactButton = document.getElementById("contactButton")

contactButton.addEventListener('click',contactAppear,false)


function contactAppear(){
  contactDiv.style.display = "block"
  $(contactDiv).addClass("animated fadeIn")
}



var accItem = document.getElementsByClassName('accordionItem');
    var accHD = document.getElementsByClassName('accordionItemHeading');
    for (i = 0; i < accHD.length; i++) {
        accHD[i].addEventListener('click', toggleItem, false);
    }
    function toggleItem() {
        var itemClass = this.parentNode.className;
        for (i = 0; i < accItem.length; i++) {
            accItem[i].className = 'accordionItem close';
        }
        if (itemClass == 'accordionItem close') {
            this.parentNode.className = 'accordionItem open';
        }
    }

