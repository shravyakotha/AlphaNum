var generateseq1 = [];//random sequence generated for first level
var playerseq1 = [];// player sequence clicked for 1st level
var playercount1 = 0; //player chances count in 1st level

var level = 1; 
var controller = "system";//player cannot start in the middle of the game //idea by code pen//

var playerpoints = 0;
var button = document.getElementById("startgame");
var reset = document.getElementById("resetgame");

/*var i,j;
for(i=1,j=1;i<=26,j<=26;i++,j++)
{
  var _i = document.getElementById("btnj");
  console.log(ai); 
}*/


var a = document.getElementById("btn1");
var b = document.getElementById("btn2");
var c = document.getElementById("btn3");
var d = document.getElementById("btn4");
var e = document.getElementById("btn5");
var f = document.getElementById("btn6");
var g = document.getElementById("btn7");
var h = document.getElementById("btn8");
var i = document.getElementById("btn9");
var j = document.getElementById("btn10");
var k = document.getElementById("btn11");
var l = document.getElementById("btn12");
var m = document.getElementById("btn13");
var n = document.getElementById("btn14");
var o = document.getElementById("btn15");
var p = document.getElementById("btn16");
var q = document.getElementById("btn17");
var r = document.getElementById("btn18");
var s = document.getElementById("btn19");
var t = document.getElementById("btn20");
var u = document.getElementById("btn21");
var v = document.getElementById("btn22");
var w = document.getElementById("btn23");
var x = document.getElementById("btn24");
var y = document.getElementById("btn25");
var z = document.getElementById("btn26");



function clickForStart() {

  if (controller = "system") {
    generateseq1 = [];

    
    if (level == 1 && playercount1 <= 2)
      alphaptrn(9);
    controller = "player";

  }
  
}




function alphaptrn(size) {
  
var chars = "ABC";
var charlen = chars.length;  

  for (let i = 0; i < size; i++) {
    var randomno = chars.charAt(Math.floor(Math.random() * charlen));

    console.log(randomno);
    if (level == 1) {
      generateseq1.push(randomno);
      var element1 = generateseq1.toString();
      document.getElementById("ptrn").innerHTML = element1;

    }
    
    

  }
  console.log(generateseq1);

}



a.onclick = function () {
  
  if (level == 1) {
    if (playerseq1.length <= 8)
      playerseq1.push("A");
  }
  verify();
}

b.onclick = function () {
  
  if (level == 1) {
    if (playerseq1.length <= 8)
      playerseq1.push("B");
  }
  verify();
}

c.onclick = function () {
  
  if (level == 1) {
    if (playerseq1.length <= 8)
      playerseq1.push("C");
  }
  verify();
}

d.onclick = function () {
  
  if (level == 1) {
    if (playerseq1.length <= 8)
      playerseq1.push("D");
  }
  verify();
}

e.onclick = function () {
  
  if (level == 1) {
    if (playerseq1.length <= 8)
      playerseq1.push("E");
  }
  verify();
}

f.onclick = function () {
  
  if (level == 1) {
    if (playerseq1.length <= 8)
      playerseq1.push("F");
  }
  verify();
}

g.onclick = function () {
  
  if (level == 1) {
    if (playerseq1.length <= 8)
      playerseq1.push("G");
  }
  verify();
}

h.onclick = function () {
  
  if (level == 1) {
    if (playerseq1.length <= 8)
      playerseq1.push("H");
  }
  verify();
}

i.onclick = function () {
  
  if (level == 1) {
    if (playerseq1.length <= 8)
      playerseq1.push("I");
  }
  verify();
}

j.onclick = function () {
  
  if (level == 1) {
    if (playerseq1.length <= 8)
      playerseq1.push("J");
  }
  verify();
}

k.onclick = function () {
  
  if (level == 1) {
    if (playerseq1.length <= 8)
      playerseq1.push("K");
  }
  verify();
}

l.onclick = function () {
  
  if (level == 1) {
    if (playerseq1.length <= 8)
      playerseq1.push("L");
  }
  verify();
}

m.onclick = function () {
  
  if (level == 1) {
    if (playerseq1.length <= 8)
      playerseq1.push("M");
  }
  verify();
}

n.onclick = function () {
  
  if (level == 1) {
    if (playerseq1.length <= 8)
      playerseq1.push("N");
  }
  verify();
}

o.onclick = function () {
  
  if (level == 1) {
    if (playerseq1.length <= 8)
      playerseq1.push("O");
  }
  verify();
}

p.onclick = function () {
  
  if (level == 1) {
    if (playerseq1.length <= 8)
      playerseq1.push("P");
  }
  verify();
}

q.onclick = function () {
  
  if (level == 1) {
    if (playerseq1.length <= 8)
      playerseq1.push("Q");
  }
  verify();
}

r.onclick = function () {
  
  if (level == 1) {
    if (playerseq1.length <= 8)
      playerseq1.push("R");
  }
  verify();
}

s.onclick = function () {
  
  if (level == 1) {
    if (playerseq1.length <= 8)
      playerseq1.push("S");
  }
  verify();
}

t.onclick = function () {
  
  if (level == 1) {
    if (playerseq1.length <= 8)
      playerseq1.push("T");
  }
  verify();
}

u.onclick = function () {
  
  if (level == 1) {
    if (playerseq1.length <= 8)
      playerseq1.push("U");
  }
  verify();
}

v.onclick = function () {
  
  if (level == 1) {
    if (playerseq1.length <= 8)
      playerseq1.push("V");
  }
  verify();
}

w.onclick = function () {
  
  if (level == 1) {
    if (playerseq1.length <= 8)
      playerseq1.push("W");
  }
  verify();
}

x.onclick = function () {
  
  if (level == 1) {
    if (playerseq1.length <= 8)
      playerseq1.push("X");
  }
  verify();
}

y.onclick = function () {
  
  if (level == 1) {
    if (playerseq1.length <= 8)
      playerseq1.push("Y");
  }
  verify();
}

z.onclick = function () {
  
  if (level == 1) {
    if (playerseq1.length <= 8)
      playerseq1.push("Z");
  }
  verify();
}


/*var select;
if(select== A || select== B || select== C || select== D || select== E
   || select== F || select== G || select== H || select== I || select== J
   || select== K || select== L)
   {
    select.onclick = function () {
  
      if (level == 1) {
        if (playerseq1.length <= 8)
          playerseq1.push("select");
      }
      verify();
    }
   }*/

console.log(playerseq1);

function verify() {      /*-----------own code-----------*/
  
  if (level == 1 && playerseq1.length == 9 && (JSON.stringify(playerseq1) == JSON.stringify(generateseq1)) && playercount1 <= 2)
    right(9);
  if (playerseq1.length == 9 && (JSON.stringify(playerseq1) != JSON.stringify(generateseq1)))
    wrong();
}
function right(size) {

  document.getElementById("change").innerHTML =
    '<span style= "font-weight:bold;font-size:25px">Right!!! Next pattern </font>';
    playerpoints +=  10;
  console.log(playerpoints);
  document.getElementById("finalscore").innerHTML = playerpoints;
  if (playercount1 == 2 && playerpoints == 30) {
    document.getElementById("change").innerHTML =
      '<span style= "font-weight:bold;font-size:25px">You won!!!</font>';
    level++;
  }
  
  if (playercount1 < 2)
    playercount1++;
  atstart();
  controller = "system";
  if (level == 1)
    alphaptrn(9);
  console.log(level);
}

function atstart() {
  generateseq1 = [];//random sequence generated for first level
  playerseq1 = [];// player sequence clicked for 1st level
}

function wrong() {
  document.getElementById("change").innerHTML =
    '<span style= "font-weight:bold;font-size:25px">Wrong</font>';
  atstart();
  alphaptrn(9);
}


