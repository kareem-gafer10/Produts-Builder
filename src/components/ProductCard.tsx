import { IProduct } from "../interfaces";
import txtSlicer from "../utils/functions";
import Image from "./Image";
import Button from "./Ui/Button";

interface Iprops {
  product: IProduct;
}

const ProductCard = ({ product }: Iprops) => {
  const { title, description, imageURL, price, category } = product;

  return (
    <div className="border rounded-md p-2 flex flex-col space-y-3 max-w-sm md:max-w-lg mx-auto md:mx-0">
      <Image
        imageUrl={imageURL}
        alt={title}
        className="rounded-md h-52 w-full lg:object-cover"
      />
      <h3 className="text-lg font-semibold">{txtSlicer(title, 25)}</h3>
      <p className="text-sm text-gray-500">{txtSlicer(description)}</p>

      <div className="flex items-center my-4 gap-x-2">
        <span className="w-5 h-5 rounded-full bg-indigo-600 cursor-pointer block"></span>
        <span className="w-5 h-5 rounded-full bg-red-600 cursor-pointer block"></span>
        <span className="w-5 h-5 rounded-full bg-yellow-600 cursor-pointer block"></span>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-lg text-indigo-600 font-semibold">${price}</span>
        <div className="flex items-center gap-x-3">
          <span className="text-xs font-semibold">{category.name}</span>
          <img
            className="w-10 h-10 rounded-full object-bottom"
            src={category.imageURL}
            alt={category.name}
          />
        </div>
      </div>

      <div className="flex justify-between items-center gap-x-2 mt-5">
        <Button className="bg-indigo-600 hover:bg-indigo-800" width="w-full">
          Edit
        </Button>
        <Button className="bg-[#c2344d] hover:bg-red-800" width="w-full">
          Remove
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
