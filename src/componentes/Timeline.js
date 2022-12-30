import iglesia from "../img/church-2-32.ico";
import civil from "../img/bookmark-32.ico";
import coctel from "../img/bar-32.ico";
import party from "../img/heart-15-48.ico";
import { useRef , useEffect} from "react";

function Timeline()
{
    const li1 = useRef(); /* referencia "queryselector" */
    const li2 = useRef();
    const li3 = useRef();
    const li4 = useRef();
    const items = [li1,li2,li3,li4];/*arreglo de los useref*/

    function isItemInView(item) 
    {
      var rect = item.current.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function callbackFunc() 
    {
      for (var i = 0; i < items.length; i++) 
      {
        if (isItemInView(items[i])) 
        {
          items[i].current.classList.add("show");
        }
      }
    }
    useEffect(()=>{
        window.addEventListener("load", callbackFunc);
        window.addEventListener("resize", callbackFunc);
        window.addEventListener("scroll", callbackFunc);}
    ,[])
    // listen for events
    return     <section className="contB">
    <div className="container">
      <div className="row content">
        <div className="col-12 back">
          <h1 className="text-center txtTitles">Time line</h1>
          <ul>
            <li ref={li1}>
              <div>
                <time>Ceremonia religiosa <img src={iglesia} className="center" /></time>
              </div>
            </li>
            <li ref={li2}>
              <div>
                <time>Ceremonia cívil <img src={civil} className="center" /></time>
              </div>
            </li>
            <li ref={li3}>
              <div>
                <time>Coctel <img src={coctel} className="center" /></time>
              </div>
            </li>
            <li ref={li4}>
              <div>
                <time>Recepción <img src={party} className="center" /></time>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
}
export default Timeline;