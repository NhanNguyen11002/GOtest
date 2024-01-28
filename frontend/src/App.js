import './App.css';
import data from './data/shoes.json'
import AppCard from './components/AppCard';
import { useState, useEffect } from 'react';

const getFromLocal = () => {
  const storedData = localStorage.getItem('cartItems');
  if (storedData) {
    const parsedData = JSON.parse(storedData);
    console.log(parsedData);
    return parsedData;
  } else {
    console.log('Không có dữ liệu trong Local Storage');
  }
}
function App() {
  const [products,setProducts] = useState([])
  const localData  = getFromLocal();
  
  useEffect(()=>{
    const getProducts = async () =>{
      await fetch('http://localhost:3000/api/product').then(res=>res.json()).then(data=>{
        let map = new Map();
        localData.forEach(shoe=>{
          map.set(shoe.id,shoe.count)
        })
        const formatData = data.map(shoe=>({...shoe,inCart:map.get(shoe.id)>0?true:false, count:map.get(shoe.id)}))
        setProducts([...formatData]);
      });
    }
    getProducts();
  },[])
  useEffect(()=>{
    saveToLocal()
  },[products]);
  const saveToLocal = () => {
    const inCart = products.filter(product => product.inCart===true)
    localStorage.setItem('cartItems',JSON.stringify(inCart));
    
  }
  

  const addCart = (index) => {
    const copyArr = [...products]; 
    console.log(copyArr)
    copyArr[index].inCart = true;
    copyArr[index].count = 1;
    setProducts(copyArr)
  }
  const removeCart = (index) =>{
    const copyArr = [...products];
    copyArr[index].inCart = false;
    copyArr[index].count =  0;
    setProducts(copyArr);
  }
  const increaseOne = (index) => {
    const copyArr = [...products]; 
    copyArr[index].count += 1;
    setProducts(copyArr)
  }
  const decreaseOne = (index) => {
    const copyArr = [...products]; 
    copyArr[index].count -= 1
    if(  copyArr[index].count === 0){
      copyArr[index].inCart = false;
      copyArr[index].count = 1;
    }
    setProducts(copyArr)
  }
  return (
    <div className="App">
      <AppCard title="Our Products" data ={products} store={true} addCart={addCart} removeCart={removeCart} increaseOne={increaseOne}  decreaseOne={decreaseOne}/>
      <AppCard title="Your cart" data ={products} store={false} addCart={addCart} removeCart={removeCart} increaseOne={increaseOne}  decreaseOne={decreaseOne}/>
    </div>
  );
}

export default App;
