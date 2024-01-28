import '../App.css';
import Check from "../assets/check.png"

const ShoeCard = (props) => {

  return (
    <div className="shoeCard">
        <div className='itemImage' style={ { backgroundColor: props.shoe.color } }>
            <img src={props.shoe.image} alt="itemImage" />
        </div>
        <div className='itemName'>{props.shoe.name}</div>
        <div className='itemDescription'>{props.shoe.description}</div>
        <div className='itemBottom'>
            <div className="itemPrice">${props.shoe.price}</div>
            {/* {props.shoe.inCart ? (
            <div className="addCartButton inCartButton">
                <img src={Check} alt='check' className='check'></img>
            </div>):(
            <div className='addCartButton' onClick={()=>{props.addCart(props.index)}}>
                <p>ADD TO CART</p>
            </div>)} */}
            <div className={` addCartButton ${props.shoe.inCart?"inCartButton":""} ` } onClick={() => !props.shoe.inCart && props.addCart(props.index)}>
                {props.shoe.inCart ? (<img src={Check} alt='check' className='check'></img>
                ):(<p>ADD TO CART</p>)}
            </div>
        </div>


    </div>
  );
}

export default ShoeCard;
