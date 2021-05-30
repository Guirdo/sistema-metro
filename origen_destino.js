$('#estacionD').on('change', function() {
  $.ajax({
    url: 'estaciones.json',
    type: 'GET',
    dataType: 'json',
    success: estaciones => {
      var estacion = $('#estacionD option:selected').val();
      var ind = estaciones.findIndex(e => e.nombre == estacion);

      $('#nombreD').text(estaciones[ind].nombre);
      $('#imgD').attr('src', estaciones[ind].imagen);
      $('#descripcionD').text(estaciones[ind].descripcion);
    }
  });
});

$('#estacionO').on('change', function() {
  $.ajax({
    url: 'estaciones.json',
    type: 'GET',
    dataType: 'json',
    success: estaciones => {
      var estacion = $('#estacionO option:selected').val();
      var ind = estaciones.findIndex(e => e.nombre == estacion);

      $('#nombreO').text(estaciones[ind].nombre);
      $('#imgO').attr('src', estaciones[ind].imagen);
      $('#descripcionO').text(estaciones[ind].descripcion);
    }
  });
});

$('#lineaO').on('change', function() {
  traerOrigen();
});

$('#lineaD').on('change', function() {
  traerDestino();
});

function traerDestino() {
  traerEstacionesDestino();
  traerEstacionDestino();
}

function traerOrigen() {
  traerEstacionesOrigen();
  traerEstacionOrigen();
}

function traerEstacionDestino() {
  $.ajax({
    url: 'estaciones.json',
    type: 'GET',
    dataType: 'json',
    success: estaciones => {
      var estacion = $('#estacionD option:selected').val();
      var ind = estaciones.findIndex(e => e.nombre == estacion);

      $('#nombreD').text(estaciones[ind].nombre);
      $('#imgD').attr('src', estaciones[ind].imagen);
      $('#descripcionD').text(estaciones[ind].descripcion);
    }
  });
}

function traerEstacionOrigen() {
  $.ajax({
    url: 'estaciones.json',
    type: 'GET',
    dataType: 'json',
    success: estaciones => {
      var estacion = $('#estacionO option:selected').val();
      var ind = estaciones.findIndex(e => e.nombre == estacion);

      $('#nombreO').text(estaciones[ind].nombre);
      $('#imgO').attr('src', estaciones[ind].imagen);
      $('#descripcionO').text(estaciones[ind].descripcion);
    }
  });
}

function traerEstacionesDestino() {
  $.ajax({
    url: 'estaciones.json',
    type: 'GET',
    dataType: 'json',
    success: estaciones => {
      var estacionO = $('#estacionD');
      estacionO.find('option').remove();
      var linea = $('#lineaD option:selected').val();

      $(estaciones).each(function(i, v) {
        if (v.lineas.find(e => e == linea)) {
          estacionO.append(
            '<option value="' + v.nombre + '">' + v.nombre + '</option>'
          );
        }
      });
    }
  });
}

function traerEstacionesOrigen() {
  $.ajax({
    url: 'estaciones.json',
    type: 'GET',
    dataType: 'json',
    success: estaciones => {
      var estacionO = $('#estacionO');
      estacionO.find('option').remove();
      var linea = $('#lineaO option:selected').val();

      $(estaciones).each(function(i, v) {
        if (v.lineas.find(e => e == linea)) {
          estacionO.append(
            '<option value="' + v.nombre + '">' + v.nombre + '</option>'
          );
        }
      });
    }
  });
}
