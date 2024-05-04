import { useEffect, useState } from "react";
import { BrowserRouter, Routes , Route } from "react-router-dom";

import Product from "./pages/product";
import Pricing from "./pages/Pricing";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import "./index.css";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";

const BASE_URL = "http://localhost:8000";

function App(){
   const[cities , setCities] = useState([]);
   const[isLoading , setIsLoading] = useState(false);

   useEffect(function () {
         async function fetchCities() {
          try{
            const res = await fetch(`${BASE_URL}/cities`);
            const data = await res.json();
            setCities(data);
          }catch(err){
             alert("There was an error loading data...");      
          }finally{
             setIsLoading(false);
          }
         }

         fetchCities();
   }, []);

   return(
      <BrowserRouter>
            <Routes>
                 <Route index element={<HomePage />} />
                 <Route path="product" element={<Product />} />    
                 <Route path="pricing" element={<Pricing />} />
                 <Route path="login" element={<Login />} />
                 <Route path="app" element={<AppLayout />}>
                     <Route index element={<CityList cities={cities} isLoading={isLoading}/>} />
                     <Route path="cities" element={<CityList cities={cities} isLoading={isLoading}/>} />
                     <Route path="cities/:id" element={<City />} />
                     <Route path="countries" element={<CountryList cities={cities} isLoading={isLoading}/>} />
                     <Route path="form" element={<p>Form</p>} />
                 </Route>
                 <Route path="*" element={<PageNotFound />} />
            </Routes>
      </BrowserRouter>
   )
}

export default App;