import foto1 from "../img/mainLyM4.jpg";

function GalleryOne() 
{
    return (<section className="contA">
               
                <div className="row d-flex align-items-center justify-content-center galleryOneContainer">

                    <div className="col-lg-4">
                        <img src={foto1} className="ourPhoto" />
                    </div>   
                    <div className="col-lg-4">
                        <img src={foto1} className="ourPhoto" />
                    </div>
                    <div className="col-lg-4">
                        <img src={foto1} className="ourPhoto" />
                    </div>
                </div>

            </section>);
}
export default GalleryOne;