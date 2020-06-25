function addAvenger() {
    fetch('https://arcane-temple-26045.herokuapp.com/ta10/insert', {
        method: 'POST',
        body: JSON.stringify({
            name: document.getElementById('new_name').value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}