$( document ).ready(function() {
  $('#wave-a').wavify({
    height: 20,
    bones: 4,
    amplitude: 60,
    color: '#32C47F',
    speed: .15
  });

  $('#wave-b').wavify({
      height: 50,
      bones: 4,
      amplitude: 40,
      color: '#79E5B2',
      speed: .30
    });


  /*var $divs = $(".program-part").hide();

  current = 0;

  $divs.eq(0).show();
  bandera = 0;

  function showNext() {
    console.log('principio showNext');
    if ((current < $divs.length + 1) && (bandera == 0)) {
      console.log('segundo');
      $divs.eq(current).delay(2000).fadeOut('fast', function () {

        if (bandera == -1) {
            stop();
        } else {
            current++;
            if(current == 8) {
              current = 0;
            }
            $divs.eq(current).fadeIn('fast');
        }
        console.log('dentro del showNext');
        console.log('bandera'+bandera);
        console.log('current'+current);

        showNext();
      });
    } else {
      stop();
    }
  }

  showNext();

  $(function(){
    $(".program-part").hover(function(){
      bandera = -1;
      console.log('dentro del hover');
      $(this).parent().fadeIn('fast');
    }, function(){
        // cuando salga del hover volver a normalidad y poner en marcha showNext
        $(this).parent().fadeOut('fast');
        bandera = 0;
        showNext();
    });
  });*/
  


});
