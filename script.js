document.getElementById('salaryForm').addEventListener('submit', function(event) {
    event.preventDefault();

   
    let hourlyRate = parseFloat(document.getElementById('hourlyRate').value);
    let hoursWorked = parseFloat(document.getElementById('hoursWorked').value);

   
    let salarioBruto = hourlyRate * hoursWorked;

   
    let descontoINSS = salarioBruto * 0.08;
    let descontoIR = salarioBruto * 0.11;
    let descontoSindicato = salarioBruto * 0.05;

    // Calcular salário líquido
    let salarioLiquido = salarioBruto - descontoINSS - descontoIR - descontoSindicato;

    
    document.getElementById('salarioBruto').textContent = salarioBruto.toFixed(2);
    document.getElementById('descontoINSS').textContent = descontoINSS.toFixed(2);
    document.getElementById('descontoIR').textContent = descontoIR.toFixed(2);
    document.getElementById('descontoSindicato').textContent = descontoSindicato.toFixed(2);
    document.getElementById('salarioLiquido').textContent = salarioLiquido.toFixed(2);

   
    document.getElementById('results').style.display = 'block';
});
