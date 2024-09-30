const nama = "fadhli firdaus";
let usia = 14;

let biodata = document.getElementById(`biodata`);

function generateBiodata() {
    let generasi;

    if (usia > 10 && usia < 18) {
        // INI ADALAH KONDISI PERTAMA
        generasi = "generasi remaja";  

    } 
    else if (usia > 18 && usia < 30) {
        // INI ADALAH KONDISI KEDUA
        generasi = "generasi dewasa";

    } 
    else if (usia >= 30) {
        // INI ADALAH KONDISI KETIGA
        generasi = "generasi tua";
    }
    else if (usia > 2 && usia < 10) {
        //INI ADALAH KONDISI KEEMPAT
        generasi = "generasi anak anak";
    }
    else {
        // INI ADALAH JIKA KONDISI TIDAK TERPENUHI
        generasi = "generasi gajelas";
    }

    return biodata.innerHTML = generasi;
}

console.log(nama);
console.log(usia);

generateBiodata();
