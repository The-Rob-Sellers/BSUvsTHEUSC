let visitorStart = 10
let homeStart = 0

function Vtd(){
   visitorStart += 7
   console.log(visitorStart)
}

function Vfg(){
    visitorStart += 3
    console.log(visitorStart)
}

function Htd(){
    homeStart += 7
    console.log(homeStart)
}

function Hfg(){
    homeStart += 3
    console.log(homeStart)
}

document.getElementById('visitor-score').textContent = visitorStart.toString();

document.getElementById('home-score').textContent = homeStart.toString();