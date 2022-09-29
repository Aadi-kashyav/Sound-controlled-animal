var dog = 0;
var cat = 0;
var lion = 0;
var cow = 0;
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.sounClassifier('https://teachablemachine.withgoogle.com/models/-ByxjCAZC/.json',modelReady)
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if (error) {
        console.error(error);
    }
    else{
        console.log(results);
        ramdom_number_r = Math.floor(Math.random() * 255) + 1;
        ramdom_number_g = Math.floor(Math.random() * 255) + 1;
        ramdom_number_b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("result_label").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("result_confidence").innerHTML = " Accuracy - " + (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb(" + ramdom_number_r + "," + ramdom_number_g + "," + ramdom_number_b + ")";
        document.getElementById("result_confidence").style.color = "rgb("  + ramdom_number_r + "," + ramdom_number_g + "," + ramdom_number_b + ")";
        img = document.getElementById('animal-01');
        img1 = document.getElementById('animal-02');
        img2 = document.getElementById('animal-03');
        img3 = document.getElementById('animal-04');

        if(results[0].label == "barking") {
            img.src = 'dog-barking.gif';
            img1.src = 'cow.png';
            img2.src = 'Lion.jpg';
            img3.src = 'Cat.gif';
        }
        else if(results[0].label == "Snaps"){
            img.src = 'dog-barking.gif';
            img1.src = 'cow.png';
            img2.src = 'Lion.jpg';
            img3.src = 'Cat.gif';
        }
        else if(results[0].label == "Taping"){
            img.src = 'dog-barking.gif';
            img1.src = 'cow.png';
            img2.src = 'Lion.jpg';
            img3.src = 'Cat.gif';
        }
        else{
            img.src = 'dog-barking.gif';
            img1.src = 'cow.png';
            img2.src = 'Lion.jpg';
            img3.src = 'Cat.gif';
        }
    }
}
