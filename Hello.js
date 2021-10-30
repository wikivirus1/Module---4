(function(window) {
    var helloSpeaker = new Object();
    var speakWord = "Hello";
    helloSpeaker.speak = function(name) {
        console.log(speakWord + " " + name);
    };
    window.helloSpeaker = helloSpeaker;
})(window)


// var helloSpeaker = {}
// var speakWord = "Hello";
// function speak() {
//     console.log(speakWord + " " + name);
// }