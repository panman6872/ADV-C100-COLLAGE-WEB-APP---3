var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();
var img_id = "selfie1";

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
    boom();
}

recognition.onresult = function (event){

    var Content = event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;
    if(Content =="take may selfie")
    {
        console.log("taking selfie ----");
        var synth = window.speechSynthesis;
        img_id = "selfie1";
        speak_data = "Taking your next Selfie in 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        speak();
    }
}


function speak(){

    var synth = window.speechSynthesis;
    img_id = "selfie1";
    speak_data = "Taking your next Selfie in 10 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}

camera = document.getElementById("camera");

Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});
Webcam.attach('#camera');

function boom(){setTimeout(function(){
    var synth = window.speechSynthesis;
    img_id = "selfie1";
    speak_data = "Taking your next Selfie in 10 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    take_snapshot();
}, 10000);}


function take_snapshot()
{
console.log(img_id);

    Webcam.snap(function(data_uri) {
        if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
        }
        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
        }
        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
        }
       
    });
}
