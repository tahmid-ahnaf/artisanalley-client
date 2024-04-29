import { useContext, useEffect, useState } from "react"; 
import ArtCard from "../../components/ArtCard/ArtCard";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";


const MyItems = () => {
    const {user} = useContext(AuthContext);
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState("All");

  useEffect(() => {

    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:5000/itemsByEmail/${user.email}/${filter}`);
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