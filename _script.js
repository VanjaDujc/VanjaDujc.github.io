function disableForm(theform) {
	if (document.all || document.getElementById) {
		for (i = 0; i < theform.length; i++) {
			var tempobj = theform.elements[i];
			if (tempobj.type.toLowerCase() == "submit" || tempobj.ty .toLowerCase() == "input" || tempobj.type.toLowerCase() == "reset")
				tempobj.disabled = true;
		}
	}
}