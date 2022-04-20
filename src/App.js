import "./assets/scss/light.scss";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { SidebarProvider } from "./contexts/SidebarContext";
import { LayoutProvider } from "./contexts/LayoutContext";

import Tables from "./components/Table";
import Sidebar from "./components/sidebar/Sidebar";
import NavbarComponent from "./components/navbar/NavbarSimple";

const App = () => {
  return (
    <Provider store={store}>
          <SidebarProvider>
          <LayoutProvider>
              <div className="wrapper">
                <Sidebar />
                <div class="main">
                  <NavbarComponent />
                  <main class="content">
                    <Tables />
                  </main>
                </div>
              </div>
          </LayoutProvider>
          </SidebarProvider>
    </Provider>
  );
}

export default App;
