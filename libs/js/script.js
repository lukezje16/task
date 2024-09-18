$('#btnRun').click(function() {

	$.ajax({
		url: "libs/php/getCountryInfo.php",
		type: 'POST',
		dataType: 'json',
		data: {
			lat: $('#txtLatitude').val(),  // Correct input ID for latitude
            lng: $('#txtLongitude').val()  // Correct input ID for longitude
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

