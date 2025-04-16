const apiKey = '41e09d3650ff862a3b10d6845e8d2529'; 

// Función para obtener el clima
function obtenerClima() {
  const ciudad = 'Ciudad autonoma de Bueno Aires';  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const clima = data.weather[0].description;
      const temperatura = data.main.temp;
      const fecha = new Date();
      const fechaFormateada = `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`;
      
      // Mostrar el clima y la fecha
      document.getElementById('clima').innerHTML = `${clima} | ${temperatura}°C`;
      document.getElementById('fecha').innerHTML = `Fecha: ${fechaFormateada}`;
    })
    .catch(error => console.log(error));
}

// función
obtenerClima();
