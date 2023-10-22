import React,{useEffect, useRef, useState} from 'react'
import { useDispatchCart,useCart } from './ContextReducer'
export default function Cards(props) {

let dispatch=useDispatchCart();
let data=useCart()

const priceref=useRef()

let options=props.options
let priceOptions=Object.keys(options)

const [qty,setqty] = useState(1)
const [size,setsize]=useState("")

const handleAddtoCart=async()=>{
    let food=[]
    for(const item of data){
      if(item.id===props.foodItem._id){
        food=item
        break
      }
    }
    if(food.length!=0){
          if(food.size===size)
            {
              await dispatch({type:"UPDATE" ,id:props.foodItem._id,price:finalprice,qty:qty})
              return
            }
          else{
            await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalprice,qty:qty,size:size})
            return
          }
          
    }
    await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalprice,qty:qty,size:size})
    console.log(data)
}
let finalprice=qty*parseInt(options[size])
useEffect(()=>{
  setsize(priceref.current.value)
},[])
  return(
    <div>
    <div className="card mt-3"  style={{"width":"16rem","maxHeight":"360px"}}>
  <img src={props.foodItem.img} className="card-img-top" alt="..." style={{height:"150px",objectFit:"fill"}}/>
  <div className="card-body" >
    <h5 className="card-title">{props.foodItem.name}</h5>
    
    <div className='container w-100'>
    <select className=' h-100  bik' onChange={(e)=>setqty(e.target.value)}>
      {Array.from(Array(6),(e,i)=>{
      return(
        <option key={i+1} value={i+1}>{i+1}</option>
      )
      })}
    </select>
    <select className='mx-3 my-2 h-100 bg-#9de9be54 text-white' ref={priceref} onChange={(e)=>setsize(e.target.value)}>
      {priceOptions.map((data)=>{
        return <option key={data}value={data}>{data}</option>
      })}
      </select>
      <div className=' fs-5'>Price : {finalprice} Rs</div>
    </div>
    <hr>
    </hr>
    <div  className="btn bg-white text-success mx-2 btn-sm" onClick={handleAddtoCart}>Add To Cart</div>
  </div>
</div>
    </div>
      
  )
}
