import React,{useEffect,useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cards from '../components/Cards'



export default function Home() {
  const [search,setsearch] = useState('')
  const [foodcat,setfoodcat] = useState([])
  const [fooditem,setfooditem] = useState([])
  
  /*const loaddata=async()=>{
    let response =await fetch("http://localhost:5000/api/foodData", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
  })
      response=await response.json()
      setfooditem(response[0])
      //setfoodcat(response.global.foodCategory)
      console.log(response[0])

}*/
const load=async()=>{
  await fetch("http://localhost:5000/api/foodData",{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
  // Add any other request headers or data as needed
})
.then(response => response.json()) // Parse the response as JSON
.then(data => {
  // Access the properties of the response object
  const foodItems = data.foodItems;
  const foodCategories = data.foodCategories;
  
  setfooditem(data.foodItems)
  setfoodcat(data.foodCategories)
  // Now you can work with these properties as needed
  console.log(foodItems);
  console.log(foodCategories);
  
  // You can update your frontend UI or perform other actions here
})
.catch(error => {
  console.error('An error occurred:', error);
  // Handle the error as needed
});
}
  useEffect(()=>{
    load()
  },[])
  
  
  document.body.classList.remove('lbg');
  return(
    <div>
   <div><Navbar/></div>
   <div><div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !!impotant"}}>
  <div className="carousel-inner" id='carousel'>
    <div className="carousel-caption" style={{zIndex:"10"}}>
    <div className="d-flex justify-content-center">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setsearch(e.target.value)}}/>
      {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
    </div>
  </div>
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/random/900x700/?food" 
        style={{filter:"brightness(50%)"}} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900x700/?dinner" className="d-block w-100" style={{filter:"brightness(50%)"}}alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900x700/?lunch" className="d-block w-100" style={{filter:"brightness(50%)"}} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div></div>
   <div className='container'>
      {
        foodcat && foodcat.length !== 0
        ?foodcat.map((data)=>{
          return (<div  className='row mb-3'>
            <div key={data._id} className='fs-3 m-3'>{data.CategoryName}
          </div>
          <hr/>
          {fooditem.length !== 0?fooditem.filter((item)=>(item.CategoryName===data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
          .map((filteritems)=>{
            return(
              <div key={filteritems._id} className='col-12 col-md-6 col-lg-3'>
                  <Cards foodItem={filteritems}
                  options={filteritems.options[0]}
                  
                  ></Cards>
              </div>
            )
          })
          :<div>no such data found</div>}
          </div>)
        })
      :<div>Unable to fetch</div>
      }
      
      </div>
    <div><Footer/></div>
    </div>
  )
}
