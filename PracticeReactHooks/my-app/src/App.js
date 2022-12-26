import "./App.css";
import Nav from "./components/Nav";
import ReactMemo from "./components/ReactMemo";
import UseCallbackPrtc_1 from "./components/UseCallbackPrtc_1";
import UseCallbackPrtc_2 from "./components/UseCallbackPrtc_2";
import UseContextPrtc_1 from "./components/UseContextPrtc_1";
import UseEffectPrtc_1 from "./components/UseEffectPrtc_1";
import UseEffectPrtc_2 from "./components/UseEffectPrtc_2";
import UseMemoPrtc_1 from "./components/UseMemoPrtc_1";
import UseMemoPrtc_2 from "./components/UseMemoPrtc_2";
import UseReducerPrtc_1 from "./components/UseReducerPrtc_1";
import UseReducerPrtc_2 from "./components/UseReducerPrtc_2";
import UseRef_1 from "./components/UseRef_1";
import UseStatePrtc_1 from "./components/UseStatePrtc_1";
import UseStatePrtc_2 from "./components/UseStatePrtc_2";
import { CommentContext } from "./context/CommentContext";
import { UserContext } from "./context/UserContext";

const user = "정혁진";
const comment = "환영합니다..!";
const isHidden = true;
function App() {
  return (
    <UserContext.Provider value={user}>
      <div style={{ padding: "100px" }}>
        <Nav />
        {!isHidden && (
          <>
            <h2>1. useState : </h2>
            <UseStatePrtc_1 />
            <h2>2. useState : </h2>
            <UseStatePrtc_2 />
            <h2>3. useEffect : </h2> <UseEffectPrtc_1 />
            <h2>4. cleanUp : </h2>
            <UseEffectPrtc_2 />
            <h2>5. useRef : </h2>
            <UseRef_1 />
            <CommentContext.Provider value={comment}>
              <h2>6. useContext : </h2>
              <UseContextPrtc_1 />
            </CommentContext.Provider>
            <h2>7. useMemo : </h2>
            <UseMemoPrtc_1 />
            <UseMemoPrtc_2 />
            <h2>8. useCallback : </h2>
            <UseCallbackPrtc_1 />
            <UseCallbackPrtc_2 />
            <h2>9. useReducer : </h2>
            <UseReducerPrtc_1 />
            <UseReducerPrtc_2 />
          </>
        )}
        <ReactMemo />
      </div>
    </UserContext.Provider>
  );
}

export default App;
