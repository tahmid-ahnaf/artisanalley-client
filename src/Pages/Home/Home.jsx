import { Helmet } from 'react-helmet-async';
import ArtList from '../../components/ArtList/ArtList';
import Slider from '../../components/Slider/Slider';
import { useEffect, useState } from 'react';
import Stat from '../../components/Stat/Stat';
import Artists from '../../components/Artists/Artists';
import ArtCategories from '../../components/ArtCategories/ArtCategories';

const Home = () => {
    const [subCategories, setSubCategories] = useState([]);
    useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch(
              `https://b9a10-server-side-tahmid-ahnaf.vercel.app/subcategories`
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
            <ArtCategories subCategories={subCategories}></ArtCategories>
            <Stat subCategories={subCategories}></Stat>
            <Artists></Artists>
            
        </div>
        
    );
};

export default Home;