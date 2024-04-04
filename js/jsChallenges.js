document.querySelector('#subscribe').addEventListener('click', function() {
    if (this.checked) {
        document.querySelector('#emailDiv').style.display = 'block';
    } else {
        document.querySelector('#emailDiv').style.display = 'none';
    }
})

// challenge 1 part 2
document.addEventListener('click', function() { 
    let currentTime = new Date();
    alert(`current time ${currentTime}`);
});