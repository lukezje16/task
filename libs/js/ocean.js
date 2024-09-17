$('#oceanBtn').click(function() {

	$.ajax({
		url: "libs/php/getOcean.php",
		type: 'POST',
		dataType: 'json',
		data: {
			lat: $('#latitude').val(),
			lng: $('#logitude').val(),
		},
		success: function(result) {

			console.log(JSON.stringify(result));

			if (result.status.name == "ok") {
				$('#txtLatitude').html(result);
				$('#txtLongitude').html(result);
			}
		
		},
		error: function(jqXHR, textStatus, errorThrown) {
			// your error code
			console.log("AJAX failed ocean api:" );
		}
	}); 

});

