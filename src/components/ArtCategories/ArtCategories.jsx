import CategoryCard from '../CategoryCard/CategoryCard';
import 'animate.css';
import { Typewriter } from 'react-simple-typewriter';

const ArtCategories = ({subCategories}) => {

    const words=[
        "Delve deeper into the world of art with our meticulously curated subcategories, each unveiling a unique facet of creativity."
      ]
    
    return (
        <div className='w-[85%] mx-auto  mt-20 mb-20'>
        <h2 className='animate__animated animate__heartBeat text-4xl font-bold text-center mb-6'>SubCategories</h2>

        <p className="text-2xl mb-6 text-center"><Typewriter words={words} loop={false} cursor={true} /></p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {subCategories.map((category)=> (
                <CategoryCard key={category._id} category={category}></CategoryCard>
            ))}
        </div>
        </div>
        
    );
};

export default ArtCategories;