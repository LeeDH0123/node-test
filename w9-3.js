function add(char) {
    let display = document.getElementById('cal');    
    display.value = display.value + char;

}

function calculate() {
    let cal = document.getElementById('cal');
    let result = eval(cal.value); 
    document.getElementById('cal').value = result;
}

function reset() {
    document.getElementById('cal').value = "";
    document.getElementById('result').value = "";
}