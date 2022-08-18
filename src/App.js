import { useState,useEffect } from "react";
import axios from 'axios';
import NavbarInshorts from "./Components/Navbar/NavbarInshorts";
import apiKey from "./Data/config";
import NewsContent from "./Components/NewsContent/NewsContent";
import Footer from "./Components/Footer/Footer";
import countries from "./Data/countries";


function App() {
  const[category,setCategory]=useState('top');
  const[newsArray,setNewsArray]=useState([]);
  const[newsResults,setNewsResults]=useState();
  // const [loadMore, setLoadMore] = useState(5);


 

console.log(newsArray,'newsArray app');
console.log(newsResults,'newsResults app');


  useEffect(() => {
    const newsApi=async()=>{
      try {
        const news=await axios.get(`https://newsdata.io/api/1/news?apikey=${apiKey}&country=${countries}&language=en&category=${category} `);
        // ('https://newsdata.io/api/1/news?apikey=pub_102289ef3ee3f5c6f6fdf44a6f85fc88bdc87&country=in&language=en&category=top')
        setNewsArray(news.data.results);
        setNewsResults(news.data.totalResults)
      } catch (error) {
        console.log(error)
      }
    }
    newsApi();
  }, [category])
  

  return (
    <div>
    <NavbarInshorts setCategory={setCategory} />
    <NewsContent 
    newsArray={newsArray} newsResults={newsResults}
    // loadMore={loadMore} setLoadMore={setLoadMore} 
    />
    <Footer />
    </div>
  );
}

export default App;
