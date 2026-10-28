function square() {
    let a = parseFloat(document.getElementById('A').value);
    let b = parseFloat(document.getElementById('B').value);
    let c = parseFloat(document.getElementById('C').value);

    let out = document.getElementById('korni'); // куда выводим ответ

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        out.innerHTML = 'Ошибка: введите числа во все поля A, B и C';
        return;
    }

    if (a === 0) {
        if (b === 0) {
            out.innerHTML = (c === 0)
                ? 'Получилось 0 = 0, значит x — любое число'
                : 'Получилось ' + c + ' = 0, корней нет';
        } else {
            let x = -c / b;
            out.innerHTML = 'Уравнение линейное (a = 0), корень: x = ' + round(x);
        }
        return;
    }

    let D = b * b - 4 * a * c;

    let text = 'D = b² − 4ac = ' + b + '² − 4·' + a + '·' + c + ' = ' + round(D) + '<br>';

    if (D > 0) {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        text += 'D &gt; 0 — два корня:<br>';
        text += 'x₁ = ' + round(x1) + '<br>';
        text += 'x₂ = ' + round(x2);
    } else if (D === 0) {
        let x = -b / (2 * a);
        text += 'D = 0 — один корень:<br>';
        text += 'x = ' + round(x);
    } else {
        text += 'D &lt; 0 — корней нет';
    }

    out.innerHTML = text;
}

function round(num) {
    return Math.round(num * 1000) / 1000;
}


function calculate() {

    let initial = parseFloat(document.getElementById('initialDeposit').value);
    let years = parseFloat(document.getElementById('depositTerm').value);     
    let interestPercent = parseFloat(document.getElementById('interestRate').value); 


    if (isNaN(initial) || isNaN(years) || isNaN(interestPercent)) {
        alert("Пожалуйста, введите корректные числовые значения.");
        return;
    }

  
    let interest = interestPercent / 100;


    let result = Math.round(initial * (1 + interest) ** years);

    document.getElementById('wasAmount').innerText = initial;
    document.getElementById('willBeAmount').innerText = result;

    let maxAmount = Math.max(initial, result);
    let maxHeightPx = 200; 

    
    let redHeight = (initial / maxAmount) * maxHeightPx;
    let greenHeight = (result / maxAmount) * maxHeightPx;


    document.getElementById('redBar').style.height = Math.max(redHeight, 10) + 'px';
    document.getElementById('greenBar').style.height = Math.max(greenHeight, 10) + 'px';
}