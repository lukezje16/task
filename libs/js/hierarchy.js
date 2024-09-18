$('#hierarchyBtn').click(function() {

	$.ajax({
		url: "libs/php/getHierarchy.php",
		type: 'POST',
		dataType: 'json',
		data: {
			placename: $('#selPlaceName').val(),
			
		},
		success: function(result) {
            //console.log(JSON.stringify(result));

            if (result.status.name == "ok") {
                let names = result.data.geonames; //gett the array of geonames
                let displayNames = ''; //initialize an empty string

                //loop through each entry in the geonames array
                names.forEach(function(geoname) {
                    displayNames += geoname.name + ', '; //append each name to the string with a line break
                });

                //display all names in the #txtGeonameID element
                $('#txtGeonameID').html(displayNames);
            }
        },
		error: function(jqXHR, textStatus, errorThrown) {
		
			console.log("AJAX failed hierarchy api:" );
		}
	}); 

});

