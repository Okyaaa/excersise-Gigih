import "./App.css";
import Search from "./pages/search";
// import Index from './pages/home';
import Index from "./pages/search";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Search/> */}
        <Index />
      </div>
    </Provider>
  );
}

export default App;
