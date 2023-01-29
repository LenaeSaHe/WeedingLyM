function OpcAirbnb({ titulo, image, linkweb, logo }) {
  return (
    <div className="p-5 col-12 col-lg-6 txtTitles d-flex align-items-center justify-content-center">
      <div className="card" style={{ width: "25rem" }}>
        <img src={image} className="card-img-top" />
        <div className="card-body">
          <h5 className="txtCardHotel center">{titulo}</h5>
          <div className="d-flex justify-content-center">
            <img
              src={logo}
              className="card-img-top"
              style={{ width: "5rem" }}
            />
          </div>
          <div className="txtCardHotel center">
            <a href={linkweb} className="btn btn-primary" target="_blank">
              Reservar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OpcAirbnb;
