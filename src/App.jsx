import NavComp from "./Components/NavCom/NavComp";
import SearchComp from "./Components/Search/SearchComp";
import TabComp from "./Components/TabButton/TabComp";

const App = () => {
  return (
    <div>
      {/* Use Here navbar component */}
      <div>
        <NavComp />
      </div>
      {/* Main layout */}
      <>
        {/* Heading part  */}
        <div>
          <h2 className="border-b px-5 py-2 text-4xl font-bold  text-slate-800 shadow">
            Master Price{" "}
          </h2>
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {/*  Tab Part  */}
            <TabComp />
            {/*  Tab Part  */}

            {/*  here Start here Search Item  */}
            <SearchComp />
            {/*  here Start here Search Item  */}
          </div>
        </div>
        {/* Heading part  */}
      </>
      {/* Main layout */}
    </div>
  );
};

export default App;
