document.getElementById('btn-global').addEventListener('click', loadglobal);

function loadglobal(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET','https://covid19.mathdro.id/api',true);
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(this.responseText);
            // console.log(data);
            var global ='<p>Jumlah korban yang <b>terjangkit</b> COVID19 telah dikonfirmasi sebanyak <b>'+data['confirmed'].value+'</b> orang.</p><p>Jumlah korban yang telah <b>sembuh</b> dari COVID19 telah dikonfirmasi sebanyak <b>'+data['recovered'].value+'</b> orang.</p><p>Jumlah korban yang <b>meninggal</b> akibat COVID19 telah dikonfirmasi sebanyak <b>'+data['deaths'].value+'</b> orang.</p>';
            document.getElementById('global').innerHTML = global;
        }
    } 
    xhr.send();
}
var country = [
    "idn",
    "phl",
    "tha",
    "mys",
    "sgp"
]

country.forEach(loadData);

function loadData(country){
    document.getElementById('btn-'+country).addEventListener('click',
    function(){
        var xhr = new XMLHttpRequest();
        xhr.open('GET','https://covid19.mathdro.id/api/countries/'+country,true);
        xhr.onreadystatechange = function(){
            if (xhr.readyState == 4 && xhr.status == 200) {
                var data = JSON.parse(this.responseText);
                // console.log(data);
                var output ='<p>Jumlah korban yang <b>terjangkit</b> COVID19 telah dikonfirmasi sebanyak <b>'+data['confirmed'].value+'</b> orang.</p><p>Jumlah korban yang telah <b>sembuh</b> dari COVID19 telah dikonfirmasi sebanyak <b>'+data['recovered'].value+'</b> orang.</p><p>Jumlah korban yang <b>meninggal</b> akibat COVID19 telah dikonfirmasi sebanyak <b>'+data['deaths'].value+'</b> orang.</p>';
                document.getElementById(country).innerHTML = output;
            }
        } 
        xhr.send();
    });

    
}

// document.getElementById('btn-global').addEventListener('click', loadglobal);

// function loadglobal(){
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET','https://covid19.mathdro.id/api',true);
//     xhr.onreadystatechange = function(){
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             var data = JSON.parse(this.responseText);
//             // console.log(data);
//             var global ='<p>Jumlah korban yang <b>terjangkit</b> COVID19 telah dikonfirmasi sebanyak <b>'+data['confirmed'].value+'</b> orang.</p><p>Jumlah korban yang telah <b>sembuh</b> dari COVID19 telah dikonfirmasi sebanyak <b>'+data['recovered'].value+'</b> orang.</p><p>Jumlah korban yang <b>meninggal</b> akibat COVID19 telah dikonfirmasi sebanyak <b>'+data['deaths'].value+'</b> orang.</p>';
//             document.getElementById('global').innerHTML = global;
//         }
//     } 
//     xhr.send();
// }
// document.getElementById('btn-idn').addEventListener('click', loadidn);

// function loadidn(){
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET','https://covid19.mathdro.id/api/countries/idn',true);
//     xhr.onreadystatechange = function(){
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             var data = JSON.parse(this.responseText);
//             // console.log(data);
//             var idn ='<p>Jumlah korban yang <b>terjangkit</b> COVID19 telah dikonfirmasi sebanyak <b>'+data['confirmed'].value+'</b> orang.</p><p>Jumlah korban yang telah <b>sembuh</b> dari COVID19 telah dikonfirmasi sebanyak <b>'+data['recovered'].value+'</b> orang.</p><p>Jumlah korban yang <b>meninggal</b> akibat COVID19 telah dikonfirmasi sebanyak <b>'+data['deaths'].value+'</b> orang.</p>';
//             document.getElementById('idn').innerHTML = idn;
//         }
//     } 
//     xhr.send();
// }
// document.getElementById('btn-phl').addEventListener('click', loadphl);

// function loadphl(){
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET','https://covid19.mathdro.id/api/countries/phl',true);
//     xhr.onreadystatechange = function(){
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             var data = JSON.parse(this.responseText);
//             // console.log(data);
//             var phl ='<p>Jumlah korban yang <b>terjangkit</b> COVID19 telah dikonfirmasi sebanyak <b>'+data['confirmed'].value+'</b> orang.</p><p>Jumlah korban yang telah <b>sembuh</b> dari COVID19 telah dikonfirmasi sebanyak <b>'+data['recovered'].value+'</b> orang.</p><p>Jumlah korban yang <b>meninggal</b> akibat COVID19 telah dikonfirmasi sebanyak <b>'+data['deaths'].value+'</b> orang.</p>';
//             document.getElementById('phl').innerHTML = phl;
//         }
//     } 
//     xhr.send();
// }
// document.getElementById('btn-tha').addEventListener('click', loadtha);

// function loadtha(){
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET','https://covid19.mathdro.id/api/countries/tha',true);
//     xhr.onreadystatechange = function(){
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             var data = JSON.parse(this.responseText);
//             // console.log(data);
//             var tha ='<p>Jumlah korban yang <b>terjangkit</b> COVID19 telah dikonfirmasi sebanyak <b>'+data['confirmed'].value+'</b> orang.</p><p>Jumlah korban yang telah <b>sembuh</b> dari COVID19 telah dikonfirmasi sebanyak <b>'+data['recovered'].value+'</b> orang.</p><p>Jumlah korban yang <b>meninggal</b> akibat COVID19 telah dikonfirmasi sebanyak <b>'+data['deaths'].value+'</b> orang.</p>';
//             document.getElementById('tha').innerHTML = tha;
//         }
//     } 
//     xhr.send();
// }
// document.getElementById('btn-mys').addEventListener('click', loadmys);

// function loadmys(){
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET','https://covid19.mathdro.id/api/countries/mys',true);
//     xhr.onreadystatechange = function(){
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             var data = JSON.parse(this.responseText);
//             // console.log(data);
//             var mys ='<p>Jumlah korban yang <b>terjangkit</b> COVID19 telah dikonfirmasi sebanyak <b>'+data['confirmed'].value+'</b> orang.</p><p>Jumlah korban yang telah <b>sembuh</b> dari COVID19 telah dikonfirmasi sebanyak <b>'+data['recovered'].value+'</b> orang.</p><p>Jumlah korban yang <b>meninggal</b> akibat COVID19 telah dikonfirmasi sebanyak <b>'+data['deaths'].value+'</b> orang.</p>';
//             document.getElementById('mys').innerHTML = mys;
//         }
//     } 
//     xhr.send();
// }
// readyState Values
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request 
    // 4: request finished and response is ready
    // {
    //     "confirmed": {
    //         "value":133131285,
    //         "detail":"https://covid19.mathdro.id/api/confirmed"
    //     },
    //     "recovered": 
    //     {
    //         "value":75680238,
    //         "detail":"https://covid19.mathdro.id/api/recovered"
    //     },
    //     "deaths":
    //     {
    //         "value":2887888,
    //         "detail":"https://covid19.mathdro.id/api/deaths"
    //     },
    //     "dailySummary":"https://covid19.mathdro.id/api/daily",
    //     "dailyTimeSeries":
    //     {
    //         "pattern":"https://covid19.mathdro.id/api/daily/[dateString]",
    //         "example":"https://covid19.mathdro.id/api/daily/2-14-2020"
    //     },
    //     "image":"https://covid19.mathdro.id/api/og",
    //     "source":"https://github.com/mathdroid/covid19",
    //     "countries":"https://covid19.mathdro.id/api/countries",
    //     "countryDetail": 
    //     {
    //         "pattern":"https://covid19.mathdro.id/api/countries/[country]",
    //         "example":"https://covid19.mathdro.id/api/countries/USA"
    //     },
    //     "lastUpdate":"2021-04-08T06:20:53.000Z"}