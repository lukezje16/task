$('#oceanBtn').click(function() {

	$.ajax({
		url: "libs/php/getCountryInfo.php",
		type: 'POST',
		dataType: 'json',
		data: {
			lat: $('#latitude').val(),
			lng: $('#logitude').val(),
		},
		success: function(result) {

			console.log(JSON.stringify(result));

			if (result.status.name == "ok") {
				$('#txtLatitude').html(result['data'][0]['lat']);
				$('#txtLongitude').html(result['data'][0]['lng']);
			}
		
		},
		error: function(jqXHR, textStatus, errorThrown) {
			// your error code
			console.log("AJAX failed:" );
		}
	}); 

});

