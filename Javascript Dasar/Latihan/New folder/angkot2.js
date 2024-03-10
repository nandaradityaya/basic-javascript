var jmlAngkot = 10;
var angkotBeroperasi = 8;
var noAngkot = 1;

while(noAngkot <= angkotBeroperasi) {
	console.log("Angko No. " + noAngkot + " beroperasi dengan baik");

	noAngkot++;
}

for( noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++ ) {
	console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi");
}