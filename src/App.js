import "./App.css";
import useFilters from "./components/Todo/hooks/useFilters";
import useProducts from "./components/Todo/hooks/useProducts";
import Update from "./components/update-form-logic/Update";

function App() {
  const URL = "http://localhost:3004/products";
  const { products } = useProducts(URL);
  const { handleFilterProductsByShipment, handleFilter } = useFilters();

  // const { value, setValue } = useLocalStorage("me", { name: "Amaben" });
  // console.log(value);
  return (
    <div className="App">
      <>
        OK
        {/* <DogImages />
        <User name="Amala" />
        <Input
          render={(data) => (
            <>
              <Fahreinheit data={data} />
              <Celcuius data={data} />
            </>
          )}
        />
        <Skeleton />
        <Card name="Dog" />
        <LoginUser />

        <TodoState>
          <Todos />
        </TodoState> */}
        {/* <div>PRODUCTS Hook:</div>
        <ul>
          <div>
            <button onClick={() => handleFilter("true")}>Is Shippable</button>
            <button onClick={() => handleFilter("false")}>Not Shippable</button>
          </div>
          {handleFilterProductsByShipment(products)?.map((product) => (
            <li>{product.name}</li>
          ))}
        </ul>

        <div>
          REFS:
          <StoringState />
        </div>

        <div>
          VOTER:
          <Voting />
        </div> */}
        {/* <div>
          Function as props
          <ShowRender />
        </div> */}
        <div>
          Value:
          {/* <button onClick={() => setValue({ name: "Amaben" })}>
            Set Value
          </button> */}
          {/* {value?.name} */}
        </div>
        <Update />
      </>
    </div>
  );
}

export default App;
