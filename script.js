// settings
var selectedEase = { ease: 'easeInOutBack' },
    selectedSpeed = { speed: 2000 },
    selectedColors = { background: '#eb8eff', top: '#d4d2ff', left: '#ffd100' },
    selectedDirection = { direction: 'backwards' };

var directionsString = {
  backwards: 'backwards',
  forwards: 'forwards',
  innerMorph: 'innerMorph',
  outerMorph: 'outerMorph'
};

var directions = {
  backwards: { leftY: 75, topY: 38, topX: -66 },
  forwards: { leftY: -75, topY: -38, topX: 66 },
  innerMorph: { leftY: -75, topY: 38, topX: -66 },
  outerMorph: { leftY: 75, topY: -38, topX: 66 },
};

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
  translateY: directions[selectedDirection.direction].leftY,
  loop: true,
  })
  .add({
    targets: '#top path',
    translateY: directions[selectedDirection.direction].topY,
    translateX: directions[selectedDirection.direction].topX,
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
var directionSelector = gui.add(selectedDirection, 'direction', directionsString );
var bgColor = gui.addColor(selectedColors, 'background'); 
var leftColor= gui.addColor(selectedColors, 'left'); 
var topColor = gui.addColor(selectedColors, 'top'); 

easeSelector.onChange(function(){
  tl.restart();
  tl.pause();
  initAnim();
});

directionSelector.onChange(function(){
  tl.restart();
  tl.pause();
  initAnim();
});

speedSelector.onChange(function(){
  tl.restart();
  tl.pause();
  initAnim();
});

bgColor.onChange(function(){
  document.body.style.backgroundColor = selectedColors.background;
});

/* Shitty implementation...  */
leftColor.onChange(function(){
  var style=document.createElement('style');
  style.appendChild(document.createTextNode('.st1{fill:' + selectedColors.left + ' !important;}'));
  document.getElementsByTagName('head')[0].appendChild(style);
});

topColor.onChange(function(){
  var style=document.createElement('style');
  style.appendChild(document.createTextNode('.st18{fill:' + selectedColors.top + ' !important;}'));
  document.getElementsByTagName('head')[0].appendChild(style);
});