import { productList } from "./data";

// const App = () => {

//   return (
//     <div className=" container">
//       <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md ">
//         {renderProductList}
//       </div>
//     </div>
//   );
// };

// export default App;

import ProductCard from "./components/ProductCard";

//   /* ------- RENDER -------  */
const renderProductList = productList.map((product) => (
  <ProductCard key={product.id} product={product} />
));

const App = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5 m-5">
        {renderProductList}
      </div>
    </div>
  );
};

export default App;
