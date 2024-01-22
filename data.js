const nama = "yussof taqy";
let usia = 20;

let biodata = document.getElementById('biodata');

function generateProfile() {
    let generasi;

    if(usia > 10 && usia < 19) { 
       generasi = "generasi remaja"
    } 
    else if (usia > 15 && usia < 25) {
        generasi = "generasi dewasa"
    }
    else if (usia >= 25) {
        generasi = "generasi tua"
    }
    else if(usia > 3 && usia < 8) {
        generasi = "generasi anak anak"
    }
    else {
        generasi = "generasi bayi"
    }

    return biodata.innerHTML = generasi;
}

console.log(nama);
console.log(usia);

generateProfile();
