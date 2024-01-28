import '../App.css';
import Trash from '../assets/trash.png'

const CartCard = (props) => {

  return (
    <div className="cartCard">
      <div className='cartLeft'>
        <div className='itemCartImage' style={ { backgroundColor: props.shoe.color } }>
            <div className='itemCartImageBlock'>
                <img src={props.shoe.image} alt="shoeImage" />
            </div>
        </div>
      </div>
      <div className='cartRight'>
        <div className='itemCartName'>{props.shoe.name}</div>
        <div className='itemCartPrice'>${props.shoe.price}</div>
        <div className='itemActions'>
            <div className='itemCount'>
                <div className='action' onClick={()=>{props.decreaseOne(props.index)}}>-</div>
                <div className='count'>{props.shoe.count}</div>
                <div className='action' onClick={()=>{props.increaseOne(props.index)}}>+</div>
            </div>
            <div  className='itemRemove' onClick={()=>{props.removeCart(props.index)}}>
                <img src={Trash} alt="trashIcon" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
