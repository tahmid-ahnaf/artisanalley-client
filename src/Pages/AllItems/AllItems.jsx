import { Link, useLoaderData } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter';

const AllItems = () => {
  const data = useLoaderData();

  const words=[
    "Immerse yourself in our Art Table Showcase, a meticulously curated collection of masterpieces showcasing paintings from various artists.",
    "Delve into a treasure trove of information including artwork names, contributing artists, prices, ratings, and more."
  ]

  const {
    image,
    item_name,
    subcategory_Name,
    short_description,
    price,
    rating,
    customization,
    processing_time,
    stockStatus,
    userEmail,
    userName,
  } = data;

  console.log(data);
  return (
    <div className="mt-20 mb-20 max-w-[85%] mx-auto">
      <h2 className="animate__animated animate__heartBeat text-4xl font-bold text-center mb-6">
      Art Showcase: Explore Masterpieces
      </h2>
      <p className="text-2xl mb-6 text-center">
        <Typewriter words={words} loop={false} cursor={true} />
      </p>
      <div className="overflow-x-auto bg-[#FAE8D3] rounded-lg p-4">
        <table className="table text-xl table-pin-rows table-pin-cols">
          <thead>
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
            {data.map((item, idx) => (
              <tr key={item._id}>
                <td>{idx + 1}</td>
                <td>{item.item_name}</td>
                <td>{item.subcategory_Name}</td>
                <td>{item.price}</td>
                <td>{item.rating}</td>
                <td>{item.userName}</td>
                <td>
                  <Link to={`/view-details/${item._id}`}>
                    <button className="btn bg-transparent border-[#CD3520] text-[#CD3520] hover:bg-[#CD3520] hover:text-white text-base">
                      View Details
                    </button>
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
