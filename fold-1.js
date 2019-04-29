// settings
var selectedEase = { ease: 'linear' },
    selectedSpeed = { speed: 2000 };

// global
var tl = {};

function initAnim() {
  tl = anime.timeline({
  loop: true,
  duration: selectedSpeed.speed,
  easing: selectedEase.ease
});
  
tl.add({
  targets: '#left path',
  translateY: -93,
  loop: true,
  })
  .add({
    targets: '#top path',
    translateY: -45,
    translateX: 81,
    loop: true
  }, '-=' + selectedSpeed.speed)
    .add({
    targets: '#right path',
    translateY: 93,
    loop: true
  }, '-=' + selectedSpeed.speed)
  .add({
    targets: '#bottom path',
    translateY: 45,
    translateX: -81,
    loop: true
  }, '-=' + selectedSpeed.speed)

}
  
initAnim();

/* DAT GUI */
var eases = {
  linear: 'linear',
  easeInOutSine: 'easeInOutSine', 
  easeInOutCubic: 'easeInOutCubic', 
  easeInOutExpo: 'easeInOutExpo', 
  easeInOutBack: 'easeInOutBack', 
  stopMotion: 'steps(10)'
};

var gui = new dat.GUI({name: 'Planes'});
var speedSelector = gui.add(selectedSpeed, 'speed', 0, 8000);
var easeSelector = gui.add(selectedEase, 'ease', eases );

easeSelector.onChange(function(){
  tl.restart();
  tl.pause()
  initAnim();
});

speedSelector.onChange(function(){
  tl.restart();
  tl.pause()
  initAnim();
});


