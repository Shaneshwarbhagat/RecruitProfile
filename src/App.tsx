import { SnackbarProvider } from "notistack";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CandidateDetail from "./pages/CandidateDetail";
import PrivateRoute from "./component/PrivateRoute";
import { Provider } from "react-redux";
import store from "./state-management/store";

function App() {
  return (
    <>
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route element={<PrivateRoute />}>
                <Route path="/" element={<CandidateDetail />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Provider>
      </SnackbarProvider>
    </>
  );
}

export default App;
