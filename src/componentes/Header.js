import { useState } from "react";
function Header()
{
    const [contador, setContador] = useState(0);    
    function manejoClic()
    {
        setContador(contador+1);
    }
    
    
    return <section>
                <header className="parallax-header">
                    <div className="container">
                        <div className="header-content"><button onClick={manejoClic}>Hola {contador}</button></div>
                    </div>
                </header>
            </section>;

}
export default Header;