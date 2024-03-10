//alert("Hello World");

//var nama = prompt("masukkan nama: ");
//alert(nama);

//var tes = confirm("kamu yakin?");
//if(tes === true) {
//	alert("user menekan OK!");
//} else {
//	alert("user menekan CANCEL!");
//}

//Gabungin alert, promt, dan confirm
alert("selamat datang");
var lagi = true;

while (lagi === true) {
	var nama = prompt("masukkan nama: ");
	alert("halo " + nama);

	lagi = confirm("coba lagi?");
}

alert("terima kasih");