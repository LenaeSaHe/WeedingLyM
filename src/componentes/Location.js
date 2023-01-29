import maps from "../img/maps.png";
function Location() {
  function handleRequestLocation(e) {
    e.preventDefault();
    getLocation();
  }
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, handleError);
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }

  function handleError(error) {
    let errorStr;
    switch (error.code) {
      case error.PERMISSION_DENIED:
        errorStr = "User denied the request for Geolocation.";
        break;
      case error.POSITION_UNAVAILABLE:
        errorStr = "Location information is unavailable.";
        break;
      case error.TIMEOUT:
        errorStr = "The request to get user location timed out.";
        break;
      case error.UNKNOWN_ERROR:
        errorStr = "An unknown error occurred.";
        break;
      default:
        errorStr = "An unknown error occurred.";
    }
    console.error("Error occurred: " + errorStr);
  }

  function showPosition(position) {
    const url = `https://www.google.com/maps/dir/${position.coords.latitude},${position.coords.longitude}/Finca+San+Pedro+Jard%C3%ADn+Para+Bodas,+Bugambilias+2+Fracc,+Brisas,+62584+Temixco,+Mor./@${position.coords.latitude},${position.coords.longitude},10z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x85cdd8cf8fdd2f77:0xd75bcd27c8767a40!2m2!1d-99.2211285!2d18.852295!3e0`;

    console.log(
      `Latitude: ${position.coords.latitude}, longitude: ${position.coords.longitude}`
    );
    window.open(url);
  }
  return (
    <section className="contLoc">
      <div className="">
        <div className="row">
          <div className="col-lg-8 col-sm-12" id="garden">
            <div className="cardLoc center txtParagraph">
              <p className="text-center">
                <img src={maps} width="100" height="100" className="center" />
              </p>
              <h3 className="cardLoc-title text-center">Finca San Pedro</h3>
              <p className="text-center">
                Bugambilias 2 Fracc, Brisas, 62584 Temixco, Mor. <br />
                00:00 hrs.
              </p>
              <p className="text-center">
                <small>Da clic en el botón inferior para acceder al mapa</small>
              </p>
              <div className="d-grid gap-2">
                <a
                  className="text-center"
                  href="https://www.google.com/maps/dir/Miguel+Hidalgo,+50250+San+Felipe+Tlalmimilolpan,+M%C3%A9x.,+M%C3%A9xico/Tecnologico+de+Monterrey+in+Cuernavaca,+M%C3%A9xico+95D+km+104,+Real+del+Puente,+62790+Mor./@19.1238613,-99.3802373,10.83z/data=!4m14!4m13!1m5!1m1!1s0x85cd895e86254ab7:0x70952364520b22af!2m2!1d-99.6385445!2d19.2388561!1m5!1m1!1s0x85cdd819736a4029:0xeaee3fb10b32a22c!2m2!1d-99.221492!2d18.805884!3e0"
                  id="btnlink"
                  target="_blank"
                >
                  Desde Toluca
                </a>
                <a
                  className="text-center"
                  href="https://www.google.com/maps/dir/Caseta+Tlalpan,+Carr.+Federal+A+Cuernavaca,+Los+Cipreses,+Mexico+City,+CDMX/Tecnologico+de+Monterrey+in+Cuernavaca,+M%C3%A9xico+95D+km+104,+Real+del+Puente,+62790+Mor./@19.0244356,-99.3257639,11z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x85ce072b1da5fe5f:0x13582479334cf1e9!2m2!1d-99.1487313!2d19.2424994!1m5!1m1!1s0x85cdd819736a4029:0xeaee3fb10b32a22c!2m2!1d-99.221492!2d18.805884!3e0"
                  id="btnlink"
                  target="_blank"
                >
                  Desde CDMX
                </a>
                <a
                  className="text-center"
                  href="https://www.google.com/maps/dir/Caseta+Tlalpan,+Carr.+Federal+A+Cuernavaca,+Los+Cipreses,+Mexico+City,+CDMX/Tecnologico+de+Monterrey+in+Cuernavaca,+M%C3%A9xico+95D+km+104,+Real+del+Puente,+62790+Mor./@19.0244356,-99.3257639,11z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x85ce072b1da5fe5f:0x13582479334cf1e9!2m2!1d-99.1487313!2d19.2424994!1m5!1m1!1s0x85cdd819736a4029:0xeaee3fb10b32a22c!2m2!1d-99.221492!2d18.805884!3e0"
                  id="btnlink"
                  target="_blank"
                  onClick={handleRequestLocation}
                >
                  Desde tu ubicacion
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-12"
            id="map"
            style={{ padding: 0, margin: 0 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3775.7833154843656!2d-99.22331718455125!3d18.852300063863435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdd8cf8fdd2f77%3A0xd75bcd27c8767a40!2sFinca%20San%20Pedro%20Jard%C3%ADn%20Para%20Bodas!5e0!3m2!1sen!2smx!4v1673414076500!5m2!1sen!2smx"
              width="100%"
              style={{
                style: 0,
                height: "100vh",
                width: "100%",
                padding: 0,
                margin: 0,
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Location;
