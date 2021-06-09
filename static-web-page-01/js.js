function girar_imagen(){
	var front = document.getElementById('front');
	var back = document.getElementById('back');
	var txt_1 = document.getElementById('txt_1');
	var txt_2 = document.getElementById('txt_2');

	front.style.transform = 'rotateY(-180deg)';
	back.style.transform = 'rotateY(0deg)';
	txt_1.style.display = 'none';
	txt_2.style.display = 'flex';
}
function posicion_normal(){
	var front = document.getElementById('front');
	var back = document.getElementById('back');
	var txt_1 = document.getElementById('txt_1');
	var txt_2 = document.getElementById('txt_2');

	front.style.transform = 'rotateY(0deg)';
	back.style.transform = 'rotateY(180deg)';
	txt_1.style.display = 'flex';
	txt_2.style.display = 'none';
}