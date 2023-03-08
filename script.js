const loadData = async(searchValue) => {
    const url = `https://restcountries.com/v3.1/name/${searchValue}`;
    const res = await fetch(url);
    const dataJson = await res.json();
    console.log(dataJson)
}

const searchFilter = () => {
    const searchFiled = document.getElementById('search_filed');
    const searchValue = searchFiled.value;
    loadData(searchValue);
}