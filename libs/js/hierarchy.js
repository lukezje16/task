$('#hierarchyBtn').click(function() {

	$.ajax({
		url: "libs/php/getHierarchy.php",
		type: 'POST',
		dataType: 'json',
		data: {
			placename: $('#selPlaceName').val(),
			
		},
		success: function(result) {

			console.log(JSON.stringify(result));

			if (result.status.name == "ok") {
				$('#txtGeonameID').html(result);
				
			}
		
		},
		error: function(jqXHR, textStatus, errorThrown) {
			// your error code
			console.log("AJAX failed hierarchy api:" );
		}
	}); 

});

