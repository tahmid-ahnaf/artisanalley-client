import { BsCurrencyDollar } from "react-icons/bs";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { MdDoneAll, MdOutlineRemoveDone } from "react-icons/md";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";


const ItemDetails = () => {

    const data = useLoaderData();

    console.log(data);

    const {image, item_name, subcategory_Name, short_description, price, rating, customization, processing_time, stockStatus, userEmail, userName} = data;

    return (
        <div className="max-w-[85%] mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        <div className="w-full h-full">
            <img src={image} alt="image" className="w-full bg-cover h-[300px] md:h-full" />
        </div>


        <div className="flex flex-col gap-8 justify-center bg-[#FAE8D3] rounded-lg p-8">
            <h2 className="text-4xl font-bold">{item_name}</h2>
            <p className="flex items-center text-4xl font-semibold "><BsCurrencyDollar></BsCurrencyDollar>{price}</p>
            <Rating initialRating={rating} readonly 
            emptySymbol={<FaRegStar className="text-2xl text-[#CD3520] " />}
            fullSymbol={<FaStar className="text-2xl text-[#CD3520]" />}
          />

          <p className="w-[80%] text-2xl">{short_description}</p>

          <p className="text-2xl"><span className="font-bold">Subcategory Name :</span> {subcategory_Name}</p>

          <p className="text-2xl"> <span className="font-bold">Processing Time :</span>  {processing_time} hrs</p>

          <p className="text-2xl"> <span className="font-bold">Added By :</span>  {userName}</p>

          {stockStatus ==="In Stock" ? <p className="flex items-center gap-2 text-xl font-bold "><input type="radio" className="radio radio-success" checked  /> In Stock</p> : <p className="flex items-center gap-2 text-xl font-bold"><input type="radio" className="radio radio-error" checked   />Made To Order</p>}

          {customization ==="Yes" ? <p className="flex items-center gap-2 text-xl font-bold"><MdDoneAll></MdDoneAll> Customizable </p> : <p className="flex items-center gap-2 text-xl font-bold"> <MdOutlineRemoveDone></MdOutlineRemoveDone>No Customization</p>}



        </div>

        </div>
            
        </div>
    );
};

export default ItemDetails;