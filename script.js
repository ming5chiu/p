$(".pricing-opt").on('click', function () {
		if ($("body").hasClass("pricing-opt-body-2")) {
			$("body").removeClass("pricing-opt-body-2");
		}
		else {
			$("body").addClass("pricing-opt-body-2");
		}
	});