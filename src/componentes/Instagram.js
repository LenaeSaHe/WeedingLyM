import instagram from '../img/instagram-32.ico';
import facebook from '../img/facebook-32.ico';
function Instagram()
{
    return <section className="contB">
                <div className="container">
                    <div className="row content">
                        <div className="col-12 back">
                            <h1 className="text-center txtTitles">#Hashtag del evento</h1>
                            <p className="text-center">
                            Comparte con nosotros todas tus fotografías, historias, reels, o
                            videos que captures durante el evento, usando el hashtag
                            <b><i>#BodaLyM</i></b> esto en Instagram 
                            <img src={instagram}/> y Facebook 
                            <img src={facebook}/>
                            </p>
                        </div>
                        <div className="col-12" id="instagram"></div>
                    </div>
                </div>
            </section>
}
export default Instagram;