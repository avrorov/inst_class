function userSignal() {
this.x = width/2;
this.y = height/2;
this.r = 90;

  this.show = function() {

  noStroke();
 fill(signalColor[signalColorPos]);
    ellipse(this.x, this.y, this.r*2, this.r*2);
    push();
    fill(0);
    textSize(62);
    textAlign(CENTER,CENTER);
    text(floor(count),this.x,this.y);
    pop();
  }


  this.grow = function() {
    this.r = this.r + 8;
  }


}
