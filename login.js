function fieldChanged(){
	var userId = getField("user_id");
	var password = getField("password");
	var disabled = true;

	if (userId.value.length > 0 && password.value.length > 0) {
		disabled = false;
	}

	var login = getField("login");
	if (disabled) {
		login.setAttribute("disabled", "disabled");
	}
	else {
		login.removeAttribute("disabled");
	}
}
function getField(fieldName){
	var field = document.getElementById(fieldName);
	if (field == undefined) {
		throw new Error("θ¦η΄?γθ¦γ€γγγΎγγ: " + fieldName);
	}
	return field;
}