$(document).ready(function () {
	// hero slider for home page end
	$(".hero_slider").owlCarousel({
		loop: true,
		autoplay: false,
		dots: true,
		autoHeight: true,
		nav: true,
		navText: [
			"<i class='fas fa-arrow-left'></i>",
			"<i class='fas fa-arrow-right'></i>",
		],
		margin: 10,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			1000: {
				items: 1,
			},
		},
	});
	// hero slider for home page start
	// blog_slider for home page end
	$(".blog_slider").owlCarousel({
		loop: true,
		autoplay: false,
		dots: false,
		nav: true,
		navText: [
			"<i class='fas fa-arrow-left'></i>",
			"<i class='fas fa-arrow-right'></i>",
		],
		margin: 15,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			992: {
				items: 2,
			},
			1200: {
				items: 3,
			},
		},
	});
	// blog_slider for home page start
	// arrived_slider home page end
	$(".arrived_slider").owlCarousel({
		loop: true,
		autoplay: false,
		dots: false,
		nav: true,
		navText: [
			"<i class='fas fa-arrow-left'></i>",
			"<i class='fas fa-arrow-right'></i>",
		],
		margin: 15,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			992: {
				items: 2,
			},
			1200: {
				items: 3,
			},
		},
	});
	// arrived_slider for home page start
	// wine_of_weeks home page end
	$(".wine_of_weeks_slider").owlCarousel({
		loop: true,
		autoplay: false,
		dots: false,
		nav: true,
		navText: [
			"<i class='fas fa-arrow-left'></i>",
			"<i class='fas fa-arrow-right'></i>",
		],
		margin: 15,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			992: {
				items: 2,
			},
			1200: {
				items: 3,
			},
		},
	});
	// blog_product_carousel blog 2 page start
	$(".blog_product_carousel").owlCarousel({
		loop: true,
		autoplay: false,
		dots: false,
		margin: 10,
		responsiveClass: true,
		nav: true,
		navText: [
			"<i class='fas fa-arrow-left'></i>",
			"<i class='fas fa-arrow-right'></i>",
		],
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			992: {
				items: 1,
			},
			1200: {
				items: 2,
			},
		},
	});
	//// blog_product_carousel blog 2 page end
	// wine_advocate_slider home page start
	$(".wine_advocate_slider").owlCarousel({
		loop: true,
		autoplay: false,
		dots: false,
		nav: true,
		navText: [
			"<i class='fas fa-arrow-left'></i>",
			"<i class='fas fa-arrow-right'></i>",
		],
		margin: 15,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			992: {
				items: 2,
			},
			1200: {
				items: 3,
			},
		},
	});
	// wine_advocate_slider for home page end
	// social media slider start
	$(".loop").owlCarousel({
		center: true,
		items: 3,
		loop: true,
		dots: false,
		nav: false,
		margin: 10,
		responsive: {
			300: {
				items: 1,
			},
			600: {
				items: 2,
			},
			768: {
				items: 3,
			},
		},
	});
	// social media slider end

	// customar details page testimonials slider start
	$(".testimonial_slider_wrapper").owlCarousel({
		center: true,
		items: 3,
		loop: true,
		margin: 10,
		responsive: {
			600: {
				items: 4,
			},
		},
	});
	// customar details page testimonials slider end
	// blog page story carousel 1
	$(".story__carousel").owlCarousel({
		loop: true,
		margin: 30,
		dots: false,
		nav: true,
		navText: [
			"<img class='nav__img_1' src='./assets/img/blog-page-img/icon/arrow_1.png'>",
			"<img class='nav__img_2' src='./assets/img/blog-page-img/icon/arrow_1.png'>",
		],
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 2,
			},
			992: {
				items: 3,
			},
		},
	});
	$(".related_posts_carousel").owlCarousel({
		loop: true,
		margin: 30,
		dots: false,
		nav: true,
		navText: [
			"<img class='nav__img_1' src='./assets/img/blog-page-img/icon/arrow_1.png'>",
			"<img class='nav__img_2' src='./assets/img/blog-page-img/icon/arrow_1.png'>",
		],
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 2,
			},
			992: {
				items: 2,
			},
		},
	});
	// video play button youtube video play

	//
	$(".video_play_btn").magnificPopup({
		type: "iframe",
		iframe: {
			markup:
				'<div class="mfp-iframe-scaler">' +
				'<div class="mfp-close"></div>' +
				'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
				"</div>", // HTML markup of popup, `mfp-close` will be replaced by the close button

			patterns: {
				youtube: {
					index: "youtube.com/", // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

					id: "v=", // String that splits URL in a two parts, second part should be %id%
					// Or null - full URL will be returned
					// Or a function that should return %id%, for example:
					// id: function(url) { return 'parsed id'; }

					src: "//www.youtube.com/embed/%id%?autoplay=1", // URL that will be set as a source for iframe.
				},
				vimeo: {
					index: "vimeo.com/",
					id: "/",
					src: "//player.vimeo.com/video/%id%?autoplay=1",
				},
				gmaps: {
					index: "//maps.google.",
					src: "%id%&output=embed",
				},

				// you may add here more sources
			},

			srcAction: "iframe_src", // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
		},
		// other options
	});

	// accordion toggle class for faq plus and minus
	$(".result_view_button span").click(function () {
		$(".result_view_button span").removeClass("active");
		$(this).addClass("active");
	});

	$("#filter_trigger").click(function () {
		$("#search_filter").addClass("active");
		$("#search_filter_bg").addClass("active");
	});

	$("#search_filter_bg").click(function () {
		$(this).removeClass("active");
		$("#search_filter").removeClass("active");
	});

	$(".quantity__plus").click(function () {
		let input = $(this).parent().children()[1];
		let value = input.value;
		let valueInt = Number.parseInt(value);
		input.value = ++valueInt;
	});

	$(".quantity__minus").click(function () {
		let input = $(this).parent().children()[1];
		let value = input.value;
		let valueInt = Number.parseInt(value);
		input.value = valueInt <= 0 ? 0 : --valueInt;
	});

	// Dropdown sub menu
	$(".search_product_items").mouseover(function () {
		let target = $(this).attr("target");
		console.log(target);
		$(".sub-dropdown .dropdown-menu").removeClass("show");
		$("#" + target).addClass("show");
	});

	$(".mobile_my_account").click(function () {
		$(".mobile_my_account_dropdown").toggle();
	});
	$(".mobile__price").click(function (e) {
		e.preventDefault();
		$("#collapsePrice").toggle();
	});
	$(".mobile__language").click(function (e) {
		e.preventDefault();
		$("#collapseLanguage").toggle();
	});
	$(".mobile__currency").click(function (e) {
		e.preventDefault();
		$("#collapseCurrency").toggle();
	});
	$(".js-active").click(function () {
		$(".js-active").removeClass("active");
		$(this).addClass("active");
	});
	$(".mobile_collapse ul li").click(function () {
		$(".mobile_collapse ul li").removeClass("active");
		$(this).addClass("active");
	});
	// mobile my account click event
	$(".mobile_my_account").click(function () {
		var $this = $(this);
		if ($this.hasClass("myaccount_expand")) {
			$this.removeClass("myaccount_expand");
			$this.addClass("myaccount_collaps");
		}
		// else {
		// 	$this.addClass("myaccount_expand");
		// 	$this.removeClass("myaccount_collaps");
		// }
		if ($this.hasClass("myaccount_collaps")) {
			$this.removeClass("myaccount_collaps");
			$this.addClass("myaccount_expand");
		}
	});

	$(".mobile_my_account").click(function () {
		if ($(this).hasClass("my_account_expand")) {
			$(this)
				.addClass("my_account_collaps")
				.removeClass("my_account_expand");
		} else {
			$(this)
				.addClass("my_account_expand")
				.removeClass("my_account_collaps");
		}
	});
});

function genValue(input) {
	let value = input.value;
	return Number.parseInt(value);
}

function incrmnt(val) {
	let input =
		val.parentNode.parentNode.parentNode.parentNode.childNodes[5]
			.children[0];
	let valueInt = genValue(input);
	input.value = ++valueInt;
}

function dcrmnt(val) {
	let input =
		val.parentNode.parentNode.parentNode.parentNode.childNodes[5]
			.children[0];
	let valueInt = genValue(input);
	input.value = valueInt <= 0 ? 0 : --valueInt;
}

function incrmntCart(val) {
	let input = val.parentNode.parentNode.childNodes[1];
	let valueInt = genValue(input);
	input.value = ++valueInt;
}

function dcrmntCart(val) {
	let input = val.parentNode.parentNode.childNodes[1];
	let valueInt = genValue(input);
	input.value = valueInt <= 0 ? 0 : --valueInt;
}
