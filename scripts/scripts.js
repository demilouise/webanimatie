//audio
const audioLight = document.querySelector('#light');
const audioDark = document.querySelector('#dark');
const checkbox = document.querySelector('#switch');

setTimeout(() => audioDark.volume = 0.1, 0);

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        audioLight.pause();
        audioDark.play();
    } else {
        audioDark.pause();
        audioLight.play();
    }
});

//enter key of klikken op woord enter met hulp van Bart van der Lans

window.addEventListener("keydown", function (event) {
	console.log(window.innerWidth);
    if(event.keyCode === 13 && window.innerWidth >= 1024){
    	console.log("111");
    	document.querySelector('#grasc').classList.toggle('weg1');
    }
    else if(event.keyCode === 13 && window.innerWidth > 768){
    	console.log("222");
    	document.querySelector('#grasc2').classList.toggle('weg1');
    }
    else if(event.keyCode === 13 && window.innerWidth > 414){
    	console.log("333");
    	document.querySelector('#grasc3').classList.toggle('weg1');
    }
    // if(event.keyCode === 13 && window.innerWidth > 414){
    else {
    	console.log("444");
    	document.querySelector('#grasc4').classList.toggle('weg1');
    }
}, true);

document.getElementById("klik").onclick = function() {myFunction()};
function myFunction() {
	console.log(window.innerWidth);
    if(window.innerWidth >= 1024){
    	console.log("111");
    	document.querySelector('#grasc').classList.toggle('weg1');
    }
    else if(window.innerWidth > 768){
    	console.log("222");
    	document.querySelector('#grasc2').classList.toggle('weg1');
    }
    else if(window.innerWidth > 414){
    	console.log("333");
    	document.querySelector('#grasc3').classList.toggle('weg1');
    }
    // if(window.innerWidth > 414){
    else {
    	console.log("444");
    	document.querySelector('#grasc4').classList.toggle('weg1');
    }
}

//Blend mode dark
document.querySelector('#switch').addEventListener('click', function() {
    document.querySelector('svg').classList.toggle('dark');
});

//klikken 
document.querySelector('#rozepluk').addEventListener('click', weg);
document.querySelector('#rozepluk2').addEventListener('click', weg);
document.querySelector('#rozepluk3').addEventListener('click', weg);
document.querySelector('#rozepluk4').addEventListener('click', weg);

document.querySelector('#roodrozepluk').addEventListener('click', weg);
document.querySelector('#roodrozepluk2').addEventListener('click', weg);
document.querySelector('#roodrozepluk3').addEventListener('click', weg);
document.querySelector('#roodrozepluk4').addEventListener('click', weg);

document.querySelector('#oranjepluk').addEventListener('click', weg);
document.querySelector('#oranjepluk2').addEventListener('click', weg);
document.querySelector('#oranjepluk3').addEventListener('click', weg);
document.querySelector('#oranjepluk4').addEventListener('click', weg);

document.querySelector('#geelgras').addEventListener('click', weg);
document.querySelector('#geelgras2').addEventListener('click', weg);
document.querySelector('#geelgras3').addEventListener('click', weg);
document.querySelector('#geelgras4').addEventListener('click', weg);

document.querySelector('#gelepluk').addEventListener('click', weg);
document.querySelector('#gelepluk2').addEventListener('click', weg);
document.querySelector('#gelepluk3').addEventListener('click', weg);
document.querySelector('#gelepluk4').addEventListener('click', weg);

document.querySelector('#rodepluk').addEventListener('click', weg);
document.querySelector('#rodepluk2_1_').addEventListener('click', weg);
document.querySelector('#rodepluk3').addEventListener('click', weg);
document.querySelector('#rodepluk4').addEventListener('click', weg);

document.querySelector('#rodeplukb').addEventListener('click', weg);
document.querySelector('#rodeplukb2').addEventListener('click', weg);
document.querySelector('#rodeplukb3').addEventListener('click', weg);
document.querySelector('#rodeplukb4').addEventListener('click', weg); 

document.querySelector('#zalmpluk').addEventListener('click', weg);
document.querySelector('#zalmpluk2_1_').addEventListener('click', weg);
document.querySelector('#zalmpluk3').addEventListener('click', weg);
document.querySelector('#zalmpluk4').addEventListener('click', weg);

document.querySelector('#zalmplukb').addEventListener('click', weg);
document.querySelector('#zalmplukb2').addEventListener('click', weg);
document.querySelector('#zalmplukb3').addEventListener('click', weg);
document.querySelector('#zalmplukb4').addEventListener('click', weg);

document.querySelector('#oranjecirkel').addEventListener('click', weg);
document.querySelector('#oranjecirkel2').addEventListener('click', weg);
document.querySelector('#oranjecirkel3').addEventListener('click', weg);
document.querySelector('#oranjecirkel4').addEventListener('click', weg);

document.querySelector('#gras').addEventListener('click', weg);
document.querySelector('#gras2_1_').addEventListener('click', weg);
document.querySelector('#gras3').addEventListener('click', weg);
document.querySelector('#gras4').addEventListener('click', weg);

document.querySelector('#grasb').addEventListener('click', weg);
document.querySelector('#grasb2').addEventListener('click', weg);
document.querySelector('#grasb3').addEventListener('click', weg);
document.querySelector('#grasb4').addEventListener('click', weg);

document.querySelector('#grasc').addEventListener('click', weg);
document.querySelector('#grasc2').addEventListener('click', weg);
document.querySelector('#grasc3').addEventListener('click', weg);
document.querySelector('#grasc4').addEventListener('click', weg);

document.querySelector('#groenepluk').addEventListener('click', weg);
document.querySelector('#groenepluk2_1_').addEventListener('click', weg);
document.querySelector('#groenepluk3_1_').addEventListener('click', weg);
document.querySelector('#groenepluk4').addEventListener('click', weg);

document.querySelector('#groeneplukb').addEventListener('click', weg);
document.querySelector('#groeneplukb2').addEventListener('click', weg);
document.querySelector('#groeneplukb3').addEventListener('click', weg);
document.querySelector('#groeneplukb4').addEventListener('click', weg);

document.querySelector('#groeneplukc').addEventListener('click', weg);
document.querySelector('#groeneplukc2').addEventListener('click', weg);
document.querySelector('#groeneplukc3').addEventListener('click', weg);
document.querySelector('#groeneplukc4').addEventListener('click', weg);

document.querySelector('#grootbladb').addEventListener('click', weg);
document.querySelector('#grootbladb2').addEventListener('click', weg);
document.querySelector('#grootbladb3').addEventListener('click', weg);
document.querySelector('#grootbladb4').addEventListener('click', weg);

document.querySelector('#blaadje').addEventListener('click', weg);
document.querySelector('#blaadje2_1_').addEventListener('click', weg);
document.querySelector('#blaadje3_1_').addEventListener('click', weg);
document.querySelector('#blaadje4_1_').addEventListener('click', weg);

document.querySelector('#blaadjeb').addEventListener('click', weg);
document.querySelector('#blaadjeb2').addEventListener('click', weg);
document.querySelector('#blaadjeb3').addEventListener('click', weg);
document.querySelector('#blaadjeb4').addEventListener('click', weg);

document.querySelector('#blaadjec').addEventListener('click', weg);
document.querySelector('#blaadjec2').addEventListener('click', weg);
document.querySelector('#blaadjec3').addEventListener('click', weg);
document.querySelector('#blaadjec4').addEventListener('click', weg);

document.querySelector('#blaadjed').addEventListener('click', weg);
document.querySelector('#blaadjed2').addEventListener('click', weg);
document.querySelector('#blaadjed3').addEventListener('click', weg);
document.querySelector('#blaadjed4').addEventListener('click', weg);

document.querySelector('#blaadjee').addEventListener('click', weg);
document.querySelector('#blaadjee2').addEventListener('click', weg);
document.querySelector('#blaadjee3').addEventListener('click', weg);
document.querySelector('#blaadjee4').addEventListener('click', weg);

document.querySelector('#blaadjef').addEventListener('click', weg);
document.querySelector('#blaadjef2').addEventListener('click', weg);
document.querySelector('#blaadjef3').addEventListener('click', weg);
document.querySelector('#blaadjef4').addEventListener('click', weg);

document.querySelector('#blaadjeg').addEventListener('click', weg);
document.querySelector('#blaadjeg2').addEventListener('click', weg);
document.querySelector('#blaadjeg3').addEventListener('click', weg);
document.querySelector('#blaadjeg4').addEventListener('click', weg);

document.querySelector('#blaadjeh').addEventListener('click', weg);
document.querySelector('#blaadjeh2').addEventListener('click', weg);
document.querySelector('#blaadjeh3').addEventListener('click', weg);
document.querySelector('#blaadjeh4').addEventListener('click', weg);

document.querySelector('#blaadjei').addEventListener('click', weg);
document.querySelector('#blaadjei2').addEventListener('click', weg);
document.querySelector('#blaadjei3').addEventListener('click', weg);
document.querySelector('#blaadjei4').addEventListener('click', weg);

document.querySelector('#bloem').addEventListener('click', weg);
document.querySelector('#bloem2').addEventListener('click', weg);
document.querySelector('#bloem3_1_').addEventListener('click', weg);
document.querySelector('#bloem4_1_').addEventListener('click', weg);

document.querySelector('#bloemb').addEventListener('click', weg);
document.querySelector('#bloemb2').addEventListener('click', weg);
document.querySelector('#bloemb3').addEventListener('click', weg);
document.querySelector('#bloemb4').addEventListener('click', weg);

document.querySelector('#bloemc').addEventListener('click', weg);
document.querySelector('#bloemc2').addEventListener('click', weg);
document.querySelector('#bloemc3').addEventListener('click', weg);
document.querySelector('#bloemc4').addEventListener('click', weg);

document.querySelector('#bloemd').addEventListener('click', weg);
document.querySelector('#bloemd2').addEventListener('click', weg);
document.querySelector('#bloemd3').addEventListener('click', weg);
document.querySelector('#bloemd4').addEventListener('click', weg);

document.querySelector('#bloeme').addEventListener('click', weg);
document.querySelector('#bloeme2').addEventListener('click', weg);
document.querySelector('#bloeme3').addEventListener('click', weg);
document.querySelector('#bloeme4').addEventListener('click', weg);

document.querySelector('#bloemf').addEventListener('click', weg);
document.querySelector('#bloemf2').addEventListener('click', weg);
document.querySelector('#bloemf3').addEventListener('click', weg);
document.querySelector('#bloemf4').addEventListener('click', weg);

document.querySelector('#bloemg').addEventListener('click', weg);
document.querySelector('#bloemg2').addEventListener('click', weg);
document.querySelector('#bloemg3').addEventListener('click', weg);
document.querySelector('#bloemg4_1_').addEventListener('click', weg);

document.querySelector('#bloemh').addEventListener('click', weg);
document.querySelector('#bloemh2').addEventListener('click', weg);
document.querySelector('#bloemh3').addEventListener('click', weg);
document.querySelector('#bloemh4_1_').addEventListener('click', weg);

document.querySelector('#bloemi').addEventListener('click', weg);
document.querySelector('#bloemi2').addEventListener('click', weg);
document.querySelector('#bloemi3').addEventListener('click', weg);
document.querySelector('#bloemi4_1_').addEventListener('click', weg);

document.querySelector('#bloemj').addEventListener('click', weg);
document.querySelector('#bloemj2').addEventListener('click', weg);
document.querySelector('#bloemj3').addEventListener('click', weg);
document.querySelector('#bloemj4').addEventListener('click', weg);

document.querySelector('#bloemk').addEventListener('click', weg);
document.querySelector('#bloemk2').addEventListener('click', weg);
document.querySelector('#bloemk3').addEventListener('click', weg);
document.querySelector('#bloemk4').addEventListener('click', weg);

document.querySelector('#bloeml').addEventListener('click', weg);
document.querySelector('#bloeml2').addEventListener('click', weg);
document.querySelector('#bloeml3').addEventListener('click', weg);
document.querySelector('#bloeml4').addEventListener('click', weg);

function weg() {
  console.log('ikbengeklikt');  
    this.classList.toggle("weg");  
}