var clap    = document.querySelector("#clap");
var hihat   = document.querySelector("#hihat");
var kick    = document.querySelector("#kick");
var openhat = document.querySelector("#openhat");
var boom    = document.querySelector("#boom");
var ride    = document.querySelector("#ride");
var snare   = document.querySelector("#snare");
var tom     = document.querySelector("#tom");
var tink    = document.querySelector("#tink");

var clapSound = new Audio('sounds/clap.wav');
var hihatSound = new Audio('sounds/hihat.wav');
var tomSound = new Audio('sounds/tom.wav');
var kickSound = new Audio('sounds/kick.wav');
var openhatSound = new Audio('sounds/openhat.wav');
var boomSound = new Audio('sounds/boom.wav');
var rideSound = new Audio('sounds/ride.wav');
var snareSound = new Audio('sounds/snare.wav');
var tinkSound = new Audio('sounds/tink.wav');

window.addEventListener("keydown", function(e){
	// console.log(e.keyCode);
	if(e.keyCode == 65)
	{
		clap.classList.add("playing");
		clapSound.currentTime = 0;
		clapSound.play();
		setTimeout(function() {
  			clap.classList.remove("playing");
		}, 200);
		

	}

	if(e.keyCode == 83)
	{
		hihat.classList.add("playing");
		hihatSound.currentTime = 0;
		hihatSound.play();
		setTimeout(function() {
  			hihat.classList.remove("playing");
		}, 200);
		

	}

	if(e.keyCode == 68)
	{
		kick.classList.add("playing");
		kickSound.currentTime = 0;
		kickSound.play();
		setTimeout(function() {
  			kick.classList.remove("playing");
		}, 200);
		

	}

	if(e.keyCode == 70)
	{
		openhat.classList.add("playing");
		openhatSound.currentTime = 0;
		openhatSound.play();
		setTimeout(function() {
  			openhat.classList.remove("playing");
		}, 200);
		

	}

	if(e.keyCode == 71)
	{
		boom.classList.add("playing");
		boomSound.currentTime = 0;
		boomSound.play();
		setTimeout(function() {
  			boom.classList.remove("playing");
		}, 200);
		

	}

	if(e.keyCode == 72)
	{
		ride.classList.add("playing");
		rideSound.currentTime = 0;
		rideSound.play();
		setTimeout(function() {
  			ride.classList.remove("playing");
		}, 200);
		

	}

	if(e.keyCode == 74)
	{
		snare.classList.add("playing");
		snareSound.currentTime = 0;
		snareSound.play();
		setTimeout(function() {
  			snare.classList.remove("playing");
		}, 200);
		

	}

	if(e.keyCode == 75)
	{
		tom.classList.add("playing");
		tomSound.currentTime = 0;
		tomSound.play();
		setTimeout(function() {
  			tom.classList.remove("playing");
		}, 200);
		

	}

	if(e.keyCode == 76)
	{
		tink.classList.add("playing");
		tinkSound.currentTime = 0;
		tinkSound.play();
		setTimeout(function() {
  			tink.classList.remove("playing");
		}, 200);
		

	}
})