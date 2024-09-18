$('#btnRun').click(function() {

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
				$('#txtOcean').html(result['data']['ocean']['name']);
			}
		
		},
		error: function(jqXHR, textStatus, errorThrown) {
			// your error code
			console.log("AJAX failed ocean api:" );
		}
	}); 

});

