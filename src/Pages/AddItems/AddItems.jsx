import { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../components/AuthProvider/AuthProvider';
const AddItems = () => {
  const {user} = useContext(AuthContext);
  const handleSubmit = (e) => {
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
      const userEmail = user.email;
      const userName = user.displayName;

    const newItem = {image, item_name, subcategory_Name, short_description, price, rating, customization, processing_time, stockStatus, userEmail, userName}

    fetch('http://localhost:5000/items', {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(newItem)
    })
    .then(res => res.json())
    .then(data => {
        if(data.insertedId)
        {
            Swal.fire({
                title: 'Success!',
                text: 'Item Added Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })

        }
        
    })
  };
  return (
    <div className="mx-auto bg-[#FFF4E4] p-4 lg:p-8 rounded-lg">
      <div className="w-[95%] md:w-[50%] bg-[#FAE8D3] mx-auto p-4 lg:px-12 lg:py-10 rounded-lg">
        <form onSubmit={handleSubmit}>
        <h2 className="font-semibold text-4xl text-center mb-4">
        Add Items 
      </h2>
          <div className="form-control mb-4">
            <input
              type="text"
              name="imageURL"
              placeholder="Image URL"
              className="input input-bordered bg-[#FFF4E4]"
              required
            />
          </div>

          <div className="form-control mb-4">
            <input
              type="text"
              name="item_name"
              placeholder="Art&Craft Item Name"
              className="input input-bordered bg-[#FFF4E4]"
              required
            />
          </div>

          

          <div className="form-control mb-4">
            <input
              type="text"
              name="short_description"
              placeholder="Short Description"
              className="input input-bordered bg-[#FFF4E4]"
              required
            />
          </div>

          <div className="form-control mb-4">
            <input
              type="number"
              name="price"
              placeholder="Price"
              className="input input-bordered bg-[#FFF4E4]"
              required
            />
          </div>

          <div className="form-control mb-4">
            <input
              type="number"
              id="rating"
              name="rating"
              step="0.1"
              min="0"
              max="5"
              placeholder="Rating"
              className="input input-bordered bg-[#FFF4E4]"
              required
            />
          </div>

          

          <div className="form-control mb-4">
            <input
              type="number"
              name="processing_time"
              placeholder="Preprocessing Time in hours"
              className="input input-bordered bg-[#FFF4E4]"
              required
            />
          </div>

          <div className="form-control mb-4">

          <label htmlFor="userEmail" className='mb-2 font-semibold'>Added By</label>
            <input
              type="email"
              name="userEmail"
              placeholder={user.email}
              className="input input-bordered bg-[#FFF4E4]"
              required
              disabled
            />
          </div>

          <div className="form-control mb-4">
            <input
              type="text"
              name="userName"
              placeholder={user.displayName}
              className="input input-bordered bg-[#FFF4E4]"
              required
              disabled
            />
          </div>

          <div className="mb-4">
            <div className="form-control flex">
              <div className="label">
                <span className="label-text">
                  Pick the subcategory name
                </span>
              </div>
              <select name="subcategory_Name" className="select select-bordered bg-[#FFF4E4]" required>
                <option value="Landscape Painting" >Landscape Painting</option>
                <option value="Portrait Drawing">Portrait Drawing</option>
                <option value="Watercolour Painting">Watercolour Painting</option>
                <option value="Oil Painting">Oil Painting</option>
                <option value="Charcoal Sketching">Charcoal Sketching</option>
                <option value="Cartoon Drawing">Cartoon Drawing</option>
              </select>
            </div>
          </div>
          <fieldset className="mb-4 flex gap-4">
            <p className="text-lg">
              Customization
            </p>
            <div className="flex items-center gap-2">
            <input type="radio" name="customization" className="radio checked:bg-blue-500" value="Yes" />
              <label htmlFor="customization_yes">Yes</label>
            </div>
            <div className="flex items-center gap-2">
            
            <input type="radio" name="customization" className="radio checked:bg-red-500" value="No" />
              <label htmlFor="customization_no">No</label>
            </div>
          </fieldset>
          <fieldset className="mb-4 flex gap-4">
            <p className="text-lg">
              Stock Status
            </p>
            <div className="flex items-center gap-2">
            <input type="radio" name="stockStatus" className="radio checked:bg-blue-500" value="In Stock" />
              <label htmlFor="stockStatus_yes">In Stock</label>
            </div>
            <div className="flex items-center gap-2">
            
            <input type="radio" name="stockStatus" className="radio checked:bg-red-500" value="Made to Order" />
              <label htmlFor="stockStatus_no">Made To Order</label>
            </div>
          </fieldset>

          

          
          <div className="flex justify-center">
          <button
            type="submit"
            className="btn bg-transparent border-[#CD3520] text-[#CD3520] hover:bg-[#CD3520] hover:text-white text-base"
          >
            Add Item
          </button>
          </div>
          
          
        </form>
      </div>
    </div>
  );
};

export default AddItems;
