import React,{useState} from "react";
import API from "../services/api";

function SearchPage(){

 const [query,setQuery] = useState("");
 const [products,setProducts] = useState([]);

 const handleSearch = async ()=>{

  const res = await API.get(`/products/search?q=${query}`);

  setProducts(res.data);

 };

 return(
  <div>

   <h2>Search Products</h2>

   <input
    placeholder="Search..."
    onChange={(e)=>setQuery(e.target.value)}
   />

   <button onClick={handleSearch}>Search</button>

   <ul>
    {products.map((p)=>(
     <li key={p._id}>{p.name}</li>
    ))}
   </ul>

  </div>
 )
}

export default SearchPage;
