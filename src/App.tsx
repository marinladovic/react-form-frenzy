import AppRouter from "@/router/AppRouter";
import store from "@/ducks/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
