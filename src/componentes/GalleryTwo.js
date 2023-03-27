import foto1 from "../img/mainLyM4.jpg";

function GalleryTwo() 
{
    return (<section className="contA">
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center galleryOneContainer">

                        <div className="col-lg-6">
                            <img src={foto1} className="ourPhoto" />
                        </div>   
                        <div className="col-lg-6">
                            <img src={foto1} className="ourPhoto" />
                        </div>
                    </div>
                </div>

            </section>);
}
export default GalleryTwo;