$(function() {
  traerOrigen();
  traerDestino();
});

$('#confirmar').on('click', function() {
  trazarRuta();
  window.location.href = "#rutaTit";
});

function trazarRuta(){
  const xhttp = new XMLHttpRequest();

  xhttp.open('GET', 'estaciones.json', true);
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.status == 200) {
      var estaciones = JSON.parse(this.responseText);

      
    }
  };
}

function traerDatos() {
  const xhttp = new XMLHttpRequest();

  xhttp.open('GET', 'estaciones.json', true);
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.status == 200) {
      var estaciones = JSON.parse(this.responseText);

      var estacionO = $('#estacionO');
      estacionO.find('option').remove();

      $(estaciones).each(function(i, v) {
        estacionO.append(
          '<option value="' + v.nombre + '">' + v.nombre + '</option>'
        );
      });
    }
  };
}
