var heightSidebar = function () {
	let heightSidebar = $('#heightSidebar').outerHeight(true);
	let heightHeaderSidebar = $('#changeHeightSidebar .sidebar-item .card .card-header').outerHeight(true);
	$('#changeHeightSidebar .sidebar-item .card .card-body').css('max-height', heightSidebar - heightHeaderSidebar);
}
/*
	Function thông báo
	Toast bootstrap 4
	Position có 4 class: top-0, left-0, right-0, bottom-0 (vị trí sẽ show thông báo)
	Code mẫu nằm trong phần "Document ready - submit form"
 */
var call_toastr = function (msg, type, time, position, parentElm) {
	if (!position) {
		position = "position-fixed top-0 right-0";
	}
	let classFind = position.replaceAll(" ", ".");
	if (!time) {
		time = 3000;
	}
	let html = "";
	let hasContainer = ($(".toast-container." + classFind).length > 0);
	let icon = "";
	let bg = "";
	let textColor = "";
	if (type == "success") {
		icon = '<i class="fal fa-check-circle"></i>';
		bg = "bg-success bg-gradient";
		textColor = "text-white";
	} else if (type == "info") {
		icon = '<i class="fal fa-info-circle"></i>';
		bg = "bg-info bg-gradient";
		textColor = "text-white";
	} else if (type == "warning") {
		icon = '<i class="fal fa-exclamation-triangle"></i>';
		bg = "bg-warning bg-gradient";
		textColor = "text-white";
	} else if (type == "error") {
		icon = '<i class="fal fa-times-circle"></i>';
		bg = "bg-danger bg-gradient";
		textColor = "text-white";
	}
	if (!hasContainer) {
		html += `<div class="template-4_toast toast-container ${position}">`;
	}
	html += `<div class="toast ${bg} ${textColor}" role="alert" aria-live="assertive" data-delay="${time}"
         aria-atomic="true">
		<div class="toast-body d-flex justify-content-between">
			<div class="toast-text d-flex">
				 <div class="mr-2 toast-icon">
					${icon}
				 </div>
				 ${msg}
			</div>
			<button type="button" class="mb-1 ml-2 close" data-dismiss="toast" aria-label="Close"><i class="fal fa-times"></i></button>
		</div>
    </div>`;
	
	let elmContainer;
	if (!hasContainer) {
		html += `</div>`;
		if (parentElm) {
			parentElm.append(html);
		} else {
			$("body").append(html);
		}
		elmContainer = $(".toast-container." + classFind);
	} else {
		elmContainer = $(".toast-container." + classFind);
		elmContainer.append(html);
	}
	
	elmContainer.find(".toast:not(.fade)")[0].addEventListener('hidden.bs.toast', function (e) {
		e.target.remove();
		if (elmContainer.find(".toast").length == 0) {
			elmContainer.remove();
		}
	});
	
	elmContainer.find(".toast:not(.fade)").toast("show");
};

var formatPrice = function (n, currency) {
	return n.toFixed(0).replace(/./g, function (c, i, a) {
		return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "." + c : c;
	}) + ' ' + currency;
}
$(document).ready(function () {
	heightSidebar();
	
	$('[data-toggle="tooltip"]').tooltip()
	
	$(document).on("click", ".callModal", function () {
		$('.modal').modal('hide');
		$('#' + $(this).data('modal')).modal('show');
		setTimeout(function () {
			$('body').addClass('modal-open');
		}, 500)
	});
	
	$('.form-validated').submit(function (e) {
		e.preventDefault();
		if ($('.form-validated select').val() == -1) {
			call_toastr("Vui lòng chọn ...", 'error', '5000');
		} else {
			call_toastr("Đây là thông báo thành công", 'success', '5000');
		}
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
});