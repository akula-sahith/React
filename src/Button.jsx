function Button(){
    const style = {
        backgroundColor: "rgb(33, 229, 229)",
        color: "black",
        fontSize: "20px",
        border: "none",
        padding: "20px",
        margin: "10px",
        border: "1px solid black",
        boxShadow: "3px 3px 3px rgb(65, 59, 59)",
        borderRadius: "15px",
        cursor: "pointer"
    }
   return(
    <button style={style}>CLICK ME</button>
   );
}
export default Button;