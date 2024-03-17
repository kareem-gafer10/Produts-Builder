import { productList } from "./data";

import ProductCard from "./components/ProductCard";
import Modal from "./components/Ui/Modal";
import { useState } from "react";
import Button from "./components/Ui/Button";

const App = () => {
  /* ------- STATE -------  */
  const [isOpen, setIsOpen] = useState(false);

  /* ------- HANDLER -------  */
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  //   /* ------- RENDER -------  */
  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <div className="container">
          <div className="flex justify-center my-5">
          <Button onClick={openModal} width="w-fit"
           className="bg-indigo-600 hover:bg-indigo-800">
            Add
            </Button>
          </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5 m-5">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="ADD A NEW PRODUCT">
        <div className="flex gap-x-3">
          <Button className="bg-indigo-600 hover:bg-indigo-800">Submit</Button>
          <Button className="bg-gray-300 hover:bg-gray-400">Cancel</Button>
        </div>
      </Modal>
    </div>
  );
};

export default App;
