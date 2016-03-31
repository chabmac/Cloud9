$(document).ready(function (){

  //stellar library : parallax

  $.stellar();

  var isShowing = false;
  
  var listItems = function () {

    var menuItems = $('.nav-bottom').children();

    for (var i = 0; i < menuItems.length; i++) {
      $(menuItems[i]).css({

        'display' : 'block',
        'float' : 'none'

      })
    };

  };

  //drop-down hamburger menu

  $('.handle').on('click', function(){

    if (isShowing === false) {
      // if it is not showing, then show it
      $('.nav-bottom').css(
        {
          'max-height': '600px',
          'display': 'block'
        }
      );
      listItems();
      isShowing = true;
    } else {
      // otherwise if it's showing, hide it
      $('.nav-bottom').css(
        {
          'max-height': '0px',
        }
      );
      isShowing = false;
    }
  
  });
});