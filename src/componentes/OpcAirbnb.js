function OpcAirbnb({ titulo, image, linkweb, logo }) {
  return (
    <div className=" col-12 col-lg-4 txtTitles d-flex align-items-center justify-content-center">
      <div className="card" style={{ width: "25rem", marginBottom:"10px", height:"400px"}}>
        <img src={image} className="card-img-top" />
        <div className="card-body">
          <h5 className="txtCardHotel center">{titulo}</h5>
          <div className="txtCardHotel center">
            <a href={linkweb} className="btn btn-primary" target="_blank">
              Reservar airbnb <img src={logo} width="32"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OpcAirbnb;
