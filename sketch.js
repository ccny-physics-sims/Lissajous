/*
code taken from http://ibiblio.org/e-notes/html5/lis/lissa5.htm
*/

var aS = [];
var rad = 199;
var Max = 3*360, m1 = Max-1, m2 = Max/2;
var iXo = 0, iYo = m2/2;
//var parN = 2, parM = 1;
var parN = 1, parM = 1;

var sel;
var arr = [1,2,3,4,5,6,7];

var fr;

function setup() {
  
  frameRate(fr);
  createCanvas(640, 480);
  textSize(15);
//  slider = createSlider( 0, TWO_PI, PI);
  nSlider = createSlider(1, 7, 1), nSlider.position( 500, 100);
  mSlider = createSlider(1, 6, 1), mSlider.position( 500, 300); 
//  slider.position( 500, 100);

  background(200);
//  selectorN();
//  selectorM();
  
   sf = sin(3.14159265/m2);  
   cf = cos(3.14159265/m2);
  s = -sf; 
  c = cf;
  
  for (var i = 0; i < m2; i++) {
    s1 = s*cf + c*sf; 
    c = c*cf - s*sf; s = s1;
    aS[i] = round(rad*(1.0+s))+1;
    aS[i+m2] = round(rad*(1.0-s))+1;
  }
 }

function draw() {
  
  var n = nSlider.value(), parN = parseInt(n);
  var m = mSlider.value(); parM = parseInt(m);

  background(200);
  noFill();
  strokeWeight(4);
//  stroke(100, 120);
  stroke(100);
  translate(width/10, height/8);
  
  
   Xo = aS[iXo];
   Yo = aS[iYo];
  
  for (var j = Max; j > 0; j--) {
    iX = (iXo + parM) % Max; 
    iY = (iYo + parN) % m1;
    X = aS[iX];  
    Y = aS[iY];
    
   point(X, Y);

//  if(frameCount%30 == 0) console.log(X + " " + Y);
    iXo = iX; 
    iYo = iY; 
    Xo = X; 
    Yo = Y;
  }
  


  // if(frameCount%30 == 0) console.log( slider.value() );
}

/*
function sliderVal() {
  var N = slider.value()
  if(frameCount%30 == 0) console.log( (slider).value() );
  parN = parseInt (N);
}
*/

/*
function selectorN() {
//  textAlign(CENTER);
  sel = createSelect();
  sel.position(60, 10);
  for(var N = 0; N < arr.length; N++) sel.option(arr[N]);
  sel.changed(selectN);
}

function selectN() {
  var N = sel.value();
  console.log("N = " + N);
  parN = parseInt(N);
}

function selectorM() {
//  textAlign(CENTER);
  sel = createSelect();
  sel.position(60, 40);
  for(var M = 0; M < arr.length - 1; M++) sel.option(arr[M]);
  sel.changed(selectM);
}

function selectM() {
  var M = sel.value();
  console.log("M = " + M);
  parM = parseInt(M);
}
*/