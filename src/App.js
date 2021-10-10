import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  const [filtered, setFilter] = React.useState(false);

  const onFilter = () => {
    setFilter(!filtered);
  }

  return (
    <div className="wrapper">
      <Header onFilter={onFilter}/>
      <Home filtered={filtered}/>
    </div>
  );
}

export default App;
