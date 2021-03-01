// // 
// // For clicking on the doom button
// // 
// document.querySelector('.bush-basha').addEventListener('click', () => {
//   document.getElementById("yonder").style.visibility = "hidden";
//   document
// })

function changeGymShark(){
	if (document.getElementById("gsk-img").src == "https://frankli-n.github.io/domestic-accessories/pics/gymshark.png") {
		document.getElementById("gsk-img").src = "https://frankli-n.github.io/domestic-accessories/pics/gymshark-back.png"
	}

	else if (document.getElementById("gsk-img").src == "https://frankli-n.github.io/domestic-accessories/pics/gymshark-back.png") {
		document.getElementById("gsk-img").src = "https://frankli-n.github.io/domestic-accessories/pics/gymshark2.png"
	}
	else {
		document.getElementById("gsk-img").src = "https://frankli-n.github.io/domestic-accessories/pics/gymshark.png"
	}
}

function changeGrandma(){
	if (document.getElementById("gma-img").src == "https://frankli-n.github.io/domestic-accessories/pics/jam.png") {
		document.getElementById("gma-img").src = "https://frankli-n.github.io/domestic-accessories/pics/jam2.png"
	}

	else if (document.getElementById("gma-img").src == "https://frankli-n.github.io/domestic-accessories/pics/jam2.png") {
		document.getElementById("gma-img").src = "https://frankli-n.github.io/domestic-accessories/pics/jam.png"
	}

	else if (document.getElementById("gma-img").src == "https://frankli-n.github.io/domestic-accessories/pics/jam3.png") {
		document.getElementById("gma-img").src = "https://frankli-n.github.io/domestic-accessories/pics/jam4.png"
	}

	else if (document.getElementById("gma-img").src == "https://frankli-n.github.io/domestic-accessories/pics/jam4.png") {
		document.getElementById("gma-img").src = "https://frankli-n.github.io/domestic-accessories/pics/jam5.png"
	}

	else {
		document.getElementById("bb-img").src = "https://frankli-n.github.io/domestic-accessories/pics/d.png"
	}
}

function changeDudesWithoutProblems(){
	console.log(document.getElementById("dwp-img").src)
	if (document.getElementById("dwp-img").src == "https://frankli-n.github.io/domestic-accessories/pics/e.png") {
		document.getElementById("dwp-img").src = "https://frankli-n.github.io/domestic-accessories/pics/dwp2.png"
	}
	else {
		document.getElementById("dwp-img").src = "https://frankli-n.github.io/domestic-accessories/pics/e.png"
	}
}

function changeSession(){
	console.log(document.getElementById("sss-img").src)
	if (document.getElementById("sss-img").src == "https://frankli-n.github.io/domestic-accessories/pics/session.png") {
		document.getElementById("sss-img").src = "https://frankli-n.github.io/domestic-accessories/pics/session2.png"
	}
	else {
		document.getElementById("sss-img").src = "https://frankli-n.github.io/domestic-accessories/pics/session.png"
	}
}

function changeFuccboi(){
	console.log(document.getElementById("fcb-img").src)
	if (document.getElementById("fcb-img").src == "https://frankli-n.github.io/domestic-accessories/pics/fuccboi.png") {
		document.getElementById("fcb-img").src = "https://frankli-n.github.io/domestic-accessories/pics/fuccboi2.png"
	}

	else if (document.getElementById("fcb-img").src == "https://frankli-n.github.io/domestic-accessories/pics/fuccboi2.png") {
		document.getElementById("fcb-img").src = "https://frankli-n.github.io/domestic-accessories/pics/fuccboi3.png"
	}

	else {
		document.getElementById("fcb-img").src = "https://frankli-n.github.io/domestic-accessories/pics/fuccboi.png"
	}
}

function changeVoyageur(){
	console.log(document.getElementById("vyg-img").src)
	if (document.getElementById("vyg-img").src == "https://frankli-n.github.io/domestic-accessories/pics/voyageur.png") {
		document.getElementById("vyg-img").src = "https://frankli-n.github.io/domestic-accessories/pics/voyageur2.png"
	}
	else {
		document.getElementById("vyg-img").src = "https://frankli-n.github.io/domestic-accessories/pics/voyageur.png"
	}
}


document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }
    }
}, true);