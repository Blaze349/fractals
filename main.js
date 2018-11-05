var c = document.getElementById("myCanvas")
var ctx = c.getContext("2d")

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

function sier(ax, ay, bx, by, cx, cy, n) {
  if (n > 0) {
    //gen mid points
    var abx = genMid(ax, bx)
    var aby = genMid(ay, by)
    var bcx = genMid(bx, cx)
    var bcy = genMid(by, cy)
    var cax = genMid(cx, ax)
    var cay = genMid(cy, ay)

    sier(abx, aby, bx, by, bcx, bcy, n-1)
    sier(cax, cay, ax, ay, abx, aby, n-1)
    sier(bcx, bcy, cx, cy, cax, cay)


  } else {

    //draw(ax, ay, bx, by, cx, cy)
  }
}


function mandlebrot() {
   $(".is-active").removeClass("is-active")
    $("#mand").addClass("is-active")
}

function sierspinski() {
   $(".is-active").removeClass("is-active")
    $("#sier").addClass("is-active")

    ctx.fillStyle = "#FF0000"
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 3

    sier(100,100, 200, 200, 300, 300, 0)
    
    ctx.fill()
    ctx.stroke()
}

function koch() {
   $(".is-active").removeClass("is-active")
    $("#koch").addClass("is-active")

}
