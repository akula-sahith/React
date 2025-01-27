import Profilepic from './assets/YoutubeDp.jpg'
function Card(){
    return (
        <div className="card">
            <img src={Profilepic}></img>
            <h2>Sahith Akula</h2>
            <p>A student at VRSEC</p>
        </div>
    );
}
export default Card;