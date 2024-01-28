import '../App.css';
import NikeLogo from "../assets/nike.png"
import ShoeCard from './ShoeCard';
import CardCard from './CartCard'
const AppCard = (props) => {
    const totalPrice = !props.store  && props.data.reduce((acc,shoe)=>{
        if(shoe.inCart){
            acc += shoe.price * shoe.count
        }
        return acc;
    },0)
    

  return (
    <div className="appCard">
        <div  className='head'>
            <img src={NikeLogo} alt="logo" className='logo'></img>
        </div>
        <div className='headTitle'>
            <p className='title'>{props.title}</p>
            {!props.store && (<p className='title'>${totalPrice.toFixed(2)}</p>)}
        </div>
        <div className='appCardBody'>
            {!props.store && totalPrice == 0 && (<div style={{fontSize: 14 }}>Your cart is empty.</div>)}
            {props.store ? props.data.map((shoe,index)=>{
                return (
                    <ShoeCard key={index} shoe={shoe} index={index} addCart={props.addCart}></ShoeCard>
                )
            }):props.data.map((shoe,index)=>{
                if (shoe.inCart)
                {
                    return (
                    <CardCard key={index} shoe={shoe} index={index} removeCart={props.removeCart} increaseOne={props.increaseOne} decreaseOne={props.decreaseOne}></CardCard>
                    )
                }
            })}
        </div>
        
    </div>
  );
}

export default AppCard;
