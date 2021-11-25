const flightpath2={
    curviness: 0,
    autoRotate: false,
    values:[
       
        {x:-1900, y:0}
    ]
}

const tween2= new TimelineLite();

tween2.add(
    TweenLite.to('.robot2',1,{
bezier: flightpath2,
ease: Power1.easeInOut
    })
);

const controller2= new ScrollMagic.Controller();

const scene2 = new ScrollMagic.Scene({
    triggerElement: '.filler',
    duration: 1000,
    triggerHook:0,
})
.setTween(tween2)
.addIndicators()
.setPin(".filler")
.addTo(controller2);