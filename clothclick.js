function showAtticus(){
	document.getElementById("atticushead").style.visibility = "visible";
}

function showFrankie(){
	document.getElementById("frankiehead").style.visibility = "visible";
}
function showLuke(){
	document.getElementById("lukehead").style.visibility = "visible";
}


function changeDudesWithoutProblems(){
	if (document.getElementById("dwp-img").src == "https://frankli-n.github.io/domestic-accessories/pics/dwp.png") {
		document.getElementById("dwp-img").src = "https://frankli-n.github.io/domestic-accessories/pics/dwp2.png"
	}

	else if (document.getElementById("dwp-img").src == "https://frankli-n.github.io/domestic-accessories/pics/jam2.png") {
		document.getElementById("dwp-img").src = "https://frankli-n.github.io/domestic-accessories/pics/jam.png"
	}

	else if (document.getElementById("dwp-img").src == "https://frankli-n.github.io/domestic-accessories/pics/jam3.png") {
		document.getElementById("dwp-img").src = "https://frankli-n.github.io/domestic-accessories/pics/jam4.png"
	}

	else if (document.getElementById("dwp-img").src == "https://frankli-n.github.io/domestic-accessories/pics/jam4.png") {
		document.getElementById("dwp-img").src = "https://frankli-n.github.io/domestic-accessories/pics/jam5.png"
	}

	else {
		document.getElementById("bb-img").src = "https://frankli-n.github.io/domestic-accessories/pics/d.png"
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