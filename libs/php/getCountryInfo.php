<?php

  
    //first api
    $ch = curl_init();
 
	$url='http://api.geonames.org/postalCodeLookupJSON?postalcode=6600&country=AT&username=demo';

	 
	header('Content-Type: application/json; charset=UTF-8');
	
	curl_setopt($ch, CURLOPT_URL,$url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

	$result=curl_exec($ch);

	$result = json_decode($result,true);	

	echo json_encode($result); 

	curl_close($ch);

	//second api
    $ch = curl_init();
 
	$url='http://api.geonames.org/siblings?geonameId=3017382&username=demo';

	 
	header('Content-Type: application/json; charset=UTF-8');
	
	curl_setopt($ch, CURLOPT_URL,$url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

	$result=curl_exec($ch);

	$result = json_decode($result,true);	

	echo json_encode($result); 

	curl_close($ch);

	//third api
	$ch = curl_init();
 
	$url='http://api.geonames.org/ocean?lat=40.78343&lng=-43.96625&username=demo';

	 
	header('Content-Type: application/json; charset=UTF-8');
	
	curl_setopt($ch, CURLOPT_URL,$url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

	$result=curl_exec($ch);

	$result = json_decode($result,true);	

	echo json_encode($result); 

	curl_close($ch);
 
?>
