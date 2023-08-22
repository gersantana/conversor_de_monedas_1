

const btnConvertir = document.getElementById("btn_convertir");
const resultadoConversion = document.getElementById("resultado_conversion");
const urlApiMonedas = "https://mindicador.cl/api";

btnConvertir.addEventListener("click", async () => {

    const montoEnClp = Number(document.getElementById("monto_clp").value);
    const monedaConvertir = document.getElementById("select_moneda").value;

    try {
        const response = await fetch(urlApiMonedas);
        const data = await response.json();

        if (!data[monedaConvertir]) {
            resultadoConversion.textContent = "Moneda no encontrada en la API";
            return;
        } else if (montoEnClp <= 0) {
            resultadoConversion.textContent = `El monto de entrada de ser "SUPERIOR" a "0" `
        } else {
            const valorConversion = data[monedaConvertir].valor;
            const montoConvertido = montoEnClp / valorConversion;

            resultadoConversion.textContent = `${montoEnClp} CLP equivale a ${montoConvertido.toFixed(2)} ${monedaConvertir}`;
        }

    } catch (error) {
        console.error("Error al obtener datos de la API:", error);
        resultadoConversion.textContent = "Error al obtener los datos de la API";
    }
});