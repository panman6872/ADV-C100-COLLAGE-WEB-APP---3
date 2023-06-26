openCam();
var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 9
});

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function (event) {

    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;
    if(Content =="take may selfie")
    {
        console.log("taking selfie ----");
        speak();
    }
}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.herf = image;
    link.click();
}``

function speak() {


    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    setTimeout(function()
    {
        take_snapshot(),
        save();
    },5000);

}

function take_snapshot()
{
    console.log(imge_id);
    Webcam.snap(function(data_uri) {
        if (imge_id == "selfie1") {
            document.getElementById("result1").innerHTML = '<img id ="selfie1" src="' + data_uri + '"/>';
        }
        if (imge_id == "selfie2") {
            document.getElementById("result2").innerHTML = '<img id ="selfie2" src="' + data_uri + '"/>';
        }
        if (imge_id == "selfie3") {
            document.getElementById("result3").innerHTML = '<img id ="selfie3" src="' + data_uri + '"/>';
        }
    });    
}


function take_snapsot() {
    console.log(imge_id);

    Webcam.snap(function (data_uri) {
        if (imge_id == "selfie1") {
            document.getElementById("result1").innerHTML = '<img id ="selfie1" src="' + data_uri + '"/>';
        }
        if (imge_id == "selfie2") {
            document.getElementById("result2").innerHTML = '<img id ="selfie2" src="' + data_uri + '"/>';
        }
        if (imge_id == "selfie3") {
            document.getElementById("result3").innerHTML = '<img id ="selfie3" src="' + data_uri + '"/>';
        }
    })
}

function openCam(){
    let All_mediaDevices=navigator.mediaDevices
    if (!All_mediaDevices || !All_mediaDevices.getUserMedia) {
       console.log("getUserMedia() not supported.");
       return;
    }
    All_mediaDevices.getUserMedia({
       audio: false,
       video: true
    })
    .then(function(vidStream) {
       var video = document.getElementById('videoCam');
       if ("srcObject" in video) {
          video.srcObject = vidStream;
       } else {
          video.src = window.URL.createObjectURL(vidStream);
       }
       video.onloadedmetadata = function(e) {
          video.play();
       };
    })
    .catch(function(e) {
       console.log(e.name + ": " + e.message);
    });
 }
