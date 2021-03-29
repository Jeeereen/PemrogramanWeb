var tabel = document.getElementById("tabel"),
    form = document.getElementById("form");

function tampilkanData(mhs) {
    var tabel = document.getElementById("tabel"),
        nama = document.getElementById("nama"),
        nim = document.getElementById("nim"),
        prodi = document.getElementById("prodi"),
        email = document.getElementById("email");

    data.nama = nama.value;
    data.nim = nim.value;
    data.prodi = prodi.value;
    data.email = email.value;

    var baris = tabel.insertRow();
    baris.id = data.nim;
    baris.insertCell().appendChild(document.createTextNode(data.nama));
    baris.insertCell().appendChild(document.createTextNode(data.nim));
    baris.insertCell().appendChild(document.createTextNode(data.prodi));
    baris.insertCell().appendChild(document.createTextNode(data.email));

    var btnHapus = document.createElement("input");
    btnHapus.type = "button";
    btnHapus.value = "Hapus";
    btnHapus.id = data.nim;
    baris.insertCell().appendChild(btnHapus);

    if (data.nama == "" || data.nim == "" || data.prodi == "" || data.email == "") {
        alert("Data tidak lengkap");
        tabel.deleteRow();
    }
    mhs.preventDefault();
}

form.addEventListener("submit", tampilkanData, false);

let data = {
    nama: "",
    nim: "",
    prodi: "",
    email: "",

    set setNama(newNama) {
        this.nama = newNama;
    },
    get getNama() {
        return this.nama;
    },
    set setNim(newNim) {
        this.nim = newNim;
    },
    get getNim() {
        return this.nim;
    },
    set setProdi(newProdi) {
        this.prodi = newProdi;
    },
    get getProdi() {
        return this.prodi;
    },
    set setEmail(newEmail) {
        this.email = newEmail;
    },
    get getEmail() {
        return this.email;
    }

}


function hapusData(mhs) {
    if (mhs.target.type == "button") {
        tabel.deleteRow(tabel.rows.namedItem(mhs.target.id).sectionRowIndex);
    }
}

tabel.addEventListener("click", hapusData, true);
