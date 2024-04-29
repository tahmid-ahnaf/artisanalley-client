import { useContext, useEffect, useState } from "react"; 
import ArtCard from "../../components/ArtCard/ArtCard";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";


const MyItems = () => {
    const {user} = useContext(AuthContext);
    const [items, setItems] = useState([]);

  useEffect(() => {

    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:5000/itemsByEmail/${user.email}`);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Could not fetch items", error);
      }
    }

    fetchData();
  }, []);
    return (
        <div className="w-[85%] mx-auto">
        <h2 className="text-4xl font-medium text-center mb-6">Hand Picked Paintings</h2>
        <p className="text-center text-xl mb-12">Bibendum arcu vitae elementum curabitur vitae nunc sed magna.blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {items.map((card)=>(
                <ArtCard key={card._id} card={card} items={items} setItems={setItems} from="mylist"></ArtCard>
            ))}
        </div>
            
        </div>
    );
};

export default MyItems;