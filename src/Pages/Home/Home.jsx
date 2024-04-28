import { Helmet } from 'react-helmet-async';
import ArtList from '../../components/ArtList/ArtList';
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>ArtisanAlley | Home</title>
            </Helmet>
            <ArtList></ArtList>
            
        </div>
        
    );
};

export default Home;