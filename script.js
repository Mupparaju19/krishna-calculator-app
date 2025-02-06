function calculatePower() {
    // Get input values
    var base = document.getElementById('base').value;
    var exponent = document.getElementById('exponent').value;

    // Validate inputs
    if (base === '' || exponent === '') {
        alert('Please enter both base number and exponent');
        return;
    }

    // Calculate power
    var result = Math.pow(base, exponent);

    // Display result
    document.getElementById('result').textContent = 'Result: ' + result;
}
