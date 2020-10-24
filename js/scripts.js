const appear = (selector, d) => {
    var s = document.querySelectorAll('.'+selector);
    var spos = s[0].getBoundingClientRect().top;
    var screenpos = window.innerHeight / d;

    
    if(spos < screenpos) {
        s[0].classList.add(selector+'-a')
        s[1].classList.add(selector+'-a')
        s[2].classList.add(selector+'-a')
    }
}


window.addEventListener('scroll',() => {
    appear('p2', 2);
    appear('p1', 2);
    appear('p3', 1.7);
    appear('p4', 1.3);
});