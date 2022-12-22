import "./App.css";
import Nav from "./components/Nav";
import UseEffectPrtc_1 from "./components/UseEffectPrtc_1";
import UseEffectPrtc_2 from "./components/UseEffectPrtc_2";
import UseStatePrtc_1 from "./components/UseStatePrtc_1";
import UseStatePrtc_2 from "./components/UseStatePrtc_2";

function App() {

  return (
    <div style={{padding:'100px'}}>
      <Nav />
      <p>1. useState : </p><UseStatePrtc_1 />

      <p>2. useState : </p><UseStatePrtc_2 />
      
      <p>3. useEffect : </p> <UseEffectPrtc_1 />
      <p>4. cleanUp : </p><UseEffectPrtc_2 />
    </div>
  );
}

export default App;
