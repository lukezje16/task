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
                let postalCodes = result.data.postalcodes; // Access the postalcodes array

				console.log(postalCodes);

                let displayData = ''; // To store the info to be displayed

                // Loop through the postalcodes array
                postalCodes.forEach(function(postalCodeInfo) {
                    //example: Extract useful info, modify these lines based on the actual data you want to display
                    let placeName = postalCodeInfo.placeName;
                    let postalCode = postalCodeInfo.postalcode;
                    let countryCode = postalCodeInfo.countryCode;
					let lat = postalCodeInfo.lat;
					let lng = postalCodeInfo.lng;


                    //append the information to the displayData string
                    displayData += `Place Name: ${placeName}, Postal Code: ${postalCode}, Country Code: ${countryCode}, Lat: ${lat}, Lng: ${lng}<br>`;

                    //print to console as well
                    console.log(`Place Name: ${placeName}, Postal Code: ${postalCode}, Country Code: ${countryCode} ,Lat: ${lat}, Lng: ${lng}`);
                });

                // Display the results in an HTML element (replace with your target element)
                $('#txtPostalCode').html(displayData);
            }
        },
		error: function(jqXHR, textStatus, errorThrown) {
			// your error code
			console.log("AJAX failed siblings api:" );
		}
	}); 

});

