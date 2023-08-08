import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import DIP from "./SOLID/DIP";
import Layout from "./children";
import Card from "./children/card";
import Subscribed from "./components/Subscribed";
import useFilters from "./components/Todo/hooks/useFilters";
import useProducts from "./components/Todo/hooks/useProducts";
import StopWatch from "./components/ref/StopWatch";
import ClickOutside from "./components/ref/click-outside/ClickOutside";
import { ForwardRef } from "./components/ref/forward-ref";
import ForwardRef2 from "./components/ref/forward-ref/2";
import ThirdExample from "./components/ref/forward-ref/3";
import IntersectionObs from "./components/ref/intersection-observer/IntersectionObs";
import { MyComponent } from "./components/ref/useEffectSkipRender";
import Switch, { switchData } from "./components/switch";
import Form2 from "./components/update-form-logic/Form2";
import OnMount from "./components/useEffect/OnMount";
import Map from "./dsa/map";
import withForm from "./hoc/withForm";
import withSubscription from "./hoc/withSubscription";
import useFetch from "./hooks/useFetch";
import useMediaQuery from "./hooks/useMediaQuery";
import UseEffectComponent from "./useEffect";

function App() {
  const URL = "http://localhost:3004/products";
  const { products } = useProducts(URL);
  const { handleFilterProductsByShipment, handleFilter } = useFilters();

  const { data } = useFetch("http://localhost:3004/products");
  console.log("DATA", data);

  const matches = useMediaQuery("(max-width: 600px)");
  console.log("MATCHES", matches);

  const [state, setState] = useState(0);

  const ref = useRef(0);

  const handle = () => {
    ref.current++;
    console.log(ref.current);
  };

  console.log("I rendered!");
  const updateCount2 = () => setState(state + 1);

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

  const [data2, setData] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=10",
    );

    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [switchh, setSwitch] = useState(switchData[0].label);

  return (
    <div className="App">
      <>
        <OnMount />
        {/* <StateChange /> */}
        {/* <VanillaTiltComponent /> */}
        {/* <Timer /> */}
        <Switch data={switchData} callback={setSwitch} value={switchh} />
        {/* <CompositionPattern /> */}
        {/* <Authentication /> */}
        {/* <ClipPath /> */}
        <DIP />
        {/* <LSP2 /> */}
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
        {/* <FormWithLogic />
        <SubscriptionComponent />
        <FormComponent />
        <UserCards name="Ben" /> */}
        <div>
          <button onClick={handle}>Click me</button>
          <button onClick={updateCount2}>+</button>
          State: {state}
        </div>
        <div>
          <StopWatch />

          <MyComponent />
        </div>
        <div>
          <IntersectionObs />
        </div>
        <div>
          <ClickOutside />
        </div>
        {/* <div>
          Scroll:
          <InfiniteScrollComponent data={data2} />
        </div> */}
        <div>
          ForwardRef
          <ForwardRef />
          <ForwardRef2 />
        </div>
        {/* <div
          style={{
            background: matches ? "red" : "black",
            width: 200,
            height: 100,
            textAlign: "center",
            color: matches ? "black" : "white",
          }}
        >
          600PX
        </div> */}
        <div>
          <UseEffectComponent />
        </div>
        <div>
          <Map />
        </div>
      </>

      <div>
        <Router>
          <nav>
            <ul>
              <Routes>
                <Route exact path="/refs" element={<ThirdExample />} />
              </Routes>

              <li>
                <Link to="/refs">About</Link>
              </li>
            </ul>
          </nav>
        </Router>
      </div>

      <Layout>
        <Card />
      </Layout>
    </div>
  );
}

export default App;
