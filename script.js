const loadData = async(searchValue) => {
    const url = `https://restcountries.com/v3.1/name/${searchValue}`;
    const res = await fetch(url);
    const dataJson = await res.json();
    showData(dataJson)
}

const searchFilter = () => {
    const searchFiled = document.getElementById('search_filed');
    const searchValue = searchFiled.value;
    loadData(searchValue);
    document.getElementById('search_filed').value = "";
}

const showData = (datas) => {
    const countryWarper = document.getElementById('countrys_warper');
    const {name, capital, continents, flags, currencies} = datas[0];
    const result = document.createElement('div');
    result.classList.add('grid');
    console.log(datas[0])
    result.innerHTML = `
        <img src=${flags.png} alt="flug">
        <h3 class="text-2xl font-semibold">${name.official}</h3>
        <div class="text-left">
            <p>${continents}</p>
            <p>${Object.keys(currencies)}</p>
        </div>
        <button class="border border-1 bg-purple-600 py-3 text-white">See more Deteils</button>
    `
    document.getElementById('countrys_warper').innerText = ' ';
    countryWarper.appendChild(result)
}