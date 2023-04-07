function addCountryS() {
    let countryName = prompt('Введите название страны:');
    let capitalName = prompt('Введите название столицы:');
    addCountry(countryName, capitalName);
}

function getCountryInfoS() {
    let countryName = prompt('Введите название страны:');
    alert(getCountryInfo(countryName));
    console.log(getCountryInfo(countryName));
}

function deleteCountryS() {
    let countryName = prompt('Введите название страны:');
    deleteCountry(countryName);
}

function allListCountrys() {
    alert(listCountrys());
    console.log(listCountrys());

}
