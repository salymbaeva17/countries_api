const row = document.querySelector(".row") // строка

// создала элемент div с классом col-4
fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data => {
        data.forEach(el => {
            row.innerHTML += `<div class="col-3">
            <div class="country__box">
                <img src="${el.flag}" alt="" class="country__flag">
                <div class="country__info">
                    <h3 class="country__name">${el.name}</h3>
                    <p class="country__capital">Capital: ${el.capital}</p>
                    <p class="country__region">Region: ${el.region}</p>
                    <p class="country__subregion">Subregion: ${el.subregion}</p>
                </div>  
            </div>
        </div>`
        })
    })
