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
});
