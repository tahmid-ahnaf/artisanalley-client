import Rating from "react-rating";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import { MdOutlineRemoveDone } from "react-icons/md";
import { MdDoneAll } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ArtCard = ({ card, from, items, setItems }) => {
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

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://b9a10-server-side-tahmid-ahnaf.vercel.app/items/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your art item has been deleted.",
                icon: "success",
              });

              const remaining = items.filter((item) => item._id !== id);
              setItems(remaining);
            }
          });
      }
    });
  };

  
  return (
    <div>
      <div className="card h-min md:h-[400px] md:card-side bg-[#FAE8D3]  shadow-xl">
        <figure className="w-full md:w-[50%] ">
          <img
            src={image}
            alt="Album"
            className="w-full bg-cover h-[300px] md:h-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl flex flex-col md:flex-row items-center gap-4 mb-4">
            {item_name}
            <Rating
              initialRating={rating}
              readonly
              emptySymbol={<FaRegStar className="text-xl text-[#CD3520] " />}
              fullSymbol={<FaStar className="text-xl text-[#CD3520]" />}
            />
          </h2>

          {from === "home" ? (
            <p className="mb-2 flex items-center gap-2 text-xl">
              <BiCategory />
              {subcategory_Name}
            </p>
          ) : (
            ""
          )}

          {customization === "Yes" ? (
            <p className="mb-2 flex items-center gap-2 text-xl">
              <MdDoneAll></MdDoneAll> Customizable{" "}
            </p>
          ) : (
            <p className="mb-2 flex items-center gap-2 text-xl">
              {" "}
              <MdOutlineRemoveDone></MdOutlineRemoveDone>No Customization
            </p>
          )}

          <p className="mb-2 flex items-center text-2xl font-semibold text-[#CD3520] ">
            <BsCurrencyDollar></BsCurrencyDollar> {price}
          </p>

          {stockStatus === "In Stock" ? (
            <p className="mb-2 flex items-center gap-2 text-xl">
              <input type="radio" className="radio radio-success" checked /> In
              Stock
            </p>
          ) : (
            <p className="mb-2 flex items-center gap-2 text-xl">
              <input type="radio" className="radio radio-error" checked />
              Made To Order
            </p>
          )}
          <div className="card-actions">
            {from === "home" ? (
              <Link to={`/view-details/${_id}`}>
                <button className="btn bg-transparent border-[#CD3520] text-[#CD3520] hover:bg-[#CD3520] hover:text-white text-base">
                  View Details
                </button>
              </Link>
            ) : (
              <div className="flex  gap-4">
              <Link to={`/updateitem/${_id}`}>
              <button
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                  className="btn bg-transparent border-[#CD3520] text-[#CD3520] hover:bg-[#CD3520] hover:text-white text-base"
                >
                  Update
                </button>
              </Link>
                

                <button
                  onClick={() => handleDelete(_id)}
                  className="btn bg-transparent border-[#CD3520] text-[#CD3520] hover:bg-[#CD3520] hover:text-white text-base"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtCard;
