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
              <p>Ceremonia religiosa y celebración</p>
              <p className="text-center">
                Bugambilias 2 Fracc, Brisas, 62584 Temixco, Mor. <br />
                13:30 hrs.
              </p>
              <p className="text-center">
                <small>Da clic en el botón inferior para acceder al mapa</small>
              </p>
              <div className="d-grid gap-2">
                <a
                  className="text-center"
                  href="https://www.google.com/maps/dir/Museo+Torres+Bicentenario,+Reforma+y+FFCC+Nacionales,+Toluca,+State+of+Mexico/Finca+San+Pedro+Jard%C3%ADn+Para+Bodas,+Bugambilias,+Brisas,+Temixco,+Morelos/@19.0440469,-99.4005983,11.44z/data=!4m14!4m13!1m5!1m1!1s0x85cd8a21854e8977:0xeb4f4e4e99df1781!2m2!1d-99.6290893!2d19.2876233!1m5!1m1!1s0x85cdd8cf8fdd2f77:0xd75bcd27c8767a40!2m2!1d-99.2211285!2d18.852295!3e0?entry=ttu"
                  id="btnlink"
                  target="_blank"
                >
                  Desde Toluca
                </a>
                <a
                  className="text-center"
                  href="https://www.google.com/maps/dir/Caseta+Tlalpan,+Carr.+Federal+A+Cuernavaca,+Los+Cipreses,+Mexico+City,+CDMX/Finca+San+Pedro+Jard%C3%ADn+Para+Bodas,+Bugambilias,+Brisas,+Temixco,+Morelos/@19.0473241,-99.3501428,11z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x85ce072b1da5fe5f:0x13582479334cf1e9!2m2!1d-99.1487313!2d19.2424994!1m5!1m1!1s0x85cdd8cf8fdd2f77:0xd75bcd27c8767a40!2m2!1d-99.2211285!2d18.852295!3e0?entry=ttu"
                  id="btnlink"
                  target="_blank"
                >
                  Desde CDMX
                </a>
                <a
                  className="text-center"
                  href="https://www.google.com/maps/dir/Caseta+Tlalpan,+Carretera+Federal+A+Cuernavaca,+Los+Cipreses,+Mexico+City,+CDMX/Finca+San+Pedro+Jard%C3%ADn+Para+Bodas,+Bugambilias,+Brisas,+Temixco,+Morelos/@18.9684582,-99.235476,11.94z/data=!4m14!4m13!1m5!1m1!1s0x85ce072b1da5fe5f:0x13582479334cf1e9!2m2!1d-99.1487313!2d19.2424994!1m5!1m1!1s0x85cdd8cf8fdd2f77:0xd75bcd27c8767a40!2m2!1d-99.2211285!2d18.852295!3e0?entry=ttu"
                  id="btnlink"
                  target="_blank"
                  onClick={handleRequestLocation}
                >
                  Desde tu ubicación
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
