	 $('#btnRun').click(function() {

		$.ajax({
			url: "libs/php/getCountryInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lat: $('#country').val(),
				lng: $('#logitude').val(),
		
			},
			success: function(result) {

				console.log(JSON.stringify(result));
		
				if (result.status.name == "ok") {
		
					$('#txtLatitude').html(result['data'][0]['latitude']);
					$('#txtLongitude').html(result['data'][0]['longitude']);
				}
				
			},
			error:function(jqHRX, textSatus, errorThrown){
				console.log("AJAX failed");
			}
		}); 
	 
	}); 