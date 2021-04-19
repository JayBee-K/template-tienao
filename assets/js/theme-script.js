var heightSidebar = function () {
	let heightSidebar = $('#heightSidebar').outerHeight(true);
	let heightHeaderSidebar = $('#changeHeightSidebar .sidebar-item .card .card-header').outerHeight(true);
	$('#changeHeightSidebar .sidebar-item .card .card-body').css('max-height', heightSidebar - heightHeaderSidebar);
}

$(document).ready(function () {
	heightSidebar();
});