
function OpcHotel ({titulo, image, linkweb, link})
{
    return <div className="p-5 col-12 col-lg-6 txtTitles d-flex align-items-center justify-content-center">
                <div className="card" style={{width: "25rem"}}>
                    <img src={image} class="card-img-top"/>
                    <div class="card-body">
                        <h5 className="txtCardHotel center">{titulo}</h5>
                        <div className="txtCardHotel center">
                            <a href={linkweb} class="btn btn-primary me-2" target="_blank">Sitio web</a>
                            <a href={link} class="btn btn-primary me-2" target="_blank">Reservar</a>
                        </div>
                    </div>
                </div>
            </div>


}
export default OpcHotel;