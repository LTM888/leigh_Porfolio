$(document).ready(function(e){
    $win = $(window);
    $navbar = $('#header');
    $toggle = $('.toggle-button');
    var width = $navbar.width();
    toggle_onclick($win, $navbar, width);

    // resize event
    $win.resize(function(){
        toggle_onclick($win, $navbar, width);
    });

    $toggle.click(function(e){
        $navbar.toggleClass("toggle-left");
    })

});

function toggle_onclick($win, $navbar, width){
    if($win.width() <= 768){
        $navbar.css({left: `-${width}px`});
    }else{
        $navbar.css({left: '0px'});
    }
}

var typed = new Typed('#typed' , {
    strings: [
        'Software Engineer',
        'Front-End Developer',
        'Back-End Developer',
        'Freelancer',
        'Photographer'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

var typed_2 = new Typed('#typed_2' , {
    strings: [
      'Software Engineer',
      'Front-End Developer',
      'Back-End Developer',
      'Freelancer',
      'Photographer'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener('click', function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// NEW

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}


// portfolio

//need this to deactivate lightbox on small screens
$(document).ready(function () {
  
    lightboxOnResize();
   
  });
  
  $(window).resize(function() {
    lightboxOnResize();
  
  });
  
  //***ISOTOPE***
  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'masonry'
  });
  
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  
  
  
  /*
  $('#filters a').on("click", function(){
    var selector = $(this).attr('data-filter'); 
    $('#container').isotope({ filter: selector }, function(){
      if(selector == "*"){
       $(".fancybox").attr("data-fancybox-group", "gallery");
      } else{ 
       $(selector).find(".fancybox").attr("data-fancybox-group", selector);
      }
    });
    return false;
  });
  */
  
  
  
  // change is-checked class on buttons
  $('.btn-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
  
  //***LIGHTBOX***
  //https://www.no-margin-for-errors.com/projects/prettyphoto-jquery-lightbox-clone/documentation
  // $(document).delegate('a[rel="prettyPhoto[portfolio]"]', 'click', function(event) {
  //     event.preventDefault();
  //     $(this).prettyPhoto({
  //       theme: "light_square",
  //     });
  // }); 
  
  function lightboxOnResize() {
    
    if ($(window).width() < 768) {
         
          $('a[rel="prettyPhoto[portfolio]"]')
              .removeAttr('rel')
              .addClass('lightboxRemoved');
        
   $('a.lightboxRemoved').click(function( event ) {
          event.preventDefault();
     console.log("test");
        });
       // $("a[rel='prettyPhoto[portfolio]']").unbind('click');
      
      } else {
          
         $('a.lightboxRemoved').attr('rel', 'prettyPhoto[portfolio]').removeClass("lightboxRemoved");
         $("a[rel='prettyPhoto[portfolio]']").prettyPhoto({
           theme: "light_square",
         });
          
      }
  }
  


  