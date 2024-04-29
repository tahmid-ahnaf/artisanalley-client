import { Helmet } from 'react-helmet-async';
import ArtList from '../../components/ArtList/ArtList';
import Slider from '../../components/Slider/Slider';
import { useEffect, useState } from 'react';

const Home = () => {
    const [subCategories, setSubCategories] = useState([]);
    useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch(
              `http://localhost:5000/subcategories`
            );
            const data = await response.json();
            console.log(data);
            setSubCategories(data);
          } catch (error) {
            console.error("Could not fetch items", error);
          }
        }
    
        fetchData();
      }, []);
    return (
        <div>
            <Helmet>
                <title>ArtisanAlley | Home</title>
            </Helmet>
            <Slider subCategories={subCategories}></Slider>
            <ArtList></ArtList>
            
        </div>
        
    );
};

export default Home;