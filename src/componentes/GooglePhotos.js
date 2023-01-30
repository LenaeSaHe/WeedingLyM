import googlephotosico from '../img/google1.png';

import Title from './common/Title';
function GooglePhotos()
{
    return <section className="contB">
                <div className="container">
                    <div className="row content">
                        <div className="col-12 back">
                            <Title>Compartenos tus momentos</Title>
                            <p className="text-center">
                                <a href='https://photos.app.goo.gl/xr62pLeJWLixkXhw7' target="_blank">
                                    <img src={googlephotosico}  width="400"/> 
                                </a>
                            </p>
                        </div>
                        <div className="col-12" id="instagram"></div>
                    </div>
                </div>
            </section>
}
export default GooglePhotos;