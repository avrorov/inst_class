function score() {


    this.x = width / 2;
    this.y = height / 2;
    var resetText = "Press the 'R' key to Re-Test";
    var rightTextN = "";
    var rightTextPF = "";
    var leftTextN = "";
    var leftTextPF = "";
    var allTextPass = "";
    var revText = "Hit the SPACEBAR To View Results!";


  

    this.show = function() {

        noStroke();
        fill('#ccc');
        rectMode(CENTER);
        rect(this.x, this.y, 1000, 600);


        textSize(56);
        textAlign(CENTER);
        fill(0);
        text(revText, this.x, this.y);
        text(allTextPass, this.x, this.y);

        textSize(21);
        textAlign(LEFT);
        fill(0);
        text(leftTextPF, this.x - 400, this.y - 260);

        textSize(21);
        textAlign(RIGHT);
        fill(0);
        text(rightTextPF, this.x + 400, this.y - 260);

        textSize(18);
        textAlign(LEFT);
        fill(0);
        text(leftTextN, this.x - 400, this.y - 200);

        textSize(18);
        textAlign(RIGHT);
        fill(0);
        text(rightTextN, this.x + 400, this.y - 200);

        textSize(26);
        textAlign(CENTER);
        fill(0);
        text(resetText, this.x , this.y + 200);


    }

    this.note = function() {
        //clear text
        revText = "";
        //ALL FOUND BOTH
        if (found250NormL && found500NormL && found1000NormL && found4000NormL && found8000NormL && found250MildL && found500MildL && found1000MildL && found4000MildL && found8000MildL && found250NormR && found500NormR && found1000NormR && found4000NormR && found8000NormR && found250MildR && found500MildR && found1000MildR && found4000MildR && found8000MildR) {
            allTextPass = "Your hearing is great in both ears!";
            //
            //
        }


        //ALL FOUND RIGHT
        if (found250NormR && found500NormR && found1000NormR && found4000NormR && found8000NormR && found250MildR && found500MildR && found1000MildR && found4000MildR && found8000MildR) {
            rightTextPF = "Right Ear" + '\n' + "You heard all the tones!" + '\n';
        }

        //NORMAL RIGHT
        if (!found250NormR || !found500NormR || !found1000NormR || !found4000NormR) {
            rightTextPF = "Right Ear" + '\n' + "Mild Hearing Loss" + '\n';
            rightTextN = "Missed tones in the Normal hearing range:" + '\n';

            if (!found250NormR) {
                rightTextN = rightTextN + " 250Hz" + '\n';
            }
            if (!found500NormR) {
                rightTextN = rightTextN + " 500Hz" + '\n';
            }
            if (!found1000NormR) {
                rightTextN = rightTextN + " 1000Hz" + '\n';
            }
            if (!found2000NormR) {
                rightTextN = rightTextN + " 2000Hz" + '\n';
            }
            if (!found4000NormR) {
                rightTextN = rightTextN + " 4000Hz" + '\n';
            }
            if (!found8000NormR) {
                rightTextN = rightTextN + " 8000Hz" + '\n';
            }


        }

        //MILD RIGHT
        if (!found250MildR || !found500MildR || !found1000MildR || !found4000MildR) {

            rightTextPF = "Right Ear" + '\n' + "Mild to Moderate Hearing Loss" + '\n';
            rightTextN = rightTextN + '\n' + "Missed tones in the Mild hearing loss range:" + '\n';

            if (!found250MildR) {
                rightTextN = rightTextN + " 250Hz" + '\n';

            }
            if (!found500MildR) {
                rightTextN = rightTextN + " 500Hz" + '\n';
            }
            if (!found1000MildR) {
                rightTextN = rightTextN + " 1000Hz" + '\n';
            }
            if (!found2000MildR) {
                rightTextN = rightTextN + " 2000Hz" + '\n';
            }
            if (!found4000MildR) {
                rightTextN = rightTextN + " 4000Hz" + '\n';
            }
            if (!found8000MildR) {
                rightTextN = rightTextN + " 8000Hz" + '\n';
            }

        }

        //ALL FOUND LEFT
        if (found250NormL && found500NormL && found1000NormL && found4000NormL && found8000NormL && found250MildL && found500MildL && found1000MildL && found4000MildL && found8000MildL) {
            leftTextPF = "Left Ear" + '\n' + "You heard all the tones!" + '\n';
        }

        //NORMAL LEFT
        if (!found250NormL || !found500NormL || !found1000NormL || !found4000NormL) {
            leftTextPF = "Left Ear" + '\n' + "Mild Hearing Loss" + '\n';
            leftTextN = "Missed tones in the Normal hearing range:" + '\n';

            if (!found250NormL) {
                leftTextN = leftTextN + " 250Hz" + '\n';
            }
            if (!found500NormR) {
                leftTextN = leftTextN + " 500Hz" + '\n';
            }
            if (!found1000NormR) {
                leftTextN = leftTextN + " 1000Hz" + '\n';
            }
            if (!found2000NormR) {
                leftTextN = leftTextN + " 2000Hz" + '\n';
            }
            if (!found4000NormR) {
                leftTextN = leftTextN + " 4000Hz" + '\n';
            }
            if (!found8000NormR) {
                leftTextN = leftTextN + " 8000Hz" + '\n';
            }


        }

        //MILD LEFT
        if (!found250MildL || !found500MildL || !found1000MildL || !found4000MildL) {

            leftTextPF = "Left Ear" + '\n' + "Mild to Moderate Hearing Loss" + '\n';
            leftTextN = leftTextN + '\n' + "Missed tones in the Mild hearing loss range:" + '\n';

            if (!found250MildL) {
                leftTextN = leftTextN + " 250Hz" + '\n';

            }
            if (!found500MildL) {
                leftTextN = leftTextN + " 500Hz" + '\n';
            }
            if (!found1000MildL) {
                leftTextN = leftTextN + " 1000Hz" + '\n';
            }
            if (!found2000MildL) {
                leftTextN = leftTextN + " 2000Hz" + '\n';
            }
            if (!found4000MildL) {
                leftTextN = leftTextN + " 4000Hz" + '\n';
            }
            if (!found8000MildL) {
                leftTextN = leftTextN + " 8000Hz" + '\n';
            }

        }




    }




}
