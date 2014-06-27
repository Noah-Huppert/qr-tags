$(document).scroll(function(e){
  var scroll = $(window).scrollTop();

  console.log(scroll);

  var qr = $('#qrContainer');
  var smallTagName = $("#smallTagName");
  var info = $("#info");

  /*
  Small Header Track
    Start: 0
      Do:
        qrBack: None
        qr: None
        smallHeader: Map movement to just behind qr
        info: None
    End: 46
      Do:
        qrBack: None
        qr: None
        smallHeader: Stop map
        info: None

  Small Header Show
    Start: 46
      Do:
        qrBack: resize with scroll
        qr: None
        smallHeader: none
        info: None
    End: 107
      Do:
        qrBack: Stop resize
        qr: none
        smallHeader: Lock movement to qrBack
        info: None

  Top Bump
    Start: 170
      Do:
        qrBack: move down @ 1/3 scroll
        qr: move down @ 1/3 scroll
        smallHeader: move down @ 1/3
        info: None
    End: 458
      Do:
        qrBack: Lock movement
        qr: Lock movement
        smallHeader: Lock movement
        info: Lock movement

  Info scroll
    Start: 458
      Do:
        qrBack: None
        qr: None
        smallHeader: None
        info: Map scroll to padding-bottom
    End: Never
      Do: N/A
  */
  if(scroll >= 60 && scroll <= 105){
    $('#qrBack').height(300 + (scroll - 60));
  } else if(scroll >= 105){
    $('#qrBack').height(345);
  } else{
    $('#qrBack').height(300);
  }

  /*if(scroll >= 171 && scroll <= 495){
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
  }*/

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
