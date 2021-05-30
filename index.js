$(function() {
  traerOrigen();
  traerDestino();
});

$('#confirmar').on('click', function() {
  
});

$('#estacionO').on('change',function(){
  
});

$('#lineaO').on('change',function(){
  traerOrigen();
});

$('#lineaD').on('change',function(){
  traerDestino();
});

function traerDestino(){
  traerEstacionesDestino();
  traerEstacionDestino()
}

function traerOrigen(){
  traerEstacionesOrigen();
  traerEstacionOrigen();
}

function traerEstacionDestino() {
  const xhttp = new XMLHttpRequest();

  xhttp.open('GET', 'estaciones.json', true);
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.status == 200) {
      var estaciones = JSON.parse(this.responseText);

      var estacion = $('#estacionD option:selected').val();
      var ind = estaciones.findIndex(e => e.nombre == estacion);
 
      $('#nombreD').text(estaciones[ind].nombre);
      $('#imgD').attr("src",estaciones[ind].imagen);
      $('#descripcionD').text(estaciones[ind].descripcion);
    }
  };
}

function traerEstacionOrigen() {
  const xhttp = new XMLHttpRequest();

  xhttp.open('GET', 'estaciones.json', true);
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.status == 200) {
      var estaciones = JSON.parse(this.responseText);

      var estacion = $('#estacionO option:selected').val();
      var ind = estaciones.findIndex(e => e.nombre == estacion);

      $('#nombreOrigen').text(estaciones[ind].nombre);
      $('#imgOrigen').attr("src",estaciones[ind].imagen);
      $('#descripcionOrigen').text(estaciones[ind].descripcion);
    }
  };
}

function traerEstacionesDestino() {
  const xhttp = new XMLHttpRequest();

  xhttp.open('GET', 'estaciones.json', true);
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.status == 200) {
      var estaciones = JSON.parse(this.responseText);

      var estacionO = $('#estacionD');
      estacionO.find('option').remove();
      var linea = $('#lineaD option:selected').val();

      $(estaciones).each(function(i, v) {
        // indice, valor
        if (v.lineas.find(e => e == linea)) {
          estacionO.append(
            '<option value="' + v.nombre + '">' + v.nombre + '</option>'
          );
        }
      });
    }
  };
}

function traerEstacionesOrigen() {
  const xhttp = new XMLHttpRequest();

  xhttp.open('GET', 'estaciones.json', true);
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.status == 200) {
      var estaciones = JSON.parse(this.responseText);

      var estacionO = $('#estacionO');
      estacionO.find('option').remove();
      var linea = $('#lineaO option:selected').val();

      $(estaciones).each(function(i, v) {
        // indice, valor
        if (v.lineas.find(e => e == linea)) {
          estacionO.append(
            '<option value="' + v.nombre + '">' + v.nombre + '</option>'
          );
        }
      });
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
        // indice, valor
        estacionO.append(
          '<option value="' + v.nombre + '">' + v.nombre + '</option>'
        );
      });
    }
  };
}
