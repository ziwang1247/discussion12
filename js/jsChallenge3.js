// Both boxes must have radio buttons selected to move on
// If one or both radio buttons isn’t selected create an alert

document.querySelector('input[type="submit"]').addEventListener('click', function(e) {
    let radioButtons1 = document.querySelectorAll('input[name="standing"]');
    let radioButtons2 = document.querySelectorAll('input[name="gradDate"]');
    let form1Checked = false;
    let form2Checked = false;
    radioButtons1.forEach((radioButton1) =>{
        if (radioButton1.checked) {
            form1Checked= true;
        } 
    });
    radioButtons2.forEach((radioButton2) =>{
        if (radioButton2.checked) {
            form2Checked= true;
        } 
    });
    if (!form1Checked || !form2Checked) {
        alert('Please select a radio button');
        e.preventDefault();
        
    }
})