$(document).scroll(function(e){
  var scroll = $(window).scrollTop();

  console.log(scroll);

  if(scroll >= 60 && scroll <= 105){
    $('#qrBack').height(300 + (scroll - 60));
  } else if(scroll >= 105){
    $('#qrBack').height(345);
  } else{
    $('#qrBack').height(300);
  }

  if(scroll >= 171 && scroll <= 495){/* FIX AT 390 scroll */
    $('#qrBack').css({
      'position': 'fixed',
      'margin-top': -456 + ((scroll - 172.5) / 3) + 436,
      'z-index': '3'
    });

    $('#qr img').css({
      'position': 'fixed',
      'margin-top': (scroll - 172.5) / 3
    });

    $('#info').css({
      'margin-top': '556px'
    });
  } else if(scroll >= 495){
    $('#qrBack').css({
      'position': 'fixed'
    });
  } else{
    $('#qrBack').css({
      'position': 'relative',
      'margin-top': '-285px',
      'z-index': '2'
    });

    $('#qr img').css({
      'position': 'relative',
      'margin-top': '170px'
    });

    $('#info').css({
      'margin-top': '50px',
      'position': 'relative'
    });
  }

  if(scroll >= 105){
    $('#smallHeader').css({
      'position': 'absolute',
      'top': '105px'
    });
  } else{
    $('#smallHeader').css({
      'position': 'fixed',
      'top': '0px'
    });
  }
});
