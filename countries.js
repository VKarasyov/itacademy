let countrysH={};

    function addCountry(countryName,capitalName) {
        countrysH[countryName]=capitalName;
    }

    function deleteCountry(countryName) {
        delete countrysH[countryName];
    }

    function getCountryInfo(countryName) {
        if ( countryName in countrysH )
            return 'страна: ' + countryName + ' столица: ' + countrysH[countryName] ;
        else
            return 'нет информации о стране ' + countryName + '!' ;
    }

    function listCountrys() {
        let res="";
        for ( let CN in countrysH )
            res+='\n'+getCountryInfo(CN);
        return res;
    }