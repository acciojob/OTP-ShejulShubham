//your JS code here. If required.
const codes = document.querySelectorAll(".code");

// codes[0].focus();

codes.forEach((code, index)=>{
	code.addEventListener("input", e=>{
		if(event.target.value.length === 1 && index < codes.length -1){
			codes[index+1].focus();
		}
	});

	code.addEventListener("keydown", e=>{
		if(e.key == "Backspace"){
			if(index > 0){
				codes[index-1].focus();
				e.target.value = "";
			}else {
				e.target.value = "";
			}
		}
	})
})