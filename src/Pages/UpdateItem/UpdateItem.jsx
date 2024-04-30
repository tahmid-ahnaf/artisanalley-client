import { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateItem = () => {
    const data = useLoaderData();
    const navigate = useNavigate();
    

    console.log(data);

    const {_id,image, item_name, subcategory_Name, short_description, price, rating, customization, processing_time, stockStatus} = data;

    const [customizationInput, setCustomization] = useState(customization);
    const [stockStatusInput, setStockStatus] = useState(stockStatus);
    
    const handleUpdate = (e) => {

        e.preventDefault(); // Prevent the default form submit action


      const image= e.target.elements.imageURL.value;
      const item_name= e.target.elements.item_name.value;
      const subcategory_Name= e.target.elements.subcategory_Name.value;
      const short_description= e.target.elements.short_description.value;
      const price= e.target.elements.price.value;
      const rating= e.target.elements.rating.value;
      const customization= e.target.elements.customization.value;
      const processing_time= e.target.elements.processing_time.value;
      const stockStatus= e.target.elements.stockStatus.value;
      // const userEmail= e.target.elements.userEmail.value;
      // const userName= e.target.elements.userName.value;
    //   const userEmail = user.email;
    //   const userName = user.displayName;

    const newItem = {image, item_name, subcategory_Name, short_description, price, rating, customization, processing_time, stockStatus}

    // console.log(newItem);

        fetch(`https://b9a10-server-side-tahmid-ahnaf.vercel.app/update/${_id}`, {
        method: 'PUT',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(newItem)
    })
    .then(res => res.json())
    .then(data => {
        if(data.matchedCount)
        {
            Swal.fire({
                title: 'Success!',
                text: 'Item Updated Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })

              
              

        }
        
    })
    navigate("/myitems");
  };
    return (
        <div className='w-[95%] md:w-[50%] bg-[#FAE8D3] mx-auto p-4 lg:px-12 lg:py-10 rounded-lg'>
            <form onSubmit={handleUpdate}>
            <h2 className="font-semibold text-4xl text-center mb-4">
              Update the item
            </h2>
            <div className="form-control mb-4">
            <label htmlFor="imageURL">Image URL</label>
              <input
                type="text"
                name="imageURL"
                defaultValue={image}
                className="input input-bordered bg-[#FFF4E4]"
                required
              />
            </div>

            <div className="form-control mb-4">
            <label htmlFor="item_name">Item Name</label>
              <input
                type="text"
                name="item_name"
                defaultValue={item_name}
                className="input input-bordered bg-[#FFF4E4]"
                required
              />
            </div>

            <div className="form-control mb-4">
            <label htmlFor="short_description">Short Description</label>
              <input
                type="text"
                name="short_description"
                defaultValue={short_description}
                className="input input-bordered bg-[#FFF4E4]"
                required
              />
            </div>

            <div className="form-control mb-4">
            <label htmlFor="price">Price</label>
              <input
                type="number"
                name="price"
                defaultValue={price}
                className="input input-bordered bg-[#FFF4E4]"
                required
              />
            </div>

            <div className="form-control mb-4">
            <label htmlFor="rating">Rating</label>
              <input
                type="number"
                id="rating"
                name="rating"
                step="0.1"
                min="0"
                max="5"
                defaultValue={rating}
                className="input input-bordered bg-[#FFF4E4]"
                required
              />
            </div>

            <div className="form-control mb-4">
            <label htmlFor="processing_time">Processing Time</label>
              <input
                type="number"
                name="processing_time"
                defaultValue={processing_time}
                className="input input-bordered bg-[#FFF4E4]"
                required
              />
            </div>

            <div className="mb-4">
              <div className="form-control flex">
                <div className="label">
                  <span className="label-text">Pick the subcategory name</span>
                </div>
                <select
                  name="subcategory_Name"
                  className="select select-bordered bg-[#FFF4E4]"
                  required
                  defaultValue={subcategory_Name}
                >
                  <option value="Landscape Painting">Landscape Painting</option>
                  <option value="Portrait Drawing">Portrait Drawing</option>
                  <option value="Watercolour Painting">
                    Watercolour Painting
                  </option>
                  <option value="Oil Painting">Oil Painting</option>
                  <option value="Charcoal Sketching">Charcoal Sketching</option>
                  <option value="Cartoon Drawing">Cartoon Drawing</option>
                </select>
              </div>
            </div>
            <fieldset className="mb-4 flex gap-4">
              <p className="text-lg">Customization</p>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="customization"
                  className="radio checked:bg-blue-500"
                  value="Yes"
                  checked={customizationInput==="Yes"}
                  onChange={() => setCustomization('Yes')}
                />
                <label htmlFor="customization_yes">Yes</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="customization"
                  className="radio checked:bg-red-500"
                  value="No"
                  checked={customizationInput==="No"}
                  onChange={() => setCustomization('No')}
                />
                <label htmlFor="customization_no">No</label>
              </div>
            </fieldset>
            <fieldset className="mb-4 flex gap-4">
              <p className="text-lg">Stock Status</p>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="stockStatus"
                  className="radio checked:bg-blue-500"
                  value="In Stock"
                  checked={stockStatusInput==="In Stock"}
                  onChange={() => setStockStatus('In Stock')}
                />
                <label htmlFor="stockStatus_yes">In Stock</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="stockStatus"
                  className="radio checked:bg-red-500"
                  value="Made to Order"
                  checked={stockStatusInput==="Made to Order"}
                  onChange={() => setStockStatus('Made to Order')}
                />
                <label htmlFor="stockStatus_no">Made To Order</label>
              </div>
            </fieldset>

            <div className="flex justify-center">
              <button
                type="submit"
                className="btn bg-transparent border-[#CD3520] text-[#CD3520] hover:bg-[#CD3520] hover:text-white text-base"
              >
                Update Item
              </button>
            </div>
          </form>
        </div>
    );
};

export default UpdateItem;