//импортируем стили
import "./App.css";

import {Header} from "./components/header"; // if it was export default, then we'd NOT have {} for "Header"
import {Content} from "./components/contet";
import { useState } from "react";
import { DefaultContext } from "./Context";
import { Footer } from "./components/footer";

export default function App() {

  const [fan, setFan] = useState("");

  const handleCreateFan = ({name}) => {
      setFan(name);
  }

  return (
    <DefaultContext.Provider value={{handleCreateFan}}>
      <Header fan={fan}/>
      <hr/>
      <Content/>
      <hr/>
      <Footer/>
      <hr/>
    </DefaultContext.Provider>
  );
}
