// =====================================
// MANIPULASI DOM
// EVENT HANDLING
// VALIDASI FORM
// =====================================


// =====================================
// LATIHAN 1
// GANTI WARNA BACKGROUND
// =====================================

// Ambil tombol warna
const btnPutih =
    document.getElementById("btnPutih");

const btnBiru =
    document.getElementById("btnBiru");

const btnKuning =
    document.getElementById("btnKuning");


// Event tombol putih
btnPutih.addEventListener("click", function () {

    document.body.style.backgroundColor =
        "white";

    console.log("Warna putih aktif");

});


// Event tombol biru
btnBiru.addEventListener("click", function () {

    document.body.style.backgroundColor =
        "lightblue";

    console.log("Warna biru aktif");

});


// Event tombol kuning
btnKuning.addEventListener("click", function () {

    document.body.style.backgroundColor =
        "yellow";

    console.log("Warna kuning aktif");

});


// =====================================
// LATIHAN 2
// TAMPILKAN NAMA
// =====================================

// Ambil tombol
const tombolNama =
    document.getElementById("btnNama");

// Event klik
tombolNama.addEventListener("click", function () {

    // Ambil value input
    const nama =
        document.getElementById("nama").value;

    // Tampilkan hasil
    document.getElementById("hasilNama").textContent =
        "Halo, " + nama + "!";

});


// =====================================
// EVENT KEYUP
// =====================================

const inputNama =
    document.getElementById("nama");

inputNama.addEventListener("keyup", function () {

    const nilai = inputNama.value;

    document.getElementById("hasilNama").textContent =
        "Anda mengetik: " + nilai;

});


// =====================================
// LATIHAN 3
// VALIDASI FORM LOGIN
// =====================================

const formLogin =
    document.getElementById("formLogin");

// Event submit form
formLogin.addEventListener("submit", function (event) {

    // Mencegah form reload
    event.preventDefault();

    // Ambil nilai input
    let username =
        document.getElementById("username").value;

    let password =
        document.getElementById("password").value;

    // Reset error
    document.getElementById("errorUsername").textContent = "";

    document.getElementById("errorPassword").textContent = "";

    document.getElementById("pesanBerhasil").textContent = "";

    let valid = true;

    // Validasi username
    if (username === "") {

        document.getElementById("errorUsername").textContent =
            "Username tidak boleh kosong";

        valid = false;
    }

    // Validasi password
    if (password.length < 8) {

        document.getElementById("errorPassword").textContent =
            "Password minimal 8 karakter";

        valid = false;
    }

    // Jika valid
    if (valid) {

        document.getElementById("pesanBerhasil").textContent =
            "Login berhasil!";

        console.log("Login berhasil");
    }

});