/* NOTA: No funciono el modal! debo estar llamando algo mal */

(function main(){

	var modal = document.getElementById("box-work-modal");
	var boxes = Array.from(document.getElementsByClassName("caja"));

	var text, bodyModal, close, img;
	boxes.forEach(function(box){
		box.addEventListener("click",function(){
			modal.innerHTML = "";

			text = document.getElementById("texto" + boxes.indexOf(box).toString());
			text.classList.toggle("hide");

			bodyModal = document.createElement("div");
			bodyModal.classList.add("modal-body");
			bodyModal.innerHTML = box.innerHTML;
			modal.appendChild(bodyModal);

			modal.classList.remove("hide");

			close = document.createElement("div");
			close.classList.add("close");

			//BOTON CLOSE

			img = document.createElement("img");
			img.setAttribute("src","http://tojaeurope.com/gallery/Close-icon.png");

			close.appendChild(img);
			modal.appendChild(close);

			close.addEventListener("click",function(){
				modal.classList.add("hide");
				text.classList.toggle("hide");
			})
		})
	});
})(); // funcion autoinvocada

