const targetPosition = 450;

// window.addEventListener('load', () => {
//     var navbar = document.querySelector('#apna-navbar');
// });

function addClass(className) {
    const navbar = document.querySelector('#apna-navbar');
    navbar.classList.add(className);
}

function removeClass(className) {
    const navbar = document.querySelector('#apna-navbar');
    navbar.classList.remove(className);
}

function belowTarget(sp) {
    return sp > targetPosition;
}

function aboveTarget(sp) {
    return sp < targetPosition;
}

function containsClass(className) {
    const navbar = document.querySelector('#apna-navbar');
    return navbar.classList.contains(className);
}

window.onscroll = function(e) {
    var scrollPosition = window.scrollY;

    if (scrollPosition < 200) {
        removeClass('slide-down-animation');
        removeClass('slide-up-animation');
    } else {
        if (belowTarget(scrollPosition)) {
            addClass('slide-down-animation');
            removeClass('slide-up-animation');
        } else {
            if (this.oldScroll > this.scrollY) {
                addClass('slide-up-animation');
            }
            removeClass('slide-down-animation');
        }
    }
    // print "false" if direction is down and "true" if up
    // console.log(this.oldScroll > this.scrollY);
    this.oldScroll = this.scrollY;
}