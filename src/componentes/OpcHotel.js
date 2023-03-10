function OpcHotel({ titulo, image, linkweb, link }) {
  return (
    <div className=" col-12 col-lg-4 txtTitles d-flex align-items-center justify-content-center">
      <div className="card" style={{ width: "25rem", marginBottom:"10px", height:"380px" }}>
        <img src={image} className="card-img-top" />
        <div className="card-body">
          <h5 className="txtCardHotel center">{titulo}</h5>
          <div className="txtCardHotel center">
            <a href={linkweb} className="btn btn-primary me-2" target="_blank">
              Sitio web
            </a>
            <a href={link} className="btn btn-primary me-2" target="_blank">
              Reservar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OpcHotel;
