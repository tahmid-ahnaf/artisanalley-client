import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { _id, image, subcategory_name, subcategory_description } = category;

  return (
    <Link to={`/itemsofsubcategory/${subcategory_name}`}>
      <div className="h-full p-8 flex flex-col gap-4 items-center bg-[#FAE8D3] rounded-xl">
        <img src={image} alt="" className="w-[300px] h-[200px]" />

        <p className="text-2xl font-semibold">{subcategory_name}</p>

        <p className="text-xl text-center">{subcategory_description}</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
