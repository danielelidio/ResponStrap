function responsive() {
	$("[class^='tableCol']").each(function() {
		var elem = $(this);
		var elemClass = elem.attr("class");
		var elementFrags = elemClass.split("-");

		var className = elementFrags[0];
		var propWidth = elementFrags[1];
		var totalWidth = elementFrags[2];
		var width = eval(propWidth / totalWidth * 100) - 1;
		width += "%";

		elem.css("width", width);
		elem.addClass("tableCol");
	});
}