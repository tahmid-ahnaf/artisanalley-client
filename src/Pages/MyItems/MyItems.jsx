import { useContext, useEffect, useState } from "react"; 
import ArtCard from "../../components/ArtCard/ArtCard";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import { Typewriter } from 'react-simple-typewriter';


const MyItems = () => {
    const {user} = useContext(AuthContext);
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState("All");

    const words=[
      "Whether you're an established artist or a budding talent, this space celebrates the diverse voices and styles of creators",
      "Inviting you to explore the rich tapestry of human imagination and emotion."
    ]

  useEffect(() => {

    async function fetchData() {
      try {
        const response = await fetch(`https://b9a10-server-side-tahmid-ahnaf.vercel.app/itemsByEmail/${user.email}/${filter}`);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Could not fetch items", error);
      }
    }

    fetchData();
  }, [filter]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
    return (
        <div className="w-[85%] mt-20 mx-auto">
        
          <h2 className="animate__animated animate__heartBeat text-4xl font-bold text-center mb-6">
          My Paintings: Personalized Expression
      </h2>
      <p className="text-2xl mb-14 text-center">
        <Typewriter words={words} loop={false} cursor={true} />
      </p>

      <div className="mb-8 flex flex-col items-center justify-center">
        <p className="text-3xl mb-4">Filter By Customization</p>
            <div className="form-control w-[60%] md:w-[20%]">
              <select name="subcategory_Name" className="select select-bordered bg-[#FFF4E4]" required value={filter} onChange={handleFilterChange}>
                <option value="All">All</option>
                <option value="Yes">Customizable</option>
                <option value="No">Not Customizable</option>
              </select>
            </div>
          </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {items.map((card)=>(
                <ArtCard key={card._id} card={card} items={items} setItems={setItems} from="mylist"></ArtCard>
            ))}
        </div>
            
        </div>
    );
};

export default MyItems;