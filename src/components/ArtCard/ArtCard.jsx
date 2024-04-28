import Rating from "react-rating";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import { MdOutlineRemoveDone } from "react-icons/md";
import { MdDoneAll } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { Link } from "react-router-dom";

const ArtCard = ({ card, from }) => {
  const {
    _id,
    image,
    item_name,
    subcategory_Name,
    short_description,
    price,
    rating,
    customization,
    processing_time,
    stockStatus,
    userName,
  } = card;
  return (
    <div>
      <div className="card h-min md:h-[400px] md:card-side bg-[#FAE8D3] shadow-xl">
        <figure className="w-full md:w-[50%] ">
          <img
            src={image}
            alt="Album"
            className="w-full bg-cover h-[300px] md:h-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl flex flex-col md:flex-row items-center gap-4 mb-4">{item_name}<Rating initialRating={rating} readonly 
            emptySymbol={<FaRegStar className="text-xl text-[#CD3520] " />}
            fullSymbol={<FaStar className="text-xl text-[#CD3520]" />}
          /></h2>
         
          {from==="home" ? <p className="flex items-center gap-2 text-xl"><BiCategory />{subcategory_Name}</p> : "" }
          

          {customization ==="Yes" ? <p className="flex items-center gap-2 text-xl"><MdDoneAll></MdDoneAll> Customizable </p> : <p className="flex items-center gap-2 text-xl"> <MdOutlineRemoveDone></MdOutlineRemoveDone>No Customization</p>}
          
          <p className="flex items-center text-2xl font-semibold text-[#CD3520] "><BsCurrencyDollar></BsCurrencyDollar> {price}</p>

          {stockStatus ==="In stock" ? <p className="flex items-center gap-2 text-xl"><input type="radio" className="radio radio-success" checked  /> In Stock</p> : <p className="flex items-center gap-2 text-xl"><input type="radio" className="radio radio-error" checked   />Made To Order</p>}
          <div className="card-actions">

          {from==="home" ? 

          <Link to={`/view-details/${_id}`}>

          <button className="btn bg-transparent border-[#CD3520] text-[#CD3520] hover:bg-[#CD3520] hover:text-white text-base">View Details</button>

          </Link> : <div className="flex flex-col md:flex-row gap-4">

          <Link to={`/view-details/${_id}`}>

          <button className="btn bg-transparent border-[#CD3520] text-[#CD3520] hover:bg-[#CD3520] hover:text-white text-base">Update</button>

          </Link>

          <Link to={`/view-details/${_id}`}>

          <button className="btn bg-transparent border-[#CD3520] text-[#CD3520] hover:bg-[#CD3520] hover:text-white text-base">Delete</button>

          </Link>

          </div>
          }
          
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtCard;
