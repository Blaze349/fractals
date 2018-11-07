var currentAnimation;
function resizeCanvas(c) {
    c.style.width ='100%';
    c.style.height='100%';   
    c.width  = c.offsetWidth;
    c.height = c.offsetHeight;
}
// sierspinksi process specification
// Final recursion should result in a triangle drawn and filled at positions (a, b, c) - [(ax, ay), (bx, by), (cx, cy)]
// if final iteration then draw otherwise:
// Generate three new midpoint points:
// [(Abx, Aby), (Bcx, Bcy), (Cax, Cay)]
// For each two midpoints and one normal point there is a triangle so
// [(Ab, B, Bc), (Ca, A, Ab), (Bc, C, Ca)]
//redo sier

function genMid(a, b) {
  return (a + b) / 2
}

function sier(ax, ay, bx, by, cx, cy, n, ctx) {
  if (n > 0) {
    //gen mid points
    var abx = genMid(ax, bx)
    var aby = genMid(ay, by)
    var bcx = genMid(bx, cx)
    var bcy = genMid(by, cy)
    var cax = genMid(cx, ax)
    var cay = genMid(cy, ay)

    sier(abx, aby, bx, by, bcx, bcy, n-1, ctx)
    sier(cax, cay, ax, ay, abx, aby, n-1, ctx)
    sier(bcx, bcy, cx, cy, cax, cay, n-1, ctx)


  } else {
        ctx.beginPath()
      ctx.fillStyle = randomColor()
      ctx.strokeStyle = randomColor()       
        console.log(randomColor())
        console.log(randomColor())
      ctx.moveTo(ax, ay)
      ctx.lineTo(bx, by)
      ctx.lineTo(cx, cy)
      ctx.lineTo(ax, ay)
              ctx.fill()
        ctx.stroke()

  }
}

var sierInter = 0;
var sideLength = 0;
var height = 0;

function drawSier() {
     var c = document.getElementById("myCanvas")

    var ctx = c.getContext("2d")
    ctx.clearRect(0,0,c.width, c.height)
        ctx.beginPath()

        sier((c.width / 2) - (sideLength / 2),(c.height/2) + (height/2), c.width/2, (c.height / 2) - (height/2), (c.width/2) + (sideLength / 2), (c.height/2) + (height/2), sierInter, ctx)
   

        
    if (sierInter < 7) {
     sierInter++
    }
    else {
        sierInter = 0

    } 
        console.log(sierInter)

}


function mandlebrot() {
   $(".is-active").removeClass("is-active")
    $("#mand").addClass("is-active")
}

function sierspinski() {
   $(".is-active").removeClass("is-active")
    $("#sier").addClass("is-active")
    var c = document.getElementById("myCanvas")

    resizeCanvas(c)
    var ctx = c.getContext("2d")


    console.log(c.width)  

    sideLength = c.width / 2
    height = Math.sqrt(Math.pow(sideLength, 2) - Math.pow(sideLength / 2, 2))

    console.log(sideLength)
    console.log(height)
    
    currentAnimation = window.setInterval(drawSier, 1000)

}

function koch() {
   $(".is-active").removeClass("is-active")
    $("#koch").addClass("is-active")

}
