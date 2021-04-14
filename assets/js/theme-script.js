$(document).ready(function () {
	$(window).scroll(function () {
		var top = $(document).scrollTop();
		var height = 0;
		
		if (top > height) {
			$('.template-1-header').addClass('header-sticky');
		} else {
			$('.template-1-header').removeClass('header-sticky');
		}
	});
	
	let windowWidth = $(window).width();
	if (windowWidth < 992) {
		// $('header .header-navigation > ul').prepend('<li><a href="javascript:void(0)" class="d-flex d-lg-none" id="close-menu"><i class="fas fa-times"></i></a></li>');
		$(".template-1-header .navigation > ul > li > ul").each(function (index) {
			$(this).prev().attr({
				"href": "#subMenu" + index,
				"data-toggle": "collapse"
			});
			$(this).attr({
				"id": "subMenu" + index,
				"class": "collapse list-unstyled mb-0",
				"data-parent": "#hasMenu"
			});
		})
	}
	
	function callMenu() {
		if ($('body').hasClass('show-header-navigation')) {
			$('body').removeClass('show-header-navigation');
		} else {
			$('body').addClass('show-header-navigation');
		}
	}
	
	$(document).on("click", "#callMenu, .header-overlay", function () {
		callMenu();
	});
	
	const myBanner = new Swiper('#swiper-banner', {
		loop: true,
		spaceBetween: 50,
		speed: 1500,
		effect: 'fade',
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		}
	});
	
	const myPartner = new Swiper('#swiper-partner', {
		slidesPerView: 6,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		},
		breakpoints: {
			320: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 4,
				spaceBetween: 20,
			},
			1024: {
				slidesPerView: 6,
				spaceBetween: 20,
			},
		}
	});
	
	$('#form-expandCecharge .createRow').click(function () {
		html = `<div class="row">
									<div class="col-md-3 mb-3">
										<div class="form-group">
											<label for="phone" class="template-1-label text-dark">Số điện thoại</label>
											<input type="text" class="form-control" id="phone" placeholder="0909xxxxxx">
										</div>
									</div>
									<div class="col-md-2 mb-3">
										<div class="form-group">
											<label for="network" class="template-1-label text-dark">Nhà mạng</label>
											<select class="form-control" id="network">
												<option name="viettel">Viettel</option>
												<option name="vinaphone">Vinaphone</option>
												<option name="mobile">Mobile</option>
												<option name="gate">Gate</option>
												<option name="zing">Zing</option>
											</select>
										</div>
									</div>
									<div class="col-md-2 mb-3">
										<div class="form-group">
											<label for="price" class="template-1-label text-dark">Mệnh giá</label>
											<select class="form-control" id="price">
												<option name="-1">--- Mệnh giá ---</option>
												<option name="10000">10.000 đ</option>
												<option name="20000">20.000 đ</option>
												<option name="30000">30.000 đ</option>
												<option name="50000">50.000 đ</option>
												<option name="100000">100.000 đ</option>
												<option name="200000">200.000 đ</option>
												<option name="300000">300.000 đ</option>
												<option name="500000">500.000 đ</option>
												<option name="1000000">1.000.000 đ</option>
											</select>
										</div>
									</div>
									<div class="col-md-2 mb-3">
										<div class="form-group">
											<label for="code" class="template-1-label text-dark">Chiết khấu</label>
											<input type="text" class="form-control" id="code" placeholder="">
										</div>
									</div>
									<div class="col-md-2 col-9 mb-3">
										<div class="form-group">
											<label for="mess" class="template-1-label text-dark">Ghi chú</label>
											<textarea class="form-control" id="mess" rows="1"></textarea>
										</div>
									</div>
									<div class="col-md-1 col-3 mb-3">
										<a href="javascript:void(0)"
										   class="deleteRow template-1-btn-circle ml-auto mt-33px rounded-circle btn btn-danger template-1-btn">
											<i class="fas fa-times"></i>
										</a>
									</div>
								</div>`;
		$('#form-expandCecharge').append(html)
	})
	
	$('#form-expandCart .createRow').click(function () {
		html = `<div class="row">
									<div class="col-md-3 mb-3">
										<div class="form-group">
											<label for="network" class="template-1-label text-dark">Nhà mạng</label>
											<select class="form-control" id="network">
												<option name="viettel">Viettel</option>
												<option name="vinaphone">Vinaphone</option>
												<option name="mobile">Mobile</option>
												<option name="gate">Gate</option>
												<option name="zing">Zing</option>
											</select>
										</div>
									</div>
									<div class="col-md-3 mb-3">
										<div class="form-group">
											<label for="code" class="template-1-label text-dark">Mã thẻ</label>
											<input type="text" class="form-control" id="code" placeholder="">
										</div>
									</div>
									<div class="col-md-3 mb-3">
										<div class="form-group">
											<label for="seri" class="template-1-label text-dark">Mã Seri</label>
											<input type="text" class="form-control" id="seri" placeholder="">
										</div>
									</div>
									<div class="col-md-2 col-9 mb-3">
										<div class="form-group">
											<label for="price" class="template-1-label text-dark">Mệnh giá</label>
											<select class="form-control" id="price">
												<option name="-1">--- Mệnh giá ---</option>
												<option name="10000">10.000 đ</option>
												<option name="20000">20.000 đ</option>
												<option name="30000">30.000 đ</option>
												<option name="50000">50.000 đ</option>
												<option name="100000">100.000 đ</option>
												<option name="200000">200.000 đ</option>
												<option name="300000">300.000 đ</option>
												<option name="500000">500.000 đ</option>
												<option name="1000000">1.000.000 đ</option>
											</select>
										</div>
									</div>
									<div class="col-md-1 col-3 mb-3">
										<a href="javascript:void(0)"
										   class="deleteRow template-1-btn-circle ml-auto mt-33px rounded-circle btn btn-danger template-1-btn">
											<i class="fas fa-times"></i>
										</a>
									</div>
								</div>`;
		$('#form-expandCart').append(html)
	});
	
	$(document).on('click', '.deleteRow', function () {
		$(this).closest('.row').remove();
	});
	
	$('[data-toggle="tooltip"]').tooltip();
})