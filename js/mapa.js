function iniciarmapa(){
    var coord = {lat:-27.3595484,lng:-70.3352387};
    var mapa = new google.maps.Map(document.getElementById('mapa'),{
        zoom:10,
        center: coord
    });

    var marker = new google.maps.Marker({
        position: coord,
        map: map
      });
  }
