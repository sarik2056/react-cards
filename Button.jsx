import "./Product.css";
function printAlert(){
    alert("Not available");
}

function Button(){
    
    return (
        <>
        <button onClick={printAlert}>Click me!</button>
        </>
    )
}
export default Button;