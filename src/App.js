import "./assets/scss/light.scss";

//import { useRoutes } from "react-router-dom";
import { Provider } from "react-redux";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { store } from "./redux/store";

import "./i18n";
//import routes from "./myroots";

import { ThemeProvider } from "./contexts/ThemeContext";
import { SidebarProvider } from "./contexts/SidebarContext";
import { LayoutProvider } from "./contexts/LayoutContext";

//import { AuthProvider } from "./contexts/JWTContext";

import Tables from "./components/Table";
import Sidebar from "./components/sidebar/Sidebar";
import NavbarComponent from "./components/navbar/Navbar";
import Footer from "./components/Footer";

const App = () => {
  //const content = useRoutes(routes);

  return (
    <HelmetProvider>
      <Helmet
        titleTemplate="%s | AppStack Playground"
        defaultTitle="InCharge"
      />
      <Provider store={store}>
        <ThemeProvider>
          <SidebarProvider>
            <LayoutProvider>
              <div className="wrapper">
                <Sidebar />
                <div class="main">
                  <NavbarComponent />
                  <main class="content">
                    <Tables />
                  </main>
                  <Footer />
                </div>
              </div>
            </LayoutProvider>
          </SidebarProvider>
        </ThemeProvider>
      </Provider>
    </HelmetProvider>
  );
};

export default App;