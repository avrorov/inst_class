function sounds() {

  var vol = 0;
  env = new p5.Env();
env.setADSR(0.05, 0.5, 0, 1);
env.scale(0,soundAmp[soundAmpPos],0,soundAmp[soundAmpPos]);

    wave = new p5.Oscillator();
    wave.start();

var freq = 340;
var amp = 0;
  wave.setType('sine');
wave.freq(freq);
wave.amp(env);


  this.show = function() {
    wave.freq(freq);
    wave.amp(amp);
  }


  this.update = function(freq,volx,pan) {

if(volx == 1){
  if(freq==250){
    vol=0.001;//fullx
  }
  else if (freq==500) {
    vol=0.0005; //2/3x
  }
  else if (freq==1000) {
    vol=0.0003; //1/2x
  }
  else if (freq==2000) {
    vol=0.00018; //1/2less x
  }
  else if (freq==4000) {
    vol=0.00018;//1/2less
  }
  else if (freq==8000) {
    vol=0.00048;//2.5/3x
  }
else{}


}
else if(volx == 2){
  if(freq==250){
    vol=0.008;//full48 + 1/2x
  }
  else if (freq==500) {
    vol=0.005;//full48x
  }
  else if (freq==1000) {
    vol=0.003;//full60 + 1.5/2x
  }
  else if (freq==2000) {
    vol=0.0025;//full60 + 1/2x
  }
  else if (freq==4000) {
    vol=0.0016;//full60 +tinyx
  }
  else if (freq==8000) {
    vol=0.004;//full48

  }

  else{}

}

env.scale(0,vol,0,vol);
    wave.freq(freq);
    wave.pan(pan);
    wave.amp(env);
    env.play();

  }

  this.replay = function(freq,vol) {
    wave.freq(freq);
    wave.amp(env);
    env.play();
  }


  this.change = function(vol,t) {
    wave.amp(vol,t);
  }
}
