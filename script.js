function searchToggle(obj, evt){
    var SearchMain = $(obj).closest('.search-wrapper');
	
	// Add Class Code
	if(!SearchMain.hasClass('active')){
		SearchMain.addClass('active');
		evt.preventDefault();
	}
	// Remove Class Code
	else if(SearchMain.hasClass('active') && $(obj).closest('.input-holder').length == 0){
		SearchMain.removeClass('active');
		// Clear Input Code
		SearchMain.find('.search-input').val('');
	}
}