
var getData = () => {
    return fetch("https://rickandmortyapi.com/api/character")
        .then(response => {
        var data = response.json();
        return data;
    });
};

var getDataByID = () => {
    return fetch("https://rickandmortyapi.com/api/character/{id}")
        .then(response => {
        var data = response.json();
        return data;
    });
};

export {getData, getDataByID};