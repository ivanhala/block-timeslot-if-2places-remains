jQuery(document).ready(function( $ ){
	jQuery(document).on( 'wbk_timeslots_rendered', function(){
        jQuery("[data-available='2']").closest('.wbk-col-4-6-12').remove();
    }); 
});
