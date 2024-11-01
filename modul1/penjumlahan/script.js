function sum() {
    const bil1 = parseFloat(document.getElementById('bil1').value);
    const bil2 = parseFloat(document.getElementById('bil2').value);
    const result = bil1 + bil2;
    document.getElementById('result').textContent = 'Hasil: ' + result;
}

function reset() {
    document.getElementById('bil1').value = '';            
    document.getElementById('bil2').value = '';
    document.getElementById('result').textContent = 'Hasil:';
}
