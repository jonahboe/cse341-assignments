var nextURL = null;
var backURL = null;

window.onload = function() {
    fetchData('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10');
};

function getBack(url) {
    fetchData(backURL);
}

function getNext(url) {
    fetchData(nextURL);
}

function fetchData(url) {
    document.getElementById('backButton').hidden = true;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            var list = document.getElementById('pokeList');
            list.innerHTML = '';
            for (var i = 0; i < data.results.length; i++) {
                var entry = document.createElement('li');
                entry.appendChild(document.createTextNode(data.results[i].name));
                list.appendChild(entry);
            }
            nextURL = data.next;
            backURL = data.previous;
        });
}