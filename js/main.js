jQuery(document).ready(function ($) {

    navbarfunc();
    secondcanvas();
    $.scrollIt();
    navback();
    skillsin();

    animatedIn();
    $("#intro").on("mouseenter", changeblue);
    $("#intro").on("mouseleave", changeblack);

    $("#works").on("mouseenter", changeblue);
    $("#works").on("mouseleave", changeblack);

    $("#skills").on("mouseenter", changeblue);
    $("#skills").on("mouseleave", changeblack);

    $("#contact").on("mouseenter", changeblue);
    $("#contact").on("mouseleave", changeblack);


    $("body").addClass("modal-open");


    setTimeout(function () {
        $("body").removeClass("modal-open");
        $("#overlay").addClass("animated bounceOutDown");
    }, 2000);
    
    if (window.innerWidth < 750) {

        firstaltcanvas();


    } else {


        firstcanvas();

    }




});

///////////////////////////////////////////////////////
///////////////////JS ANIMATIONS///////////////////////
///////////////////////////////////////////////////////

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}



function animatedIn() {


    setTimeout(function () {
        $(".welcome-text").addClass("animated fadeInUp");

        {
            TweenMax.to($(".welcome-text"), 0.5, {
                opacity: 1,
            });
        } {
            TweenMax.to($(".logo"), 0.5, {
                opacity: 1,
                delay: 1.5
            });
        } {
            TweenMax.to($(".second-logo"), 0.5, {
                opacity: 1,
                delay: 1,
            });
        } {
            TweenMax.to($(".second-logo"), 0.5, {
                x: -20,
                y: 10,
                delay: 2,
            });
        }

        $(".logo").addClass("animated fadeIn");
        $(".second-logo").addClass("animated fadeIn");


    }, 3000);





}

$(window).scroll(function () {

    var positiontop = $(document).scrollTop();

    //         console.log(positiontop);

    var introSection = $(".main").position();
    var welcomeSection = $(".about-content").position();
    var gallerySection = $("#style_9").position();
    var skillsSection = $("#skills-hi").position();
    var contactSection = $("#contact-me").position();
    var footerSection = $(".footer").position();

    if (positiontop > (introSection.top)) {

        {
            TweenMax.to($("#about"), 0, {
                color: "black"
            });
        } {
            TweenMax.to($("#works"), 0, {
                color: "black"
            });
        } {
            TweenMax.to($("#skills"), 0, {
                color: "black"
            });
        } {
            TweenMax.to($("#contact"), 0, {
                color: "black"
            });
        }

    } else {



    }

    if (positiontop > (welcomeSection.top - 360)) {


        $(".my-image").addClass("animated rubberBand");
        $(".about-words").addClass("animated zoomIn fast delay-1s"); {
            TweenMax.to($(".my-image"), 0.5, {
                opacity: 1,
            });
        } {
            TweenMax.to($(".about-words"), 0.5, {
                opacity: 1,
            });
        }

        {
            TweenMax.to($("#about"), 0, {
                color: "#098DD0"
            });
        } {
            TweenMax.to($("#works"), 0, {
                color: "black"
            });
        } {
            TweenMax.to($("#skills"), 0, {
                color: "black"
            });
        } {
            TweenMax.to($("#contact"), 0, {
                color: "black"
            });
        }

    } else {



    }


    if (positiontop > (gallerySection.top - 360)) {


        {
            TweenMax.to($("#about"), 0, {
                color: "black"
            });
        } {
            TweenMax.to($("#works"), 0, {
                color: "#098DD0"
            });
        } {
            TweenMax.to($("#skills"), 0, {
                color: "black"
            });
        } {
            TweenMax.to($("#contact"), 0, {
                color: "black"
            });
        }

        $("div#thumb-1").addClass("animated zoomIn"); {
            TweenMax.to($("div#thumb-1"), 0.5, {
                opacity: 1,
            });
        }

        $("div#thumb-2").addClass("animated zoomIn"); {
            TweenMax.to($("div#thumb-2"), 0.5, {
                opacity: 1,
            });
        }

        $("div#thumb-3").addClass("animated zoomIn"); {
            TweenMax.to($("div#thumb-3"), 0.5, {
                opacity: 1,
            });
        }

        $("div#thumb-4").addClass("animated zoomIn"); {
            TweenMax.to($("div#thumb-4"), 0.5, {
                opacity: 1,
            });
        }

        $("div#thumb-5").addClass("animated zoomIn"); {
            TweenMax.to($("div#thumb-5"), 0.5, {
                opacity: 1,
            });
        }

        $("div#thumb-6").addClass("animated zoomIn"); {
            TweenMax.to($("div#thumb-6"), 0.5, {
                opacity: 1,
            });
        }

        $("div#thumb-7").addClass("animated zoomIn"); {
            TweenMax.to($("div#thumb-7"), 0.5, {
                opacity: 1,
            });
        }

        $("div#thumb-8").addClass("animated zoomIn"); {
            TweenMax.to($("div#thumb-8"), 0.5, {
                opacity: 1,
            });
        }

        $("div#thumb-9").addClass("animated zoomIn"); {
            TweenMax.to($("div#thumb-9"), 0.5, {
                opacity: 1,
            });
        }

        $("div#thumb-10").addClass("animated zoomIn"); {
            TweenMax.to($("div#thumb-10"), 0.5, {
                opacity: 1,
            });
        }

        $("div#thumb-11").addClass("animated zoomIn"); {
            TweenMax.to($("div#thumb-11"), 0.5, {
                opacity: 1,
            });
        }

        $("div#thumb-12").addClass("animated zoomIn"); {
            TweenMax.to($("div#thumb-12"), 0.5, {
                opacity: 1,
            });
        }


    } else {




    }

    if (positiontop > (skillsSection.top - 160)) {

        {
            TweenMax.to($("#about"), 0, {
                color: "black"
            });
        } {
            TweenMax.to($("#works"), 0, {
                color: "black"
            });
        } {
            TweenMax.to($("#skills"), 0, {
                color: "#098DD0"
            });
        } {
            TweenMax.to($("#contact"), 0, {
                color: "black"
            });
        }


        $(".skills-text-big p1").addClass("animated fadeIn"); {
            TweenMax.to($(".skills-text-big p1"), 0.5, {
                opacity: 1,
            });
        }

        $(".skills-text-big p7").addClass("animated fadeIn"); {
            TweenMax.to($(".skills-text-big p7"), 0.5, {
                opacity: 1,
            });
        }

        $(".skills-text-big p2").addClass("animated fadeIn"); {
            TweenMax.to($(".skills-text-big p2"), 0.5, {
                opacity: 1,
            });
        }

        $(".skills-text-big p3").addClass("animated fadeIn"); {
            TweenMax.to($(".skills-text-big p3"), 0.5, {
                opacity: 1,
            });
        }

        $(".skills-text-big p4").addClass("animated fadeIn"); {
            TweenMax.to($(".skills-text-big p4"), 0.5, {
                opacity: 1,
            });
        }

        $(".skills-text-big p5").addClass("animated fadeIn"); {
            TweenMax.to($(".skills-text-big p5"), 0.5, {
                opacity: 1,
            });
        }

        $(".skills-text-big p6").addClass("animated fadeIn"); {
            TweenMax.to($(".skills-text-big p6"), 0.5, {
                opacity: 1,
            });
        }

        $(".skills-text-big p8").addClass("animated fadeIn"); {
            TweenMax.to($(".skills-text-big p8"), 0.5, {
                opacity: 1,
            });
        }

        $(".skills-text-small p1").addClass("animated fadeIn"); {
            TweenMax.to($(".skills-text-small p1"), 0.5, {
                opacity: 1,
            });
        }

        $(".skills-text-small p2").addClass("animated fadeIn"); {
            TweenMax.to($(".skills-text-small p2"), 0.5, {
                opacity: 1,
            });
        }

        $(".skills-text-small p3").addClass("animated fadeIn"); {
            TweenMax.to($(".skills-text-small p3"), 0.5, {
                opacity: 1,
            });
        }

        $(".skills-text-small p4").addClass("animated fadeIn"); {
            TweenMax.to($(".skills-text-small p4"), 0.5, {
                opacity: 1,
            });
        }

        $(".skills-text-small p5").addClass("animated fadeIn"); {
            TweenMax.to($(".skills-text-small p5"), 0.5, {
                opacity: 1,
            });
        }

        $(".skills-text-small p6").addClass("animated fadeIn"); {
            TweenMax.to($(".skills-text-small p6"), 0.5, {
                opacity: 1,
            });
        }


    } else {



    }

    if (positiontop > (contactSection.top - 200)) {

        $(".contact-form-box").addClass("animated zoomInUp"); {
            TweenMax.to($(".contact-form-box"), 0.5, {
                opacity: 1,
            });
        }

        {
            TweenMax.to($("#about"), 0, {
                color: "black"
            });
        } {
            TweenMax.to($("#works"), 0, {
                color: "black"
            });
        } {
            TweenMax.to($("#skills"), 0, {
                color: "black"
            });
        } {
            TweenMax.to($("#contact"), 0, {
                color: "#098DD0"
            });
        }


    } else {



    }

    if (positiontop > (footerSection.top - 1000)) {

        {
            TweenMax.to($(".cd-nav-trigger"), 0.5, {
                background: "black",
            });
        }





    } else {

        {
            TweenMax.to($(".cd-nav-trigger"), 0.5, {
                background: "#098DD0",
            });
        }


    }


});

///////////////////////////////////////////////////////
////SKILLS HOVER AND MOVING EFFECTS///////////////////////
///////////////////////////////////////////////////////

function makeNewPosition() {

    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 500;
    var w = $(window).width() - 300;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

}

function animateDiv(myclass) {
    var newq = makeNewPosition();
    $(myclass).animate({
        top: newq[0],
        left: newq[1]
    }, 10000, function () {
        animateDiv(myclass);
    });

};




function skillsin() {

    $(".hvr-small-grow-rotate").on("click", testclick2);
    $(".hvr-grow-rotate").on("click", testclick2);

    $(".hvr-small-grow-rotate").on("mouseenter", testclick2);
    $(".hvr-small-grow-rotate").on("mouseleave", testclick3);

    $(".hvr-grow-rotate").on("mouseenter", testclick2);
    $(".hvr-grow-rotate").on("mouseleave", testclick3);

    $(".skills-logo").on("click", testclick2);
    $(".skills-logo").on("mouseenter", testclick4);
    $(".skills-logo").on("mouseleave", testclick3);
}


function animating() {

    animateDiv('#text-1');
    animateDiv('#text-2');
    animateDiv('#text-3');
    animateDiv('#text-4');
    animateDiv('#text-5');
    animateDiv('#text-6');
    animateDiv('#text-7');
    animateDiv('#text-8');

    animateDiv('#small-text-1');
    animateDiv('#small-text-2');
    animateDiv('#small-text-3');
    animateDiv('#small-text-4');
    animateDiv('#small-text-5');
    animateDiv('#small-text-6');


}



function testclick2() {

    //    $(".hvr-small-grow-rotate").addClass("animated rubberBand fast");
    $(".hvr-small-grow-rotate").toggleClass("color-blue");

    //    $(".hvr-grow-rotate").addClass("animated rubberBand fast");
    $(".hvr-grow-rotate").toggleClass("color-blue");

}

function testclick3() {


    $(".hvr-small-grow-rotate").toggleClass("color-blue");

    $(".hvr-grow-rotate").toggleClass("color-blue");




}

function testclick4() {

    $(".hvr-small-grow-rotate").addClass("animated rubberBand fast");
    $(".hvr-small-grow-rotate").toggleClass("color-blue");

    $(".hvr-grow-rotate").addClass("animated rubberBand fast");
    $(".hvr-grow-rotate").toggleClass("color-blue");

    setTimeout(function () {
        $('.hvr-small-grow-rotate').removeClass('animated rubberBand fast');
    }, 500);

    setTimeout(function () {
        $('.hvr-grow-rotate').removeClass('animated rubberBand fast');
    }, 500);


}


///////////////////////////////////////////////////////
///////////////////PRELOADER///////////////////////
///////////////////////////////////////////////////////



var bouncer = document.getElementById('bouncer')
shadow = document.getElementById('shadow'),
    tlb = new TimelineMax({
        repeat: -1
    }),
    topPos = -100;

tlb.timeScale(1);

tlb.set(bouncer, {
        y: topPos
    })
    .to(bouncer, 0.3, {
        y: topPos / 2,
        width: '50%',
        height: '90%',
        ease: Power2.easeIn
    }, 'down')
    .to(bouncer, 0.2, {
        y: 0,
        width: '100%',
        height: '50%',
        ease: Power2.easeOut
    }, 'base')
    .to(bouncer, 0.2, {
        y: topPos / 2,
        width: '50%',
        height: '80%',
        ease: Power2.easeIn
    }, 'up')
    .to(bouncer, 0.3, {
        y: topPos,
        width: '50%',
        height: '50%',
        ease: Power2.easeOut
    }, 'peak')
    .to(shadow, 0.2, {
        width: '100%',
        left: 0,
        ease: Power2.easeOut
    }, 'base')
    .to(shadow, 0.3, {
        width: '50%',
        left: '25%',
        ease: Power2.easeOut
    }, 'peak')


///////////////////////////////////////////////////////
///////////////////SCROLL APPEAR///////////////////////
///////////////////////////////////////////////////////


function navback() {

    $(document).scroll(function () {
        var $nav = $("header");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });


}

///////////////////////////////////////////////////////
///////////////////CHANGE COLOR///////////////////////
///////////////////////////////////////////////////////



function changeblue() {
    //     {TweenMax.to($(".cursor"),0,{ display: "none", opacity: 0 ,});}
    //    $(".logo").css("transform", "scale(1.5)");

    $("#intro a").css("color", "#098DD0");
    $("#works a").css("color", "#098DD0");
    $("#skills a").css("color", "#098DD0");
    $("#contact a").css("color", "#098DD0");

}


function changeblack() {

    $("#intro a").css("color", "black");
    $("#works a").css("color", "black");
    $("#skills a").css("color", "black");
    $("#contact a").css("color", "black");

}





///////////////////////////////////////////////////////////////////////
// NAV BARR FUNCTIONs//////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

$("a.active").click(function () {
    $(".navnav a").css("color", "black");
    $(this).css("color", "#098DD0");
});




function navbarfunc() {
    // browser window scroll (in pixels) after which the "menu" link is shown
    var offset = 100000;

    var navigationContainer = $('#cd-nav'),
        mainNavigation = navigationContainer.find('#cd-main-nav ul');

    var mynav = navigationContainer.find("#cd-nav-trigger");

    //hide or show the "menu" link
    checkMenu();

    $(window).scroll(function () {
        checkMenu();

    });

    //open or close the menu clicking on the bottom "menu" link
    $('.cd-nav-trigger').on('click', function () {
        $(this).toggleClass('menu-is-open');
        //we need to remove the transitionEnd event handler (we add it when scolling up with the menu open)
        mainNavigation.off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend').toggleClass('is-visible');

    });





    function checkMenu() {

        if (mainNavigation.hasClass('is-visible')) {
            $('.is-visible').on('click', function () {
                $('.cd-nav-trigger').toggleClass('menu-is-open');
                //we need to remove the transitionEnd event handler (we add it when scolling up with the menu open)
                mainNavigation.off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend').toggleClass('is-visible');

            });
        }



        if ($(window).scrollTop() > offset && !navigationContainer.hasClass('is-fixed')) {
            navigationContainer.addClass('is-fixed').find('.cd-nav-trigger').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
                mainNavigation.addClass('has-transitions');
            });
        } else if ($(window).scrollTop() >= offset) {
            //check if the menu is open when scrolling up
            if (mainNavigation.hasClass('is-visible') && !$('html').hasClass('no-csstransitions')) {
                //close the menu with animation
                mainNavigation.addClass('is-hidden').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                    //wait for the menu to be closed and do the rest
                    mainNavigation.removeClass('is-visible is-hidden has-transitions');
                    navigationContainer.removeClass('is-fixed');
                    $('.cd-nav-trigger').removeClass('menu-is-open');
                });
                //check if the menu is open when scrolling up - fallback if transitions are not supported
            } else if (mainNavigation.hasClass('is-visible') && $('html').hasClass('no-csstransitions')) {
                mainNavigation.removeClass('is-visible has-transitions');
                navigationContainer.removeClass('is-fixed');
                $('.cd-nav-trigger').removeClass('menu-is-open');
                //scrolling up with menu closed
            } else {
                navigationContainer.removeClass('is-fixed');
                mainNavigation.removeClass('has-transitions');
            }
        }
    }
}

///////////////////////////////////////////////////////////////////////
// FIRST CANVAS//////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////


function firstcanvas() {

    let ctx = createCanvas('network');
    let items = [];

    let particle_amount = 25;
    let treshhold = 250;

    let pointer = {
        x: null,
        y: null
    };




    function createCanvas(name) {
        let canvas = document.getElementById('backgroundCanvas');
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        document.body.appendChild(canvas);

        return canvas.getContext('2d');
    }

    function Proton() {
        return {
            x: anyhow(0, window.innerWidth),
            y: anyhow(0, window.innerHeight),
            direction: anyhow(0, 360),
            speedX: .25,
            speedY: .25,
            radius: anyhow(6, 4),
            fill: 'rgba(9,141,208,1)',
            boxShadow: "10px 20px 30px 10px red",
        }
    }

    function move(items) {
        items.forEach(item => {
            item.x += item.speedX * Math.cos(item.direction * Math.PI / 180);
            item.y += item.speedY * Math.sin(item.direction * Math.PI / 180);

            if (item.x > window.innerWidth || item.x < 0) item.speedX *= -1;
            if (item.y > window.innerHeight || item.y < 0) item.speedY *= -1;
        });
    }

    function draw(context, items) {
        clear(context);

        move(items);

        items.forEach((item, index) => {

            drawConnection(context, item, items.slice(index + 1));

            context.beginPath();
            context.arc(item.x, item.y, item.radius, 0, Math.PI * 2, false);
            context.fillStyle = item.fill;
            context.fill();
            context.closePath();
        });

        //Pointer connections
        drawConnection(context, pointer, items);

        requestAnimationFrame(draw.bind(null, ctx, items));
    }

    function drawConnection(context, item, others) {
        others.forEach(other => {
            let dist = distance(item, other);
            if (dist <= treshhold) {
                context.beginPath();
                context.moveTo(item.x, item.y);
                context.lineTo(other.x, other.y);
                context.strokeStyle = `rgba(9,141,208,${1 - dist/treshhold})`;
                context.stroke();
            }
        })
    }

    function clear(context) {
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }

    function anyhow(min, max) {
        return Math.floor(Math.random() * max) + min;
    }

    function distance(a, b) {
        let aa = a.x - b.x
        let bb = a.y - b.y

        return Math.sqrt(aa * aa + bb * bb);
    }

    function resize() {
	[].slice.call(document.getElementsByTagName('canvas')).forEach(el => {
            el.width = window.innerWidth;
            el.height = window.innerHeight;
        })
    }

    for (let i = 0; i < particle_amount; i++) {
        items.push(Proton());
    }

    //ctx.canvas.addEventListener('mousemove', function(event){
    //	pointer.x = event.clientX;
    //	pointer.y = event.clientY;
    //});

    requestAnimationFrame(draw.bind(null, ctx, items));
    window.addEventListener('resize', resize);

}


function firstaltcanvas() {

    let ctx = createCanvas('network');
    let items = [];

    let particle_amount = 10;
    let treshhold = 250;

    let pointer = {
        x: null,
        y: null
    };




    function createCanvas(name) {
        let canvas = document.getElementById('backgroundCanvas');
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        document.body.appendChild(canvas);

        return canvas.getContext('2d');
    }

    function Proton() {
        return {
            x: anyhow(0, window.innerWidth),
            y: anyhow(0, window.innerHeight),
            direction: anyhow(0, 360),
            speedX: .25,
            speedY: .25,
            radius: anyhow(6, 4),
            fill: 'rgba(9,141,208,1)',
            boxShadow: "10px 20px 30px 10px red",
        }
    }

    function move(items) {
        items.forEach(item => {
            item.x += item.speedX * Math.cos(item.direction * Math.PI / 180);
            item.y += item.speedY * Math.sin(item.direction * Math.PI / 180);

            if (item.x > window.innerWidth || item.x < 0) item.speedX *= -1;
            if (item.y > window.innerHeight || item.y < 0) item.speedY *= -1;
        });
    }

    function draw(context, items) {
        clear(context);

        move(items);

        items.forEach((item, index) => {

            drawConnection(context, item, items.slice(index + 1));

            context.beginPath();
            context.arc(item.x, item.y, item.radius, 0, Math.PI * 2, false);
            context.fillStyle = item.fill;
            context.fill();
            context.closePath();
        });

        //Pointer connections
        drawConnection(context, pointer, items);

        requestAnimationFrame(draw.bind(null, ctx, items));
    }

    function drawConnection(context, item, others) {
        others.forEach(other => {
            let dist = distance(item, other);
            if (dist <= treshhold) {
                context.beginPath();
                context.moveTo(item.x, item.y);
                context.lineTo(other.x, other.y);
                context.strokeStyle = `rgba(9,141,208,${1 - dist/treshhold})`;
                context.stroke();
            }
        })
    }

    function clear(context) {
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }

    function anyhow(min, max) {
        return Math.floor(Math.random() * max) + min;
    }

    function distance(a, b) {
        let aa = a.x - b.x
        let bb = a.y - b.y

        return Math.sqrt(aa * aa + bb * bb);
    }

    function resize() {
	[].slice.call(document.getElementsByTagName('canvas')).forEach(el => {
            el.width = window.innerWidth;
            el.height = window.innerHeight;
        })
    }

    for (let i = 0; i < particle_amount; i++) {
        items.push(Proton());
    }

    //ctx.canvas.addEventListener('mousemove', function(event){
    //	pointer.x = event.clientX;
    //	pointer.y = event.clientY;
    //});

    requestAnimationFrame(draw.bind(null, ctx, items));
    window.addEventListener('resize', resize);

}





///////////////////////////////////////////////////////////////////////
// SECOND CANVAS//////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// ----------------------------------------
// Particle
// ----------------------------------------

function Particle(x, y, radius) {
    this.init(x, y, radius);
}

function secondcanvas() {

    Particle.prototype = {

        init: function (x, y, radius) {

            this.alive = true;

            this.radius = radius || 10;
            this.wander = 0.15;
            this.theta = random(TWO_PI);
            this.drag = 0.92;
            this.color = '#fff';

            this.x = x || 0.0;
            this.y = y || 0.0;

            this.vx = 0.0;
            this.vy = 0.0;
        },

        move: function () {

            this.x += this.vx;
            this.y += this.vy;

            this.vx *= this.drag;
            this.vy *= this.drag;

            this.theta += random(-0.5, 0.5) * this.wander;
            this.vx += sin(this.theta) * 0.1;
            this.vy += cos(this.theta) * 0.1;

            this.radius *= 0.96;
            this.alive = this.radius > 0.5;
        },

        draw: function (ctx) {

            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, TWO_PI);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    };

    // ----------------------------------------
    // Example
    // ----------------------------------------

    var MAX_PARTICLES = 50;
    var COLOURS = ['#098DD0', '#000', ];

    var particles = [];
    var pool = [];

    var demo = Sketch.create({
        container: document.getElementById('draw-con'),
        retina: 'auto',
        width: 960,
        height: 600,

    });

    demo.setup = function () {

        // Set off some initial particles.
        var i, x, y;

        for (i = 0; i < 20; i++) {
            x = (demo.width * 0.5) + random(-100, 100);
            y = (demo.height * 0.5) + random(-100, 100);
            demo.spawn(x, y);
        }
    };

    demo.spawn = function (x, y) {

        var particle, theta, force;

        if (particles.length >= MAX_PARTICLES)
            pool.push(particles.shift());

        particle = pool.length ? pool.pop() : new Particle();
        particle.init(x, y, random(5, 40));

        particle.wander = random(0.5, 2.0);
        particle.color = random(COLOURS);
        particle.drag = random(0.9, 0.99);

        theta = random(TWO_PI);
        force = random(2, 8);

        particle.vx = sin(theta) * force;
        particle.vy = cos(theta) * force;

        particles.push(particle);
    };

    demo.update = function () {

        var i, particle;

        for (i = particles.length - 1; i >= 0; i--) {

            particle = particles[i];

            if (particle.alive) particle.move();
            else pool.push(particles.splice(i, 1)[0]);
        }
    };

    demo.draw = function () {

        demo.globalCompositeOperation = 'lighter';

        for (var i = particles.length - 1; i >= 0; i--) {
            particles[i].draw(demo);
        }
    };

    demo.mousemove = function () {

        var particle, theta, force, touch, max, i, j, n;

        for (i = 0, n = demo.touches.length; i < n; i++) {

            touch = demo.touches[i], max = random(1, 4);
            for (j = 0; j < max; j++) {
                demo.spawn(touch.x, touch.y);
            }

        }
    };


}

///////////////////////////////////////////////////////////////////////
// CURSOR FUNCTIONs//////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top:" + (e.pageY - 25) + "px; left:" + (e.pageX - 25) + "px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand")
    }, 500)
})




///////////////////////////////////////////////////////////////////////
// BREAKING / PLAY FUNCTIONS WHEN RESIZING//////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////



var jRes = jRespond([
    {
        label: 'handheld',
        enter: 0,
        exit: 767
			}, {
        label: 'tablet',
        enter: 768,
        exit: 979
			}, {
        label: 'laptop',
        enter: 980,
        exit: 1199
			}, {
        label: 'desktop',
        enter: 1600,
        exit: 12000
			}
		]);

jRes.addFunc({
    breakpoint: 'desktop',
    enter: function () {
        console.log('>>> run this for the DESKTOP breakpoint <<<');
        //                animating();
        setTimeout(function () {

            firstcanvas();

            animateDiv('#text-1');
            animateDiv('#text-2');
            animateDiv('#text-3');
            animateDiv('#text-4');
            animateDiv('#text-5');
            animateDiv('#text-6');
            animateDiv('#text-7');
            animateDiv('#text-8');

            animateDiv('#small-text-1');
            animateDiv('#small-text-2');
            animateDiv('#small-text-3');
            animateDiv('#small-text-4');
            animateDiv('#small-text-5');
            animateDiv('#small-text-6');
        }, 500);

        $('#text-1').finish().css('top', '18%').css('left', '38%').css('position', 'absolute');
        $('#text-2').finish().css('top', '18%').css('left', '63%').css('position', 'absolute');
        $('#text-3').finish().css('top', '30%').css('left', '20%').css('position', 'absolute');
        $('#text-4').finish().css('top', '32%').css('left', '57%').css('position', 'absolute');
        $('#text-5').finish().css('top', '60%').css('left', '48%').css('position', 'absolute');
        $('#text-6').finish().css('top', '63%').css('left', '70%').css('position', 'absolute');
        $('#text-7').finish().css('top', '68%').css('left', '28%').css('position', 'absolute');
        $('#text-8').finish().css('top', '78%').css('left', '43%').css('position', 'absolute');

        $('#small-text-1').finish().css('top', '23%').css('left', '46%').css('position', 'absolute');
        $('#small-text-2').finish().css('top', '42%').css('left', '28%').css('position', 'absolute');
        $('#small-text-3').finish().css('top', '48%').css('left', '60%').css('position', 'absolute');
        $('#small-text-4').finish().css('top', '56%').css('left', '23%').css('position', 'absolute');
        $('#small-text-5').finish().css('top', '70%').css('left', '58%').css('position', 'absolute');
        $('#small-text-6').finish().css('top', '78%').css('left', '65%').css('position', 'absolute');

    },
    exit: function () {



        console.log('<<< destroy this when exiting the DESKTOP breakpoint >>>');
        $("#text-1").stop();
        $("#text-2").stop();
        $("#text-3").stop();
        $("#text-4").stop();
        $("#text-5").stop();
        $("#text-6").stop();
        $("#text-7").stop();
        $("#text-8").stop();

        $("#small-text-1").stop();
        $("#small-text-2").stop();
        $("#small-text-3").stop();
        $("#small-text-4").stop();
        $("#small-text-5").stop();
        $("#small-text-6").stop();





        $('.skills-text-big p1').finish().css('top', 'auto').css('left', 'auto').css('position', 'relative');

        $('.skills-text-big p2').finish().css('top', 'auto').css('left', 'auto').css('position', 'relative');

        $('.skills-text-big p3').finish().css('top', 'auto').css('left', 'auto').css('position', 'relative');

        $('.skills-text-big p4').finish().css('top', 'auto').css('left', 'auto').css('position', 'relative');

        $('.skills-text-big p5').finish().css('top', 'auto').css('left', 'auto').css('position', 'relative');

        $('.skills-text-big p6').finish().css('top', 'auto').css('left', 'auto').css('position', 'relative');

        $('.skills-text-big p7').finish().css('top', 'auto').css('left', 'auto').css('position', 'relative');

        $('.skills-text-big p8').finish().css('top', 'auto').css('left', 'auto').css('position', 'relative');

        $('.skills-text-small p1').finish().css('top', 'auto').css('left', 'auto').css('position', 'relative');

        $('.skills-text-small p2').finish().css('top', 'auto').css('left', 'auto').css('position', 'relative');

        $('.skills-text-small p3').finish().css('top', 'auto').css('left', 'auto').css('position', 'relative');

        $('.skills-text-small p4').finish().css('top', 'auto').css('left', 'auto').css('position', 'relative');

        $('.skills-text-small p5').finish().css('top', 'auto').css('left', 'auto').css('position', 'relative');

        $('.skills-text-small p6').finish().css('top', 'auto').css('left', 'auto').css('position', 'relative');

        $('.skills-text-small p7').finish().css('top', 'auto').css('left', 'auto').css('position', 'relative');

        $('.skills-text-small p8').finish().css('top', 'auto').css('left', 'auto').css('position', 'relative');

    }

});

jRes.addFunc({
    breakpoint: 'laptop',
    enter: function () {
        console.log('>>> run this for the Latop breakpoint <<<');

        $('#text-1').removeClass('hvr-grow-rotate');
        $('#text-2').removeClass('hvr-grow-rotate');
        $('#text-3').removeClass('hvr-grow-rotate');
        $('#text-4').removeClass('hvr-grow-rotate');
        $('#text-5').removeClass('hvr-grow-rotate');
        $('#text-6').removeClass('hvr-grow-rotate');
        $('#text-7').removeClass('hvr-grow-rotate');
        $('#text-8').removeClass('hvr-grow-rotate');

        $('#small-text-1').removeClass('hvr-small-grow-rotate');
        $('#small-text-2').removeClass('hvr-small-grow-rotate');
        $('#small-text-3').removeClass('hvr-small-grow-rotate');
        $('#small-text-4').removeClass('hvr-small-grow-rotate');
        $('#small-text-5').removeClass('hvr-small-grow-rotate');
        $('#small-text-6').removeClass('hvr-small-grow-rotate');

        firstcanvas();



    },
    exit: function () {



        console.log('<<< destroy this when exiting the Laptop breakpoint >>>');
        $('#text-1').addClass('hvr-grow-rotate');
        $('#text-2').addClass('hvr-grow-rotate');
        $('#text-3').addClass('hvr-grow-rotate');
        $('#text-4').addClass('hvr-grow-rotate');
        $('#text-5').addClass('hvr-grow-rotate');
        $('#text-6').addClass('hvr-grow-rotate');
        $('#text-7').addClass('hvr-grow-rotate');
        $('#text-8').addClass('hvr-grow-rotate');

        $('#small-text-1').addClass('hvr-small-grow-rotate');
        $('#small-text-2').addClass('hvr-small-grow-rotate');
        $('#small-text-3').addClass('hvr-small-grow-rotate');
        $('#small-text-4').addClass('hvr-small-grow-rotate');
        $('#small-text-5').addClass('hvr-small-grow-rotate');
        $('#small-text-6').addClass('hvr-small-grow-rotate');


    }

});

jRes.addFunc({
    breakpoint: 'handheld',
    enter: function () {
        console.log('>>> run this for the Latop breakpoint <<<');
        firstaltcanvas();

        $('#text-1').removeClass('hvr-grow-rotate');
        $('#text-2').removeClass('hvr-grow-rotate');
        $('#text-3').removeClass('hvr-grow-rotate');
        $('#text-4').removeClass('hvr-grow-rotate');
        $('#text-5').removeClass('hvr-grow-rotate');
        $('#text-6').removeClass('hvr-grow-rotate');
        $('#text-7').removeClass('hvr-grow-rotate');
        $('#text-8').removeClass('hvr-grow-rotate');

        $('#small-text-1').removeClass('hvr-small-grow-rotate');
        $('#small-text-2').removeClass('hvr-small-grow-rotate');
        $('#small-text-3').removeClass('hvr-small-grow-rotate');
        $('#small-text-4').removeClass('hvr-small-grow-rotate');
        $('#small-text-5').removeClass('hvr-small-grow-rotate');
        $('#small-text-6').removeClass('hvr-small-grow-rotate');




    },
    exit: function () {



        console.log('<<< destroy this when exiting the Laptop breakpoint >>>');

        $('#text-1').addClass('hvr-grow-rotate');
        $('#text-2').addClass('hvr-grow-rotate');
        $('#text-3').addClass('hvr-grow-rotate');
        $('#text-4').addClass('hvr-grow-rotate');
        $('#text-5').addClass('hvr-grow-rotate');
        $('#text-6').addClass('hvr-grow-rotate');
        $('#text-7').addClass('hvr-grow-rotate');
        $('#text-8').addClass('hvr-grow-rotate');

        $('#small-text-1').addClass('hvr-small-grow-rotate');
        $('#small-text-2').addClass('hvr-small-grow-rotate');
        $('#small-text-3').addClass('hvr-small-grow-rotate');
        $('#small-text-4').addClass('hvr-small-grow-rotate');
        $('#small-text-5').addClass('hvr-small-grow-rotate');
        $('#small-text-6').addClass('hvr-small-grow-rotate');



    }

});


///////////////////////////////////////////////////////////////////////
// GALLERY CLICKING//////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

$("#thumb-1").on("click", function () {
    $("body").addClass("modal-open");
})

$("#thumb-2").on("click", function () {
    $("body").addClass("modal-open");
})
$("#thumb-3").on("click", function () {
    $("body").addClass("modal-open");
})
$("#thumb-4").on("click", function () {
    $("body").addClass("modal-open");
})
$("#thumb-5").on("click", function () {
    $("body").addClass("modal-open");
})
$("#thumb-6").on("click", function () {
    $("body").addClass("modal-open");
})
$("#thumb-7").on("click", function () {
    $("body").addClass("modal-open");
})
$("#thumb-8").on("click", function () {
    $("body").addClass("modal-open");
})
$("#thumb-9").on("click", function () {
    $("body").addClass("modal-open");
})
$("#thumb-10").on("click", function () {
    $("body").addClass("modal-open");
})
$("#thumb-11").on("click", function () {
    $("body").addClass("modal-open");
})
$("#thumb-12").on("click", function () {
    $("body").addClass("modal-open");
})

$(".modal-content").on("click", function () {
    $("body").addClass("modal-open");
})

$(".close").on("click", function () {
    $("body").removeClass("modal-open");
})

$(".modal").on("click", function () {
    $("body").removeClass("modal-open");
})


// Get the modal
var smarttime = document.getElementById("smartime");
var mrfin = document.getElementById("mr-fin");
var vapour = document.getElementById("vapour-stuff");
var shosetsu = document.getElementById("shosetsu-stuff");
var upnetty = document.getElementById("upnetty-stuff");
var wekayak = document.getElementById("wekayak-stuff");
var harmonicity = document.getElementById("harmonicity-stuff");
var wormgame = document.getElementById("worm-stuff");
var desire = document.getElementById("desire-stuff");
var metaphordesign = document.getElementById("metaphor-stuff");
var cah = document.getElementById("cah-stuff");
var tecoway = document.getElementById("tecoway-stuff");

// Get the button that opens the modal
var smart = document.getElementById("smart-thumb");
var finbtn = document.getElementById("fin-btn");
var vapourbtn = document.getElementById("vapour-btn");
var shosetsubtn = document.getElementById("shosetsu-btn");
var upnettybtn = document.getElementById("upnetty-btn");
var wekayakbtn = document.getElementById("wekayak-btn");
var harmonicitybtn = document.getElementById("harmonicity-btn");
var wormbtn = document.getElementById("worm-btn");
var desirebtn = document.getElementById("desire-btn");
var metaphorbtn = document.getElementById("metaphor-btn");
var cahbtn = document.getElementById("cah-btn");
var tecowaybtn = document.getElementById("tecoway-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];
var span4 = document.getElementsByClassName("close")[3];
var span5 = document.getElementsByClassName("close")[4];
var span6 = document.getElementsByClassName("close")[5];
var span7 = document.getElementsByClassName("close")[6];
var span8 = document.getElementsByClassName("close")[7];
var span9 = document.getElementsByClassName("close")[8];
var span10 = document.getElementsByClassName("close")[9];
var span11 = document.getElementsByClassName("close")[10];
var span12 = document.getElementsByClassName("close")[11];

// When the user clicks on the button, open the modal 
smart.onclick = function () {
    //  modal.style.display = "block";

    {
        TweenMax.to($("#smartime"), 0.2, {
            display: "block",
            opacity: 1,
        });
    }
    $("#smartime").addClass("animated pulse");
}

finbtn.onclick = function () {
    //  modal.style.display = "block";

    {
        TweenMax.to($("#mr-fin"), 0.2, {
            display: "block",
            opacity: 1,
        });
    }
    $("#mr-fin").addClass("animated pulse");
}

vapourbtn.onclick = function () {
    //  modal.style.display = "block";

    {
        TweenMax.to($("#vapour-stuff"), 0.2, {
            display: "block",
            opacity: 1,
        });
    }
    $("#vapour-stuff").addClass("animated pulse");
}

shosetsubtn.onclick = function () {
    //  modal.style.display = "block";

    {
        TweenMax.to($("#shosetsu-stuff"), 0.2, {
            display: "block",
            opacity: 1,
        });
    }
    $("#shosetsu-stuff").addClass("animated pulse");
}

upnettybtn.onclick = function () {
    //  modal.style.display = "block";

    {
        TweenMax.to($("#upnetty-stuff"), 0.2, {
            display: "block",
            opacity: 1,
        });
    }
    $("#upnetty-stuff").addClass("animated pulse");
}

wekayakbtn.onclick = function () {
    //  modal.style.display = "block";

    {
        TweenMax.to($("#wekayak-stuff"), 0.2, {
            display: "block",
            opacity: 1,
        });
    }
    $("#wekayak-stuff").addClass("animated pulse");
}

harmonicitybtn.onclick = function () {
    //  modal.style.display = "block";

    {
        TweenMax.to($("#harmonicity-stuff"), 0.2, {
            display: "block",
            opacity: 1,
        });
    }
    $("#harmonicity-stuff").addClass("animated pulse");
}

wormbtn.onclick = function () {
    //  modal.style.display = "block";

    {
        TweenMax.to($("#worm-stuff"), 0.2, {
            display: "block",
            opacity: 1,
        });
    }
    $("#worm-stuff").addClass("animated pulse");
}

desirebtn.onclick = function () {
    //  modal.style.display = "block";

    {
        TweenMax.to($("#desire-stuff"), 0.2, {
            display: "block",
            opacity: 1,
        });
    }
    $("#desire-stuff").addClass("animated pulse");
}

metaphorbtn.onclick = function () {
    //  modal.style.display = "block";

    {
        TweenMax.to($("#metaphor-stuff"), 0.2, {
            display: "block",
            opacity: 1,
        });
    }
    $("#metaphor-stuff").addClass("animated pulse");
}

cahbtn.onclick = function () {
    //  modal.style.display = "block";

    {
        TweenMax.to($("#cah-stuff"), 0.2, {
            display: "block",
            opacity: 1,
        });
    }
    $("#cah-stuff").addClass("animated pulse");
}

tecowaybtn.onclick = function () {
    //  modal.style.display = "block";

    {
        TweenMax.to($("#tecoway-stuff"), 0.2, {
            display: "block",
            opacity: 1,
        });
    }
    $("#tecoway-stuff").addClass("animated pulse");
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    //  modal.style.display = "none";

    {
        TweenMax.to($(".modal"), 0.2, {
            display: "none",
            opacity: 0,
        });
    }

}

span2.onclick = function () {
    //  modal.style.display = "none";

    {
        TweenMax.to($(".modal"), 0.2, {
            display: "none",
            opacity: 0,
        });
    }
}

span3.onclick = function () {
    //  modal.style.display = "none";

    {
        TweenMax.to($(".modal"), 0.2, {
            display: "none",
            opacity: 0,
        });
    }
}

span4.onclick = function () {
    //  modal.style.display = "none";

    {
        TweenMax.to($(".modal"), 0.2, {
            display: "none",
            opacity: 0,
        });
    }
}

span5.onclick = function () {
    //  modal.style.display = "none";

    {
        TweenMax.to($(".modal"), 0.2, {
            display: "none",
            opacity: 0,
        });
    }
}

span6.onclick = function () {
    //  modal.style.display = "none";

    {
        TweenMax.to($(".modal"), 0.2, {
            display: "none",
            opacity: 0,
        });
    }
}

span7.onclick = function () {
    //  modal.style.display = "none";

    {
        TweenMax.to($(".modal"), 0.2, {
            display: "none",
            opacity: 0,
        });
    }
}

span8.onclick = function () {
    //  modal.style.display = "none";

    {
        TweenMax.to($(".modal"), 0.2, {
            display: "none",
            opacity: 0,
        });
    }
}

span9.onclick = function () {
    //  modal.style.display = "none";

    {
        TweenMax.to($(".modal"), 0.2, {
            display: "none",
            opacity: 0,
        });
    }
}

span10.onclick = function () {
    //  modal.style.display = "none";

    {
        TweenMax.to($(".modal"), 0.2, {
            display: "none",
            opacity: 0,
        });
    }
}

span11.onclick = function () {
    //  modal.style.display = "none";

    {
        TweenMax.to($(".modal"), 0.2, {
            display: "none",
            opacity: 0,
        });
    }
}

span12.onclick = function () {
    //  modal.style.display = "none";

    {
        TweenMax.to($(".modal"), 0.2, {
            display: "none",
            opacity: 0,
        });
    }
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == smarttime || event.target == mrfin || event.target == vapour || event.target == shosetsu || event.target == upnetty || event.target == wekayak || event.target == harmonicity || event.target == wormgame || event.target == desire || event.target == metaphordesign || event.target == cah || event.target == tecoway) {
        //    modal.style.display = "none";

        {
            TweenMax.to($(".modal"), 0.2, {
                display: "none",
                opacity: 0,
            });
        }
    }
}
