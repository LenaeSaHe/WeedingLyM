function Event({imagen, titulo})
{
    return <div>
                <time><img src={imagen} className="center" /> {titulo} </time>
            </div>
}
export default Event;