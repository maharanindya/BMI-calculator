//mendeklarasi variabel
var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

function calculate() {
    //validasi input
    if (age.value == '' || height.value == '' || weight.value == '' || (male.checked == false && female.checked == false)) {
        alert("Harap isi semua kolom!");
    } else {
        count();
    }
}

function count() {
    //mengambil nilai input
    var p = [age.value, height.value, weight.value];
    if (male.checked) {
        p.push("male");
    } else if (female.checked) {
        p.push("female");
    }

    //rumus BMI
    var bmi = Number(p[2]) / (Number(p[1]) / 100 * Number(p[1]) / 100);

    //menentukan penjelasan dari hasil angka BMI
    var result = '';
    if (bmi < 18.5) {
        result = 'Kekurangan berat badan';
    } else if (18.5 <= bmi && bmi <= 24.9) {
        result = 'Normal (ideal)';
    } else if (25 <= bmi && bmi <= 29.9) {
        result = 'Kelebihan berat badan';
    } else if (30 <= bmi && bmi <= 34.9) {
        result = 'Kegemukan (obesitas)';
    }

    //menampilkan hasil
    document.querySelector("#hasil").innerHTML = `Hasil BMI:`;
    document.querySelector("#result").innerHTML = bmi.toFixed(2); //angka hasil BMI 
    document.querySelector(".comment").innerHTML = result; //penjelasan hasil BMI

}

//mereset form dan hasil
function reload() {
    window.location.reload();
}
