
/*  https://wechselkurse-euro.de/

t = document.querySelector('.kurzy')
rows = t.querySelectorAll('tr')
rows = Array.from(t.querySelectorAll('tr')).map(r => Array.from(r.querySelectorAll('td'))).filter(r => r.length)
obj = rows.map(c => ({country: c[2].innerText, currency: c[3].innerText, name: c[4].innerText, value: parseFloat(c[5].innerText)}))
*/

// Initialisieren nachdem der DOM fertig aufgebaut ist.

document.addEventListener('DOMContentLoaded', init);


function init() {
    // Bezug zum DOM herstellen
console.log("Hello");
currencies = `[
    {
        "country": "Australien",
        "currency": "AUD",
        "name": "Dollar",
        "value": 1.6346
    },
    {
        "country": "Brasilien",
        "currency": "BRL",
        "name": "Real",
        "value": 6.676
    },
    {
        "country": "Bulgarien",
        "currency": "BGN",
        "name": "Lew",
        "value": 1.9558
    },
    {
        "country": "China",
        "currency": "CNY",
        "name": "Yuan",
        "value": 7.8038
    },
    {
        "country": "Dänemark",
        "currency": "DKK",
        "name": "Krone",
        "value": 7.4466
    },
    {
        "country": "Großbritannien",
        "currency": "GBP",
        "name": "Pfund",
        "value": 0.8995
    },
    {
        "country": "Hongkong",
        "currency": "HKD",
        "name": "Dollar",
        "value": 9.0872
    },
    {
        "country": "Indien",
        "currency": "INR",
        "name": "Rupie",
        "value": 87.1955
    },
    {
        "country": "Indonesien",
        "currency": "IDR",
        "name": "Rupiah",
        "value": 16892.54
    },
    {
        "country": "Israel",
        "currency": "ILS",
        "name": "Schekel",
        "value": 3.9976
    },
    {
        "country": "Japan",
        "currency": "JPY",
        "name": "Yen",
        "value": 122.31
    },
    {
        "country": "Kanada",
        "currency": "CAD",
        "name": "Dollar",
        "value": 1.5411
    },
    {
        "country": "Kroatien",
        "currency": "HRK",
        "name": "Kuna",
        "value": 7.553
    },
    {
        "country": "Malaysia",
        "currency": "MYR",
        "name": "Ringgit",
        "value": 4.8853
    },
    {
        "country": "Mexiko",
        "currency": "MXN",
        "name": "Peso",
        "value": 24.6474
    },
    {
        "country": "Neuseeland",
        "currency": "NZD",
        "name": "Dollar",
        "value": 1.7541
    },
    {
        "country": "Norwegen",
        "currency": "NOK",
        "name": "Krone",
        "value": 10.9583
    },
    {
        "country": "Philippinen",
        "currency": "PHP",
        "name": "Peso",
        "value": 56.717
    },
    {
        "country": "Polen",
        "currency": "PLN",
        "name": "Zloty",
        "value": 4.5368
    },
    {
        "country": "Republik Südafrika",
        "currency": "ZAR",
        "name": "Rand",
        "value": 18.809
    },
    {
        "country": "Rumänien",
        "currency": "RON",
        "name": "Lei",
        "value": 4.8675
    },
    {
        "country": "Russland",
        "currency": "RUB",
        "name": "Rubel",
        "value": 92.467
    },
    {
        "country": "Schweden",
        "currency": "SEK",
        "name": "Krone",
        "value": 10.352
    },
    {
        "country": "Schweiz",
        "currency": "CHF",
        "name": "Franken",
        "value": 1.0675
    },
    {
        "country": "Singapur",
        "currency": "SGD",
        "name": "Dollar",
        "value": 1.5926
    },
    {
        "country": "Südkorea",
        "currency": "KRW",
        "name": "Won",
        "value": 1327.24
    },
    {
        "country": "Thailand",
        "currency": "THB",
        "name": "Baht",
        "value": 36.37
    },
    {
        "country": "Tschechische Republik",
        "currency": "CZK",
        "name": "Krone",
        "value": 26.781
    },
    {
        "country": "Türkei",
        "currency": "TRY",
        "name": "Lira",
        "value": 9.9037
    },
    {
        "country": "Ungarn",
        "currency": "HUF",
        "name": "Forint",
        "value": 362.42
    },
    {
        "country": "Vereinigte Staaten von Amerika",
        "currency": "USD",
        "name": "Dollar",
        "value": 1.1721
    }
]`

let waehrungsListe = JSON.parse(currencies);

let selLand = document.getElementById("laender-select");
//
let countries = Array.from(waehrungsListe).map(item => item.country);
console.log(countries);
countries.forEach((land, index) => {
    let opt = document.createElement("option");
    opt.value = index.toString();
    opt.text = land;
    if(index === 0) {
        selLand.add(opt);
        opt = null;
    } else {
        selLand.add(opt, index-1);
        opt = null;
    }
   
})
}

//selectBox.add(newOption,undefined);