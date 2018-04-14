$(document).ready(function(){


  // page loads back to top on refresh
    // $(this).scrollTop(0);
  window.onbeforeunload = function(){
    window.scrollTo(0,0);
  }
  //fade in text about section
  $('.heading-text').delay(2000).fadeIn(2000);

  var texts = $('.texts');
  var textIndex = -1;

  function showText(){
    ++textIndex;
    texts.eq(textIndex % texts.length)
    .fadeIn(1200)
    .delay(1000)
    .fadeOut(1200, showText)
  }
  showText();



    // change text on button on click
  $('.info-btn').on('click', function(){
    var open = $(this);
    if(open.text() === open.data('text-swap')) {
      open.text(open.data('text-original'));
    } else {
      open.data('text-original', open.text());
      open.text(open.data('text-swap'));
    }
  });

  //toggle navigation
  $('#left').on('click', function(){
    // $(this).toggleClass('rotate');
    $('.inner').toggleClass('open');
  });
  $('#right').on('click', function(){
    $(this).toggleClass('rotate-more');
    $('.inner').toggleClass('open');
  });
  $('#arrow').on('click', function(e){
    $(this).toggleClass('rotate-360');
    $('html,body').animate({
      scrollTop: 0
    }, 700);
    e.preventDefault();
  });
  $('.nav-link').on('click',function(){
    $('.inner').toggleClass('open')
  });


  //smooth scrolling
  $(function(){
    $('a[href*="#"]:not([href="#"])').on('click', function(){
      if(location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
        //figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        //does a scroll target exist
        if(target.length) {
          setTimeout(function(){
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
          },600);
          return false
        }
      }
    });
  });

  var hello = $('.heading'),
      header = $('header'),
      underline = $('.underline'),
      portfolioBox = $('.portfolio-sec'),
      project = $('.project'),
      navLink = ('.nav-link'),
      skillsBox = $('.skills-sec'),
      skills = $('.skill'),
      arrow = $('#arrow'),
      win = $(window);

      portfolioBox.css({
        'marginBottom': $('footer').height()
      })

      TweenMax.from(hello, 7, {
        y: 300,
        opacity: 0,
        ease: Elastic.easeOut
      })



      //navigation page and adding underline
      $('nav li').on('mouseenter', function(){
        underline = $(this).find('div.underline'),
            width = $(this).find('span').width();
        TweenMax.to(underline, .1, {
          width:width
        });
      })
      .on('mouseleave', function(){
         underline = $(this).find('div.underline'),
        TweenMax.to(underline, .1, {
          width: 0
        });
      })
     win.scroll(function(){
       var winScroll = $(this).scrollTop(),
           winHeight = $(this).height();
           if(winScroll >= (header.height() - hello.height()) / 2) {

           }
           if(winScroll < (header.height() - hello.height()) / 2) {

          }
       })
       win.resize(function(){
         portfolioBox.css({
           'marginBottom':
           $('footer').height()
         })
       })

       $('#portfolio').waypoint(function(){
         $('footer').css({
           'display':'block'
         })
         TweenMax.staggerTo(project, .25, {
           'opacity': 1,
           x: 0
         }, .25)
       }, {
         offset: 300
       })

       portfolioBox.waypoint(function(){

       })

       skillsBox.waypoint(function(){
         skills.filter('.toR').css({
           'opacity': 1,
           'transform': 'translateX(0)'
         });
         skills.filter('.toL').css({
           'opacity': 1,
           'trasform': 'translateX(25)'
         });
         skills.eq(1).css({
           'opacity': 1,
           'transform': 'translateY(0)'
         });
         skills.eq(4).css({
           'opacity': 1
         });
         skills.eq(7).css({
           'opacity': 1,
           'transform':'translateY(0)'
         });
       });

});
