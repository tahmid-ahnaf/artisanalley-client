import { useLoaderData } from "react-router-dom";
import ArtCard from "../ArtCard/ArtCard";

const ArtList = () => {

    const data = useLoaderData();
    console.log(data);
    return (
        <div className="w-[85%] mx-auto">
        <h2 className="text-4xl font-medium text-center mb-6">Hand Picked Paintings</h2>
        <p className="text-center text-xl mb-12">Bibendum arcu vitae elementum curabitur vitae nunc sed magna.blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {data.map((card)=>(
                <ArtCard key={card._id} card={card} from="home"></ArtCard>
            ))}
        </div>
            
        </div>
    );
};

export default ArtList;