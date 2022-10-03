const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkboxes)

function checkboxes() {
    const triggerBottom =window.innerHeight / 4 * 3
    boxes.forEach(box => {
        const boxTop=box.getBoundingClientRect().top
        if (boxTop < triggerBottom){
            box.classList.add('show')
        }
        else {
            box.classList.remove('show')
        }
    })
}

function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }