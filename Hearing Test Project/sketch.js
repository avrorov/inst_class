var found250NormL = false;
var found500NormL = false;
var found1000NormL = false;
var found2000NormL = false;
var found4000NormL = false;
var found8000NormL = false;

var found250MildL = false;
var found500MildL = false;
var found1000MildL = false;
var found2000MildL = false;
var found4000MildL = false;
var found8000MildL = false;

var found250NormR = false;
var found500NormR = false;
var found1000NormR = false;
var found2000NormR = false;
var found4000NormR = false;
var found8000NormR = false;

var found250MildR = false;
var found500MildR = false;
var found1000MildR = false;
var found2000MildR = false;
var found4000MildR = false;
var found8000MildR = false;

var count = 90;
var playing = false;

var signalColorPos = 0;
var soundFreqPos = 0;
var soundAmpPos = 0;
var signalYes = false;

var sides = 1;

var button;
var playing = false;
var userSignal;
var sounds;
var playStream;
var soundFreq = [250, 500, 1000, 2000, 4000, 8000];
var soundAmp = [1, 2];
var signalColor = ['#5f5096', '#26294a', '#01545a', '#017351', '#03c383', '#aad962', '#fbbf45', '#ef6a32', '#ed0345', '#a12a5e', '#d220ba', '#710162'];



var signals = [];

var showScore = true;

function setup() {
    createCanvas(1200, 800);

    userSignal = new userSignal();
    score = new score();
    sounds = new sounds();
    //TESTING
    //  button = createButton('play/pause');
    //  button.mousePressed(toggle);

}

function draw() {
    background(21);


    for (var i = 0; i < signals.length; i++) {
        signals[i].show();
        signals[i].move();
    }

    for (var i = signals.length - 1; i >= 0; i--) {
        if (signals[i].toDelete) {
            signals.splice(i, 1);
        }
    }


    if (floor(count) > 86) {
        //amp0
        //freq250
        textSize(56);
        textAlign(CENTER);
        fill(100);
        text("Press 'Enter' when you hear a sound", 600, 100);
   }

    if (floor(count) == 86) {
        //amp0
        //freq250
        signalColorPos = 0;
        sides = 1;
        soundFreqPos = 0;
        sounds.update(soundFreq[soundFreqPos], soundAmp[soundAmpPos], sides);
        userSignal.show();
    } else if (floor(count) == 83) {
        //amp0
        //freq250
        signalColorPos = 0;
        sides = -1;
        soundFreqPos = 0;
        sounds.update(soundFreq[soundFreqPos], soundAmp[soundAmpPos], sides);
        userSignal.show();
    } else if (floor(count) == 79) {
        //amp1
        //freq250
        signalColorPos = 1;
        soundAmpPos = 1;
        sides = 1;
        soundFreqPos = 0;
        sounds.update(soundFreq[soundFreqPos], soundAmp[soundAmpPos], sides);
        userSignal.show();
    } else if (floor(count) == 76) {
        //amp1
        //freq250
        signalColorPos = 1;
        sides = -1;
        soundFreqPos = 0;
        sounds.update(soundFreq[soundFreqPos], soundAmp[soundAmpPos], sides);
        userSignal.show();
    } else if (floor(count) == 73) {
        //amp0
        //freq500
        signalColorPos = 2;
        sides = 1;
        soundAmpPos = 0;
        soundFreqPos = 1;
        sounds.update(soundFreq[soundFreqPos], soundAmp[soundAmpPos], sides);
        userSignal.show();
    } else if (floor(count) == 70) {
        //amp0
        //freq500
        signalColorPos = 2;
        sides = -1;
        soundFreqPos = 1;
        sounds.update(soundFreq[soundFreqPos], soundAmp[soundAmpPos], sides);
        userSignal.show();
    } else if (floor(count) == 67) {
        //amp1
        //freq500
        signalColorPos = 3;
        sides = 1;
        soundAmpPos = 1;
        soundFreqPos = 1;
        sounds.update(soundFreq[soundFreqPos], soundAmp[soundAmpPos], sides);
        userSignal.show();
    } else if (floor(count) == 63) {
        //amp1
        //freq500
        signalColorPos = 3;
        sides = -1;
        soundFreqPos = 1;
        sounds.update(soundFreq[soundFreqPos], soundAmp[soundAmpPos], sides);
        userSignal.show();
    } else if (floor(count) == 60) {
        //amp0
        //freq1000
        signalColorPos = 4;
        sides = 1;
        soundAmpPos = 0;
        soundFreqPos = 2;
        sounds.update(soundFreq[soundFreqPos], soundAmp[soundAmpPos], sides);
        userSignal.show();
    } else if (floor(count) == 57) {
        //amp0
        //freq1000
        signalColorPos = 4;
        sides = -1;
        soundFreqPos = 2;
        sounds.update(soundFreq[soundFreqPos], soundAmp[soundAmpPos], sides);
        userSignal.show();
    } else if (floor(count) == 53) {
        //amp1
        //freq1000
        signalColorPos = 5;
        sides = 1;
        soundAmpPos = 1;
        soundFreqPos = 2;
        sounds.update(soundFreq[soundFreqPos], soundAmp[soundAmpPos], sides);
        userSignal.show();
    } else if (floor(count) == 49) {
        //amp1
        //freq1000
        signalColorPos = 5;
        sides = -1;
        soundFreqPos = 2;
        sounds.update(soundFreq[soundFreqPos], soundAmp[soundAmpPos], sides);
        userSignal.show();
    } else if (floor(count) == 45) {
        //amp0
        //freq2000
        signalColorPos = 6;
        sides = 1;
        soundAmpPos = 0;
        soundFreqPos = 3;
        sounds.update(soundFreq[soundFreqPos], soundAmp[soundAmpPos], sides);
        userSignal.show();
    } else if (floor(count) == 41) {
        //amp0
        //freq2000
        signalColorPos = 6;
        sides = -1;
        soundFreqPos = 3;
        sounds.update(soundFreq[soundFreqPos], soundAmp[soundAmpPos], sides);
        userSignal.show();
    } else if (floor(count) == 37) {
        //amp1
        //freq2000
        signalColorPos = 7;
        sides = 1;
        soundAmpPos = 1;
        soundFreqPos = 3;
        sounds.update(soundFreq[soundFreqPos], soundAmp[soundAmpPos], sides);
        userSignal.show();
    } else if (count == 33.00) {
        //amp1
        //freq2000
        signalColorPos = 7;
        sides = -1;
        soundFreqPos = 3;
        sounds.update(soundFreq[soundFreqPos], soundAmp[soundAmpPos], sides);
        userSignal.show();
    } else if (count == 29.00) {
        //amp0
        //freq4000
        signalColorPos = 8;
        sides = 1;
        soundAmpPos = 0;
        soundFreqPos = 4;
        sounds.update(soundFreq[soundFreqPos], soundAmp[soundAmpPos], sides);
        userSignal.show();
    } else if (floor(count) == 25) {
        //amp0
        //freq4000
        signalColorPos = 8;
        sides = -1;
        soundFreqPos = 4;
        sounds.update(soundFreq[soundFreqPos], soundAmp[soundAmpPos], sides);
        userSignal.show();
    } else if (floor(count) == 21) {
        //amp1
        //freq4000
        signalColorPos = 9;
        sides = 1;
        soundAmpPos = 1;
        soundFreqPos = 4;
        sounds.update(soundFreq[soundFreqPos], soundAmp[soundAmpPos], sides);
        userSignal.show();
    } else if (floor(count) == 17) {
        //amp1
        //freq4000
        signalColorPos = 9;
        sides = -1;
        soundFreqPos = 4;
        sounds.update(soundFreq[soundFreqPos], soundAmp[soundAmpPos], sides);
        userSignal.show();
    } else if (floor(count) == 14) {
        //amp0
        //freq8000
        signalColorPos = 10;
        sides = 1;
        soundAmpPos = 0;
        soundFreqPos = 5;
        sounds.update(soundFreq[soundFreqPos], soundAmp[soundAmpPos], sides);
        userSignal.show();
    } else if (floor(count) == 10) {
        //amp0
        //freq8000
        signalColorPos = 10;
        sides = -1;
        soundFreqPos = 5;
        sounds.update(soundFreq[soundFreqPos], soundAmp[soundAmpPos], sides);
        userSignal.show();
    } else if (floor(count) == 7) {
        //amp1
        //freq8000
        signalColorPos = 11;
        sides = 1;
        soundAmpPos = 1;
        soundFreqPos = 5;
        sounds.update(soundFreq[soundFreqPos], soundAmp[soundAmpPos], sides);
        userSignal.show();
    } else if (floor(count) == 4) {
        //amp1
        //freq8000
        signalColorPos = 11;
        sides = -1;
        soundFreqPos = 5;
        sounds.update(soundFreq[soundFreqPos], soundAmp[soundAmpPos], sides);
        userSignal.show();
    } else {

    }



    userSignal.show();
    if (count > 0) {
        count = count - 0.01;
    } else {

        score.show();
    }
}

//TESTING
// function toggle() {
//     if (!playing) {
//         sounds.change(0.5, 1);
//         playing = true;
//     } else {
//         sounds.change(0, 1);
//         playing = false;
//     }
// }

function keyPressed() {
    if (keyCode === UP_ARROW) {

        if (soundAmpPos >= 6) {} else {
            soundAmpPos++;
            sounds.update(soundFreq[soundFreqPos], soundAmp[soundAmpPos]);
        }

    }
    if (keyCode === 32) {

        //TESTING
        // if (soundAmpPos > 0) {
        //     soundAmpPos--;
        //     sounds.update(soundFreq[soundFreqPos], soundAmp[soundAmpPos]);
        // } else {
        //
        // }

        score.note();

    }

    //TESTING
    // if (keyCode === LEFT_ARROW) {
    //
    //     if (soundFreqPos > 0) {
    //         soundFreqPos--;
    //         sounds.update(soundFreq[soundFreqPos], soundAmp[soundAmpPos]);
    //         userSignal.show();
    //     } else {
    //         soundFreqPos = 6;
    //         sounds.update(soundFreq[soundFreqPos], soundAmp[soundAmpPos]);
    //     }
    //
    // }
    //
    // if (keyCode === RIGHT_ARROW) {
    //     if (soundFreqPos == 6) {
    //         soundFreqPos = 0;
    //         sounds.update(soundFreq[soundFreqPos], soundAmp[soundAmpPos]);
    //
    //     } else {
    //         soundFreqPos++;
    //         sounds.update(soundFreq[soundFreqPos], soundAmp[soundAmpPos]);
    //         userSignal.show();
    //     }
    //
    // }

    if (keyCode === SHIFT) {

        //TESTING
      //  userSignal.replay();
      //    sounds.replay(soundFreq[soundFreqPos], soundAmp[soundAmpPos]);
      //  var signal = new Signal(userSignal.x, userSignal.y, sides, signalColor[signalColorPos]);
      //  signals.push(signal);
        //TESTING
        // console.log(soundFreq[soundFreqPos]);
        // console.log(soundAmpPos);

    }

    if (keyCode === 82) {

        //TESTING
        //  userSignal.replay();
        //    sounds.replay(soundFreq[soundFreqPos], soundAmp[soundAmpPos]);
        //  var signal = new Signal(userSignal.x, userSignal.y, sides, signalColor[signalColorPos]);
        //  signals.push(signal);
        //TESTING
        // console.log(soundFreq[soundFreqPos]);
        // console.log(soundAmpPos);


        found250NormL = false;
        found500NormL = false;
        found1000NormL = false;
        found2000NormL = false;
        found4000NormL = false;
        found8000NormL = false;

        found250MildL = false;
        found500MildL = false;
        found1000MildL = false;
        found2000MildL = false;
        found4000MildL = false;
        found8000MildL = false;

        found250NormR = false;
        found500NormR = false;
        found1000NormR = false;
        found2000NormR = false;
        found4000NormR = false;
        found8000NormR = false;

        found250MildR = false;
        found500MildR = false;
        found1000MildR = false;
        found2000MildR = false;
        found4000MildR = false;
        found8000MildR = false;

        count = 95;
        playing = false;

        signalColorPos = 0;
        soundFreqPos = 0;
        soundAmpPos = 0;
        signalYes = false;

        sides = 1;


        //signal.evaporate();


    }
    if (keyCode === ENTER) {

        //TESTING
        //  userSignal.replay();
        //  sounds.replay(soundFreq[soundFreqPos], soundAmp[soundAmpPos]);
        var signal = new Signal(userSignal.x, userSignal.y, sides, signalColor[signalColorPos]);
        signals.push(signal);

        //TESTING
        // console.log(sides);
        // console.log(soundFreq[soundFreqPos]);
        // console.log(soundAmpPos);
        // console.log("found8000NormR" + found8000NormR);
        // console.log("found4000NormR" + found4000NormR);

        if (sides == 1) {

            if (soundFreq[soundFreqPos] == 250) {
                if (soundAmpPos == 0) {
                    found250NormR = true;
                } else if (soundAmpPos == 1) {
                    found250MildR = true;
                }

            } else if (soundFreq[soundFreqPos] == 500) {
                if (soundAmpPos == 0) {
                    found500NormR = true;
                } else if (soundAmpPos == 1) {
                    found500MildR = true;
                }

            } else if (soundFreq[soundFreqPos] == 1000) {
                if (soundAmpPos == 0) {
                    found1000NormR = true;
                } else if (soundAmpPos == 1) {
                    found1000MildR = true;
                }

            } else if (soundFreq[soundFreqPos] == 2000) {
                if (soundAmpPos == 0) {
                    found2000NormR = true;
                } else if (soundAmpPos == 1) {
                    found2000MildR = true;
                }

            } else if (soundFreq[soundFreqPos] == 4000) {
                if (soundAmpPos == 0) {
                    found4000NormR = true;
                } else if (soundAmpPos == 1) {
                    found4000MildR = true;
                }

            }
            if (soundFreq[soundFreqPos] == 8000) {
                found4000NormR = true;
                if (soundAmpPos == 0) {
                    found8000NormR = true;

                } else if (soundAmpPos == 1) {

                    found8000MildR = true;
                }

            }


        }

        if (sides != 1) {

            if (soundFreq[soundFreqPos] == 250) {
                if (soundAmpPos == 0) {
                    found250NormL = true;
                } else if (soundAmpPos == 1) {
                    found250MildL = true;
                }

            } else if (soundFreq[soundFreqPos] == 500) {
                if (soundAmpPos == 0) {
                    found500NormL = true;
                } else if (soundAmpPos == 1) {
                    found500MildL = true;
                }

            } else if (soundFreq[soundFreqPos] == 1000) {
                if (soundAmpPos == 0) {
                    found1000NormL = true;
                } else if (soundAmpPos == 1) {
                    found1000MildL = true;
                }

            } else if (soundFreq[soundFreqPos] == 2000) {
                if (soundAmpPos == 0) {
                    found2000NormL = true;
                } else if (soundAmpPos == 1) {
                    found2000MildL = true;
                }

            } else if (soundFreq[soundFreqPos] == 4000) {
                if (soundAmpPos == 0) {
                    found4000NormL = true;
                } else if (soundAmpPos == 1) {
                    found4000MildL = true;
                }

            } else if (soundFreq[soundFreqPos] == 8000) {
                if (soundAmpPos == 0) {
                    found8000NormL = true;
                } else if (soundAmpPos == 1) {
                    found8000MildL = true;
                }

            }


        }


    }

}
