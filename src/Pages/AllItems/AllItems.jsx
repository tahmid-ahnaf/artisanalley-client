import { Link, useLoaderData } from "react-router-dom";

const AllItems = () => {

    const data = useLoaderData();

    const {image, item_name, subcategory_Name, short_description, price, rating, customization, processing_time, stockStatus, userEmail, userName} = data;

    console.log(data);
    return (
        <div className=" max-w-[85%] mx-auto">
            <div className="overflow-x-auto bg-[#FAE8D3] rounded-lg p-4">
  <table className="table text-xl table-pin-rows table-pin-cols">
    <thead >
      <tr className="bg-[#FAE8D3] text-2xl">
        <td></td>
        <td>Name</td> 
        <td>Sub-Category Name</td> 
        <td>Price</td> 
        <td>Rating</td> 
        <td>Added By</td> 
      </tr>
    </thead> 
    <tbody>

    {data.map((item, idx)=> (
        <tr key={item._id}>
        <td>{idx+1}</td> 
        <td>{item.item_name}</td> 
        <td>{item.subcategory_Name}</td> 
        <td>{item.price}</td> 
        <td>{item.rating}</td> 
        <td>{item.userName}</td> 
        <td>
        <Link to={`/view-details/${item._id}`}>

<button className="btn bg-transparent border-[#CD3520] text-[#CD3520] hover:bg-[#CD3520] hover:text-white text-base">View Details</button>

</Link>
        </td>
      </tr>
    ))}
      
      
    </tbody> 
    
  </table>
</div>
        </div>
    );
};

export default AllItems;