function opennav() {
    document.getElementById("sidenav").style.width = "250px";
}
function closenav() {
    document.getElementById("sidenav").style.width = "0px";
}
let attop = true;
var bar = document.getElementById(`topBar`)
var barimage = document.getElementById(`topBar`) 
var book = document.getElementById(`book`) 
var bara = document.querySelectorAll('#topBar a:not(#book):not(#currentpage)')
var topimage = document.getElementById('topimage');
var mobilebar = document.getElementById(`mobilebar`) 
var logomobile = document.getElementById(`logomobile`) 
var threelines = document.getElementById(`threelines`) 
window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        if (attop) {
            attop = false;
            bara.forEach(link => {
                link.style.color = "black";
            });
            if (book) {
                book.style.color = "white"; 
                book.style.backgroundColor = "#072343"; 
            }
            if (topimage) {
                topimage.classList.add('hidden'); 
                logomobile.classList.add('hidden'); 
                threelines.classList.add('hidden'); 
                topimage.src = './client/images/Best_Western_Logo_Horizontal-1.png'; 
                logomobile.src = './client/images/Best_Western_Logo_Horizontal-1.png'; 
                threelines.src = './client/images/3linesblue.png'; 
                topimage.classList.remove('hidden'); 
                logomobile.classList.remove('hidden'); 
                threelines.classList.remove('hidden'); 
            }
            bar.animate([
                { backgroundColor: "#072343" },
                { backgroundColor: "white" }
            ], {
                duration: 500,
                fill: 'forwards' 
            }).onfinish = function() {
                bar.style.backgroundColor = "white"; 
            };
            mobilebar.animate([
                { backgroundColor: "#072343" },
                { backgroundColor: "white" }
            ], {
                duration: 500,
                fill: 'forwards' 
            }).onfinish = function() {
                bar.style.backgroundColor = "white"; 
            };
        }
    } else {
        if (!attop) {
            attop = true;
            bara.forEach(link => {
                link.style.color = "white";
            });
            if (book) {
                book.style.color = "#072343"; 
                book.style.backgroundColor = "white"; 
            }
            if (topimage) {
                topimage.classList.add('hidden'); 
                logomobile.classList.add('hidden'); 
                threelines.classList.add('hidden');
                topimage.src = './client/images/Best_Western_Logo_Horizontal-white.png'; 
                logomobile.src = './client/images/Best_Western_Logo_Horizontal-white.png'; 
                threelines.src = './client/images/3lineswhite.png'; 
                topimage.classList.remove('hidden'); 
                logomobile.classList.remove('hidden'); 
                threelines.classList.remove('hidden'); 
            }
            bar.animate([
                { backgroundColor: "white" },
                { backgroundColor: "#072343" }
            ], {
                duration: 500,
                fill: 'forwards' // Ensure the animation persists the end state
            }).onfinish = function() {
                bar.style.backgroundColor = "#072343"; // Explicitly set background color after animation
            };
            mobilebar.animate([
                { backgroundColor: "white" },
                { backgroundColor: "#072343" }
            ], {
                duration: 500,
                fill: 'forwards' // Ensure the animation persists the end state
            }).onfinish = function() {
                bar.style.backgroundColor = "#072343"; // Explicitly set background color after animation
            };
        }
    }
});
var n = 0
function leftarrow(x,length) {
    var img = document.getElementById(`${x}img${n}`)
        img.animate([
            {opacity: 1},
            {opacity: 0}
        ], {
        duration: 1000
    })
    img.style.opacity = 0
    n -= 1
    if(n < 0) {
        n = length
    } else if(n > length) {
        n = 0
    } 
    img = document.getElementById(`${x}img${n}`)
        img.animate([
            {opacity: 0},
            {opacity: 1 }
        ], {
        duration: 1000
    })
    img.style.opacity = 1
}
function rightarrow(x,length) {
    var img = document.getElementById(`${x}img${n}`)
        img.animate([
            {opacity: 1},
            {opacity: 0}
        ], {
        duration: 1000
    })
    img.style.opacity = 0
    n += 1
    if(n < 0) {
        n = length
    } else if(n > length) {
        n = 0
    } 
    img = document.getElementById(`${x}img${n}`)
        img.animate([
            {opacity: 0},
            {opacity: 1 }
        ], {
        duration: 1000
    })
    img.style.opacity = 1
}
function opennav() {
    document.getElementById("sidenav").style.width = "250px";
}
function closenav() {
    document.getElementById("sidenav").style.width = "0px";
}