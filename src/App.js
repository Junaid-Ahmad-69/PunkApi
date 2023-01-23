import Component_First from "./Components/Component_First";
import EventsHandling from "./Events/EventsHandling";
import Form from "./Forms/Form";
import PunkApi from "./Task_1_Punk_API/PunkApi";
import PunkHeader from "./PunkApiHeader/PunkHeader";
import PunkFooter from "./PunkFooter/PunkFooter";
import "./App.css";

const name = "Hello Data";
const App = () => {
  return (
    <div className="App">
      {/* <p>App</p>
      <Component_First name={name} />
      <EventsHandling />
      <Form /> */}
      {/*<PunkHeader />*/}
      <PunkApi />
      {/*<PunkFooter />*/}
    </div>
  );
};

export default App;
