document.addEventListener("DOMContentLoaded", function() {
    const mesSelect = document.getElementById('expiracionMes');
    const anoSelect = document.getElementById('expiracionAno');
    const today = new Date();
    const year = today.getFullYear();

    const meses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    meses.forEach((mes, index) => {
        let option = document.createElement('option');
        option.value = index + 1;
        option.text = mes;
        mesSelect.add(option);
    });

    for (let i = 0; i < 10; i++) {
        let option = document.createElement('option');
        option.value = year + i;
        option.text = year + i;
        anoSelect.add(option);
    }
});

function cancelar() {
    document.getElementById("reservaForm").reset();
}