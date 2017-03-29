function Signal(x, y, side, color) {
  this.x = x;
  this.y = y;
  this.r = 20;
  this.toDelete = false;
  var speedy = random(-40,40);
  var speedx = random(-40,40);



  this.show = function() {
    push();
    noStroke();
    fill(color);
    ellipse(this.x, this.y, this.r*2, this.r*2);
    pop();
  }

  this.evaporate = function() {
    this.toDelete = true;
  }



  this.move = function() {
    this.y = this.y + speedy;
    this.x = this.x + speedx;


    if (this.y > height){
      speedy = -2;
    }
    else if (this.y < 0){
      speedy = 2;
    }


    if (this.x > width){
      speedx = -2;
    }
    else if (this.x < 0){
      speedx = 2;
    }

    if (this.x > width/2 && side<0){
      speedx = -2;
    }
    else if (this.x < width/2 && side>0){
      speedx = 2;
    }


  }

}
