function inputData(datautama) {
    var A = parseFloat(document.getElementById("nilai1").value)
    var B = parseFloat(document.getElementById("nilai2").value)
    var C = parseFloat(document.getElementById("nilai3").value)
    var datautama = [A, B, C]
    return datautama;
}
function urutkan(data, jumlah) {
    for (var i = 0; i < jumlah - 1; i++) {
        for (var j = 0; j < jumlah - 1; j++) {
            if (data[j + 1] < data[j]) {
                var temp = data[j];
                data[j] = data[j + 1];
                data[j + 1] = temp;
            }
        }
    }
}
function ratarata() {
    var data = inputData(data)
    var total = 0;
    for (var i = 0; i < data.length; i++) {
        total += data[i]
        var ratarata = total / data.length;
    }

    document.getElementById("ratarata").innerHTML = ratarata.toFixed(2);
}


function atasbawah() {
    var data = inputData(data)
    var jumlah = data.length

    urutkan(data, jumlah)

    document.getElementById("tertinggi").innerHTML = data[Number(jumlah - 1)];
    document.getElementById("terendah").innerHTML = data[0];
}

function median() {
    var data = inputData(data)
    var jumlah = data.length
    var hasilmedian

    urutkan(data, jumlah)

    if (jumlah % 2 == 1) {
        hasilmedian = data[Number((jumlah / 2) - 0.5)];
    }
    else {
        hasilmedian = (data[jumlah / 2] + data[(jumlah + 1) / 2]) / 2;
    }

    document.getElementById("mediann").innerHTML = hasilmedian;
}

function hitung() {
    ratarata()
    atasbawah()
    median()
}

function hapus() {
    document.getElementById("nilai1").value = "";
    document.getElementById("nilai2").value = "";
    document.getElementById("nilai3").value = "";
    location.reload()
}