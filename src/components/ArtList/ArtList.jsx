import { useLoaderData } from "react-router-dom";
import ArtCard from "../ArtCard/ArtCard";
import 'animate.css';
import { Typewriter } from 'react-simple-typewriter';
const ArtList = () => {

    const words=[
        "Discover a curated collection of exquisite paintings meticulously selected to captivate your senses in our Hand-Picked Paintings section."
      ]

    const data = useLoaderData();
    console.log(data);
    return (
        <div className="w-[85%] mx-auto">
        <h2 className="animate__animated animate__heartBeat text-4xl font-bold text-center mb-6">Hand Picked Paintings</h2>
        <p className="text-2xl mb-6 text-center"><Typewriter words={words} loop={false} cursor={true} /></p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {data.map((card)=>(
                <ArtCard key={card._id} card={card} from="home"></ArtCard>
            ))}
        </div>
            
        </div>
    );
};

export default ArtList;