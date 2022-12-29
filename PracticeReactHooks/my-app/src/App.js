import { createBrowserRouter, RouterProvider, useParams, useSearchParams } from "react-router-dom";
import "./App.css";
import CustomeHooksPrtc_1 from "./components/CustomeHooksPrtc_1";
import CustomeHooksPrtc_2 from "./components/CustomeHooksPrtc_2";
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
import NotFound from "./pages/NotFound";
import Root from "./pages/Root";
import UseParams_2 from "./components/UseParams_2";
import UseParams_1 from "./components/UseParams_1";

const user = "정혁진";
const comment = "환영합니다..!";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: "/useState",
        element: (
          <>
            <UseStatePrtc_1 />
            <UseStatePrtc_2 />
          </>
        ),
      },
      {
        path: "/useEffect",
        element: (
          <>
            <UseEffectPrtc_1 />
            <UseEffectPrtc_2 />
          </>
        ),
      },
      {
        path: "/useRef",
        element: <UseRef_1 />,
      },
      {
        path: "/useContext",
        element: (
          <>
            <UserContext.Provider value={user}>
              <CommentContext.Provider value={comment}>
                <UseContextPrtc_1 />,
              </CommentContext.Provider>
            </UserContext.Provider>
          </>
        ),
      },
      {
        path: "/useMemo",
        element: (
          <>
            <UseMemoPrtc_1 />
            <UseMemoPrtc_2 />
          </>
        ),
      },
      {
        path: "/useCallback",
        element: (
          <>
            <UseCallbackPrtc_1 />
            <UseCallbackPrtc_2 />
          </>
        ),
      },
      {
        path: "/useReducer",
        element: (
          <>
            <UseReducerPrtc_1 />
            <UseReducerPrtc_2 />
          </>
        ),
      },
      {
        path: "/reactMemo",
        element: <ReactMemo />,
      },
      {
        path: "/customHooks",
        element: (
          <>
            <CustomeHooksPrtc_1 />
            <CustomeHooksPrtc_2 />
          </>
        ),
      },
      {
        path: "/useParams",
        element: <UseParams_1 />,
      },
      {
        path: "/useParams/:params",
        element: <UseParams_2 />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
