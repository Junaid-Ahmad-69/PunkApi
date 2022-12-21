import Component_First from "./Components/Component_First";
import EventsHandling from "./Events/EventsHandling";
import Form from "./Forms/Form";
import PunkApi from "./Task_1_Punk_API/PunkApi";

const name = "Hello Data";
const App = () => {
  return (
    <>
      {/* <p>App</p>
      <Component_First name={name} />
      <EventsHandling />
      <Form /> */}
      <PunkApi/>
    </>
  );
};

export default App;
