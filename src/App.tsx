<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react";

import "./App.css";

import { PizzaScreen } from "./components/PizzaScreen";
import { MakerScreen } from "./components/MakerScreen";
import { initState } from "./state";


function App() {
  const [state, _setState] = useState(initState);

  return (
    <div style={{display: 'flex'}}>
      <MakerScreen onChange={_setState} /> 
      <PizzaScreen molho={state.molho} borda={state.borda} tipos={state.tipos} />      
    </div>
  );
}

export default App;
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
=======
import { useState } from "react";

import "./App.css";

import { PizzaScreen } from "./components/PizzaScreen";
import { MakerScreen } from "./components/MakerScreen";

const initState = { 
  borda: "fina", 
  molho: "vermelho", 
  tipo: ["verdura", "carne"] 
};
>>>>>>> 9f0f9db (modificaçoes)

function App() {
  const [state, _setState] = useState(initState);
  const [isMakerVisible, setIsMakerVisible] = useState(true);

  return (
    <>
<<<<<<< HEAD

<<<<<<< HEAD
export default App
>>>>>>> 3895b06 (app)
=======
{/* <div id="screenMaker">
        <Header />
        <div className="row">
          <OpcoesMassa />
          <OpcoesMolho />
        </div>
        <div className="row">
          <OpcoesTipo />
          <ImgClient />
        </div>
        <footer>
          <button className="hidden"> ➡️ </button>
        </footer>
      </div> */}
<PizzaScreen molho={state.molho} borda={state.borda} tipos={state.tipo} />
    </>
   );
  }
  export default App;
>>>>>>> 9f0f9db (modificaçoes)
=======
      { isMakerVisible ? 
        <MakerScreen onChange={_setState} submit={() => setIsMakerVisible(false)} /> :
        <PizzaScreen molho={state.molho} borda={state.borda} tipos={state.tipo} />
      }
      {
        !isMakerVisible && <button onClick={() => setIsMakerVisible(true)}> ⬅️ </button> 
      }
    </>
  );
}

export default App;
>>>>>>> 911a77e (alteraçoes)
