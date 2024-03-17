import { useState } from "react";
import { formInputsList, productList } from "./data";
import ProductCard from "./components/ProductCard";
import Modal from "./components/Ui/Modal";
import Button from "./components/Ui/Button";
import Input from "./components/Ui/Input";

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

  const renderFormInputList = formInputsList.map((input) => (
    <div className="flex flex-col" key={input.id}>
      <label
        htmlFor={input.id}
        className="mb-[2px] text-sm font-medium text-gray-700"
      >
        {input.label}
      </label>
      <Input type="text" id={input.id} name={input.name} />
    </div>
  ));

  return (
    <div className="container">
      <div className="flex justify-center my-5">
        <Button
          onClick={openModal}
          width="w-fit"
          className="bg-indigo-600 hover:bg-indigo-800"
        >
          Add
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5 m-5">
        {renderProductList}
      </div>

      <Modal isOpen={isOpen} closeModal={closeModal} title="ADD A NEW PRODUCT">
        <div className=" space-y-3">
          {renderFormInputList}
          <div className="flex gap-x-3">
          <Button className="bg-indigo-600 hover:bg-indigo-800">Submit</Button>
          <Button className="bg-gray-400 hover:bg-gray-500">Cancel</Button>
        </div>
        </div>
       
      </Modal>
    </div>
  );
};

export default App;
