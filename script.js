function tabuada() {
    var num = document.getElementById('num');
    var res = document.getElementById('res');

    if (num.value.length == 0) {
        alert('Por favor, digite um número!');
    } else {
        var n = Number(num.value);
        res.innerHTML = '';
        for(var c = 1; c <= 10; c++) {
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n*c}`;
            res.appendChild(item);
            item.style.fontWeight = 'bold';
            item.style.fontStyle = 'normal';

        } 
        
    }
    
}