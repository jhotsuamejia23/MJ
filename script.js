document.addEventListener("DOMContentLoaded", function () {
    // Mostrar el día de la semana en el encabezado
    const daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const today = new Date();
    const dayOfWeek = daysOfWeek[today.getDay()];
    document.getElementById("dayOfWeek").innerText = `Hoy es ${dayOfWeek}`;
});
