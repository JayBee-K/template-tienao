var heightSidebar = function () {
	let heightSidebar = $('#heightSidebar').outerHeight(true);
	let heightHeaderSidebar = $('#changeHeightSidebar .sidebar-item .card .card-header').outerHeight(true);
	$('#changeHeightSidebar .sidebar-item .card .card-body').css('max-height', heightSidebar - heightHeaderSidebar);
}

var formatPrice = function (n, currency) {
	return n.toFixed(0).replace(/./g, function (c, i, a) {
		return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "." + c : c;
	}) + ' ' + currency;
}

var fnUpdateInformation = function (form) {
	// form == 0 : form cập nhật thông tin tài hoản
	// form == 1 : form đổi mật khẩu
	$('.template-4_information .card .loading-pure').show();
	setTimeout(function () {
		if (form == 0) {
			$('.template-4_information .card .card-header .card-title').text('Cập nhật thông tin tài khoản');
			$('#informationView').hide();
			$('#informationFrom').show();
		} else if (form == 1) {
			$('.template-4_information .card .card-header .card-title').text('Đổi mật khẩu');
			$('#informationView').hide();
			$('#passwordFrom').show();
		} else {
			$('.template-4_information .card .card-header .card-title').text('Thông tin tài khoản');
			$('#informationFrom').hide();
			$('#passwordFrom').hide();
			$('#informationView').show();
		}
		$('.template-4_information .card .loading-pure').hide();
	}, 1000);
}

function handleTouchMove(ev) {
	ev.preventDefault();
}

const callMenu = function () {
	if ($('.template-4_header').hasClass('show')) {
		$('.template-4_header').removeClass('show');
		$('body').css("overflow-y", "auto");
		document.removeEventListener('touchmove', handleTouchMove);
	} else {
		$('.template-4_header').addClass('show');
		$('body').css("overflow-y", "hidden");
		document.addEventListener('touchmove', handleTouchMove, {passive: false});
	}
}

$(document).ready(function () {
	let windowWidth = $(window).width();
	if (windowWidth < 992) {
		$(".template-4_header .navigation-area > ul > li > ul").each(function (index) {
			$(this).prev().attr({
				"href": "#subMenu" + index,
				"data-toggle": "collapse"
			});
			$(this).attr({
				"id": "subMenu" + index,
				"class": "collapse " + $(this).attr('class'),
				"data-parent": "#has-navigation"
			});
		})
	}
	
	$('#hamburger, .template-4_header > .overlay').click(function () {
		callMenu();
	});
	
	heightSidebar();
	
	$('[data-toggle="tooltip"]').tooltip()
	
	$(document).on("click", ".callModal", function () {
		$('.modal').modal('hide');
		$('#' + $(this).data('modal')).modal('show');
		setTimeout(function () {
			$('body').addClass('modal-open');
		}, 500)
	});
	
	$('.choose-bank').change(function () {
		if ($(this).val() != -1) {
			$(this).parents('form').find('.name-bank').html($(this).find('option:selected').data('name'));
		}
	});
	
	$('.change-coin').keyup(function () {
		let coin_convert = 0;
		if ($(this).val() != '') {
			coin_convert = parseInt($(this).val() * $(this).data('price'));
		}
		
		$('.result-coin').val(formatPrice(coin_convert, '₫'));
	});
	
	$('.updateInformation').click(function () {
		fnUpdateInformation($(this).data('form'));
	});
});