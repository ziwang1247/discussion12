// Ensures the 'name' and 'address' fields are not empty upon form submission
// Shows or hides error messages for each field if they are left blank
// Prevents the form from being submitted if either the 'name' or 'address' fields are empty, ensuring all required information is provided before submission

document.querySelector('input[type="submit"]').addEventListener('click', function(e) {
    let name = document.querySelector('#name').value;
    let address = document.querySelector('#addr').value;
    let nameError = document.querySelector('#nameError');
    let addressError = document.querySelector('#addrError');

    if (name === '') {
        nameError.style.display = 'block';
    } else {
        nameError.style.display = 'none';
    }

    if (address === '') {
        addressError.style.display = 'block';
    } else {
        addressError.style.display = 'none';
    }

    if (name === '' || address === '') {
        e.preventDefault();
    }
})

