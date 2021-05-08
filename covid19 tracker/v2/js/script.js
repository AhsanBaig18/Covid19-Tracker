/*! Kovid19 v1.1.1 by Softnio. **/
jQuery(function () {
	"use strict";
	var e, a, t, s, o, n, l = $(window),
		i = $(document),
		r = $("body"),
		c = $(".nk-navbar"),
		d = $(".toggle"),
		f = $(".nk-navbar-menu"),
		v = "has-fixed",
		h = "navbar-overlay",
		u = "menu-open",
		g = "mobile-menu";

	function m(e, a) {
		$(window).scrollTop() > a.top ? e.hasClass(v) || e.addClass(v) : e.hasClass(v) && e.removeClass(v)
	}

	function p() {
		l.width() < 992 ? f.delay(500).addClass(g) : (f.delay(500).removeClass(g), f.removeClass(u))
	}! function () {
		var e = $(".is-sticky");
		if (0 < e.length) {
			var a = e.offset();
			m(e, a), $(window).on("scroll", function () {
				m(e, a)
			})
		}
	}(), e = f.attr("id"), r.scrollspy({
		target: "#" + e,
		offset: c.innerHeight()
	}), 0 < d.length && d.on("click", function (e) {
		var a = $(this),
			t = a.data("menu-toggle");
		a.toggleClass("active"), $("#" + t).toggleClass(u), $("#" + t).after("<div class=" + h + "></div>"), f.hasClass(u) || $("." + h).remove(), r.toggleClass("noscroll"), e.preventDefault()
	}), i.on("click", "body", function (e) {
		!d.is(e.target) && 0 === d.has(e.target).length && !f.is(e.target) && 0 === f.has(e.target).length && l.width() < 992 && (d.removeClass("active"), f.removeClass(u), $("." + h).remove(), r.removeClass("noscroll"))
	}), p(), l.on("resize", function () {
		p()
	}), a = $(".toggle-offcanvas"), t = $(".nk-offcanvas"), 0 < a.length && a.on("click", function (e) {
		var a = $(this),
			t = a.data("offcanvas-toggle");
		a.toggleClass("active"), $("#" + t).toggleClass("offcanvas-shown"), $("#" + t).after('<div class="offcanvas-overlay"></div>'), $("#" + t).hasClass("offcanvas-shown") || $(".offcanvas-overlay").remove(), r.toggleClass("noscroll"), e.preventDefault()
	}), i.on("click", "body", function (e) {
		a.is(e.target) || 0 !== a.has(e.target).length || t.is(e.target) || 0 !== t.has(e.target).length || (a.removeClass("active"), t.removeClass("offcanvas-shown"), $(".offcanvas-overlay").remove(), r.removeClass("noscroll"))
	}), 0 < (s = $(".nk-menu-toggle")).length && s.on("click", function (e) {
		var a = $(this).parent();
		l.width() < 992 && (a.children(".nk-menu-dropdown").slideToggle(400), a.siblings().children(".nk-menu-dropdown").slideUp(400), a.toggleClass("nk-menu-opened"), a.siblings().removeClass("nk-menu-opened")), e.preventDefault()
	})
}());






	AOS.init();
		$('.slider').slick({
					 	prevArrow:"<img class='a-left control-c prev slick-prev left' src='v2/img/right.png'>",
      		nextArrow:"<img class='a-right control-c next slick-next right'  src='v2/img/left.png'>",
			dots: false,
			infinite: true,
			speed: 1000,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
  			autoplaySpeed: 2000,
			responsive: [{
					breakpoint: 1024,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						dots: false
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});




	$('.v-slider').slick({
		 	prevArrow:"<img class='a-left control-c prev slick-prev down' src='v2/img/down.png'>",
      		nextArrow:"<img class='a-right control-c next slick-next up'  src='v2/img/up.png'>",
			dots: false,
			infinite: true,
			speed: 1000,
			slidesToShow: 2,
			slidesToScroll: 2,
			autoplay: false,
  			autoplaySpeed: 2000,
			vertical: true,
			verticalSwiping: true,
			responsive: [{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						infinite: true,
						dots: false
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow:2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1
					}
				}
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			]
		});

