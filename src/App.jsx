import { Button } from "flowbite-react";
import NavComp from "./Components/NavCom/NavComp";

const App = () => {
  return (
    <div>
      {/* Use Here navbar component */}
      <div>
        <NavComp />
      </div>
      {/* Use Here navbar component */}
      <Button>Click me</Button>
    </div>
  );
};

export default App;
