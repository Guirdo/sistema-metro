$(function() {
  traerOrigen();
  traerDestino();
});

$('#confirmar').on('click', function() {
  $.ajax({
    url: 'interestaciones.json',
    type: 'GET',
    dataType: 'json',
    success: interestaciones => {
      var origen = $('#estacionO option:selected').val();
      var destino = $('#estacionD option:selected').val();

      $('#ruta').text(trazarRuta(interestaciones, origen, destino));
    }
  });

  window.location.href = '#rutaTit';
});

function trazarRuta(interestaciones, origen, destino) {
  var ruta = origen+"\n";
  var siguiente = origen;

  while (siguiente != destino) {
    var vencidad = interestaciones.filter(e => e.dupla.find(e => e == siguiente));

    var distancias = vencidad.map(e => {
      return e.longitud;
    });

    var minimo = Math.min.apply(null, distancias);
    var aux = vencidad.filter(e => e.longitud == minimo);
    siguiente = aux[0].dupla.filter(e => e != origen)[0];
    console.log(siguiente,destino);
    ruta += siguiente + '\n';
  }

  return ruta;
}

/**
 * ,
  {
    "nombre": "",
    "imagen": "",
    "descripcion": "",
    "lineas": [],
    "conexiones": []
  }
 */
