$('#siblingsBtn').click(function() {

	$.ajax({
		url: "libs/php/getPostalCode.php",
		type: 'POST',
		dataType: 'json',
		data: {
			country: $('#selCountry').val(),
			postalcode: $('#selPostalCode').val(),
		},
		success: function(result) {

			console.log(JSON.stringify(result));

			if (result.status.name == "ok") {
		
				$('#txtCountry').html(result);
				$('#txtPostalCode').html(result);
			}
		
		},
		error: function(jqXHR, textStatus, errorThrown) {
			// your error code
			console.log("AJAX failed siblings api:" );
		}
	}); 

});

