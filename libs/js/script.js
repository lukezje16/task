$('#oceanBtn').click(function() {

	$.ajax({
		url: "libs/php/getCountryInfo.php",
		type: 'POST',
		dataType: 'json',
		data: {
			lat: $('#selLatitude').val(),
			lng: $('#selLogitude').val(),
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

