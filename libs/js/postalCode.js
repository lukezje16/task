$('#postalBtn').click(function() {

	$.ajax({
		url: "libs/php/getPostalCode.php",
		type: 'POST',
		dataType: 'json',
		data: {
			postalcode: $('#selPostalCode').val(),
			country: $('#selCountry').val(),
		},
		success: function(result) {

			console.log(JSON.stringify(result));

			if (result.status.name == "ok") {
				$('#txtPostalCode').html(result['data'][0]['postalcode']);
				$('#txtCountry').html(result['data'][0]['country']);
			}
		
		},
		error: function(jqXHR, textStatus, errorThrown) {
			// your error code
			console.log("AJAX failed:" );
		}
	}); 

});

