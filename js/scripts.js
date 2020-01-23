var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

$(document).ready(function() {
  animateDiv('.pokemon-1');
  animateDiv('.pokemon-2');
  animateDiv('.pokemon-3');
  animateDiv('.pokemon-4');
  animateDiv('.pokemon-5');
  animateDiv('.pokemon-6');
  animateDiv('.pokemon-7');
  animateDiv('.pokemon-8');
  $(".close").click(function() {
    $(".about").fadeOut()
  });
});

function makeNewPosition() {
  var h = $(window).height() - 50;
  var w = $(window).width() - 50;
  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);
  return [nh, nw];
}

function animateDiv(poke) {
  var newq = makeNewPosition();
  $(poke).animate({
    top: newq[0],
    left: newq[1]
  }, 1500, function() {
    animateDiv(poke);
  });
};

$('input:checkbox').change(function() {
  if ($(this).is(':checked'))
    $(this).parent().addClass('caught');
  else
    $(this).parent().removeClass('caught')
});
