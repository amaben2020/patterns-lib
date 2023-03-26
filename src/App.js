import axios from "axios";
import { useEffect } from "react";
import "./App.css";
import Subscribed from "./components/Subscribed";
import useFilters from "./components/Todo/hooks/useFilters";
import useProducts from "./components/Todo/hooks/useProducts";
import Form2 from "./components/update-form-logic/Form2";
import FormWithLogic from "./components/update-form-logic/FormWithLogic";
import UserCards from "./components/user-cards";
import withForm from "./hoc/withForm";
import withSubscription from "./hoc/withSubscription";
import useFetch from "./hooks/useFetch";

function App() {
  const URL = "http://localhost:3004/products";
  const { products } = useProducts(URL);
  const { handleFilterProductsByShipment, handleFilter } = useFilters();

  const { data } = useFetch("http://localhost:3004/products");
  console.log("DATA", data);

  // const { value, setValue } = useLocalStorage("me", { name: "Amaben" });
  // console.log(value);

  const SubscriptionComponent = withSubscription(
    Subscribed,
    "http://localhost:3004/users-db",
  );

  const FormComponent = withForm(Form2, "http://localhost:3004/users");
  console.log("FC", FormComponent);

  console.log(SubscriptionComponent);

  const fetchh = async () => {
    try {
      const { data } = await axios.get("http://localhost:3004/users-db");
      console.log("data in fetch", data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchh();
  }, []);

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
        <FormWithLogic />
        <SubscriptionComponent />
        <FormComponent />
        <UserCards name="Ben" />
      </>
    </div>
  );
}

export default App;
