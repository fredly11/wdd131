
function calculateWindChill(temperature, windSpeed, isMetric = true) {
    if (isMetric) {
        if (temperature > 10 || windSpeed <= 4.8) return "N/A";
        return (
            13.12 + 
            0.6215 * temperature - 
            11.37 * Math.pow(windSpeed, 0.16) + 
            0.3965 * temperature * Math.pow(windSpeed, 0.16)
        ).toFixed(2) + " °C";
    } else {
        if (temperature > 50 || windSpeed <= 3) return "N/A";
        return (
            35.74 + 
            0.6215 * temperature - 
            35.75 * Math.pow(windSpeed, 0.16) + 
            0.4275 * temperature * Math.pow(windSpeed, 0.16)
        ).toFixed(2) + " °F";
    }
}

function updateWindChill(temperature, windSpeed, isMetric = true) {
    const windChill = calculateWindChill(temperature, windSpeed, isMetric);
    document.getElementById("wind-chill").textContent = windChill;
}


updateWindChill(17, 13, true);
