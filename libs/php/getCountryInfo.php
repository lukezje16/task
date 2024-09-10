<?php
/*
// first api
$ch = curl_init();
 
$url='http://api.geonames.org/hierarchyJSON?';

 

curl_setopt($ch, CURLOPT_URL,$url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$result=curl_exec($ch);

$result = json_decode($result,true);	

echo json_encode($result); 

curl_close($ch);
 
    //second api
    $ch = curl_init();
 
	$url='http://api.geonames.org/postalCodeLookupJSON';
	
	curl_setopt($ch, CURLOPT_URL,$url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

	$result=curl_exec($ch);

	$data = json_decode($result,true);	

	echo json_encode($result); 

	curl_close($ch);
*/

	//third api
	$ch = curl_init();
 
	$url='http://api.geonames.org/oceanJSON?';

	 
	
	curl_setopt($ch, CURLOPT_URL,$url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

	$result=curl_exec($ch);

	$result = json_decode($result,true);	

	echo json_encode($result); 

	curl_close($ch);
 
?>
