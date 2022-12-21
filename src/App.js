import Component_First from "./Components/Component_First";
import EventsHandling from "./Events/EventsHandling";
import Form from "./Forms/Form";
import PunkApi from "./Task_1_Punk_API/PunkApi";
import PunkHeader from "./PunkApiHeader/PunkHeader";
import PunkFooter from "./PunkFooter/PunkFooter";

const name = "Hello Data";
const App = () => {
  return (
    <>
      {/* <p>App</p>
      <Component_First name={name} />
      <EventsHandling />
      <Form /> */}
      <PunkHeader />
      <PunkApi />
      <PunkFooter />
    </>
  );
};

export default App;
