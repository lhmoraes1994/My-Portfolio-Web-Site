// Cache selectors
var lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){


   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
 
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   //alert(cur);
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";

   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems.removeClass("nav-active").end().filter("[href='#"+id+"']");
       menuItems.attr("style","color:DarkGray").end().filter("[href='#"+id+"']");
       

       menuItems.filter("[href='#"+id+"']").addClass("nav-active").attr("style","color:black");
       
   }     
         
});
var scrollTimer = -1;
function bodyScroll() {

  var icons= document.getElementById("contact-icons");
  icons.style.opacity=0.2;

  if (scrollTimer != -1)
    clearTimeout(scrollTimer);

  scrollTimer = window.setTimeout("scrollFinished()", 500);
}

function scrollFinished() {

  var icons= document.getElementById("contact-icons");
  icons.style.opacity=1;
}
