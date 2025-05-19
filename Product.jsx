import "./Product.css";
import Price from "./Price.jsx";
function Product({title, idx}){
    let oldPrice = ["12, 123", "54, 321", "543", "1,545"];
    let newPrice = ["9,999", "8,321", "298", "999"];
    let description = [ 
        ["8000 DPI", "5 Programmable buttons"],
        ["intuitive surface", "Designed for iPad Pro"],
        ["Designed for iPad Pro", "intuitive surface"],
        ["5 Programmable buttons", "8000 DPI"]
    ];
    return  (
        <div className="Product">
            <h4>{title}</h4>
            <img src="https://m.media-amazon.com/images/I/71Zc7Kfn+1L.jpg" alt="" />
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
        </div>
    );
}
export default Product;