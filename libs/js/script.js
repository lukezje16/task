	 $('#btnRun').click(function() {

		$.ajax({
			url: "libs/php/getCountryInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
				country: $('#selCountry').val(),
				postcode: $('#selPostCode').val(),
				placename:$('#selPlaceName').val(),
				latitude:$('#selLatitude').val(),
				longitude:$('selLongitude').val(),
			},
			success: function(result) {

				console.log(JSON.stringify(result));

				if (result.status.name == "ok"){
					$('#txtCountry').html(result['data'][0]['country']);
					$('#txtPlaceName').html(result['data'][0]['plcaname']);
					$('#txtLatitude').html(result['data'][0]['latitude']);
					$('#txtLongitude').html(result['data'][0]['longitude']);
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
				console.log("AJAX Request Failed");
			}
		}); 
	
	}); 