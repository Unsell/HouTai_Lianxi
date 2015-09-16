//
//var height = "about 5'10\" tall";
//var arr = ["as","sd","sad","sdas","esa"];
//var lennon = { name:"Jone",year:15,living:false };
////alert(lennon);
//
//var year = 2004;
//var message = "This year is " + year;
//alert(message);

//var a = false;
//var b = "";
//if( a === b ){
//	alert("a等于b!");
//}

//var count = 1;
//while(count < 11){
//	alert(count);
//	count++;
//}

//var try_ = document.getElementById('try');
//alert(try_.nodeValue);




//function square(num){
//	var total = num*num;
//	return total;
//}
//var total = 50;
//var number = square(20);	
//alert(total);
//alert("number:" + number)
 
//function countBodyChild(){
//	var body_element = document.getElementsByTagName("body")[0];
//	alert(body_element.childNodes.length);
//}
//window.onload = countBodyChild();

function showPic(whichpic){
	if(!document.getElementById('placeholder')) return false;
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	if(!document.getElementById("description")) return false;
	if(whichpic.getAttribute("title")) {
		var text = whichpic.getAttribute("title");
	} else{
		var text = "";
		
	}
	var description = document.getElementById("description");
	if(description.firstChild.nodeType == 3) {
		description.firstChild.nodeValue = title;
	}
	return false;
	
};

function prepareGallery(){
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById('imagegallery')) return false;
	
	var gallery = document.getElementById('imagegallery');
	var link = gallery.getElementsByTagName('a');
	
	for(var i = 0; i<link.length; i++){
		link[i].onclick = function() {
			return showPic(this)? false : true;
		}
		link[i].onkeypress = link[i].onclick;   //onkeypress函数没按一次按键都会出发，容易出现问题！
	}
}

function addLoadEvent(func){
	var oldonload = window.onload;
	if(typeof window.onload != 'function'){
		window.onload = func;
	} else{
		window.onload = function() {
			oldonload();
			func();
		}
	}
}

function insertAfter(newElemt,targetElement) {
	var parent = targetElement.parentNode;
	if(parent.lastChild == targetElement ){
		parent.appendChild(newElemt);
	} else {
		parent.insertBefore(newElemt, targetElement.nextSibling);
	}
}

function preparePlaceholder (){
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById('imagegallery')) return false;
	
	var placeholder = document.createElement("img");
	placeholder.setAttribute("id","placeholder");
	placeholder.setAttribute("src","../img/5.jpg");
	placeholder.setAttribute("alt","my image");
	var description = document.createElement("p");
	description.setAttribute("id","description");
	var desctext = document.createTextNode("choose an image!");
	description.appendChild(desctext);
	var gallery = document.getElementById("imagegallery");
	insertAfter(placeholder, gallery);
	insertAfter(description, placeholder);
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);











