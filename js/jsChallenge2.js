// When the box is checked the “Billing Address” shows up in the “Home Address” field 
// When the box is checked you can’t edit the “Home Address” field

document.querySelector('#sameAddress').addEventListener('click', function() {
    if (this.checked) {
        document.querySelector('#home').value = document.querySelector('#bill').value;
        document.querySelector('#home').disabled = true;
    } else {
        document.querySelector('#home').disabled = false;
    }
})