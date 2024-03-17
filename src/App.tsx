import { productList } from "./data";



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
