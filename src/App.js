import "./assets/scss/light.scss";

import { Alert } from "react-bootstrap";

import { FiBell } from "react-icons/fi";

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

import Tables from "./components//tables/Tables";
import Sidebar from "./components/sidebar/Sidebar";
import NavbarComponent from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import Modals from "./components/ui/Modals";
import TabsComponent from "./components/ui/Tabs";
import Alerts from "./components/ui/Alerts";
// import Cards from "./components/ui/Cards";
// import CarouselComponent from "./components/ui/Carousel";

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
                    <Alert variant="danger" dismissible>
                      <div className="alert-icon">
                        <FiBell fixedWidth />
                      </div>
                      <div className="alert-message">
                        <strong>Hello there!</strong> This has been updated with
                        Modals, Tabs & Alerts
                      </div>
                    </Alert>
                    <Tables />
                    <Modals />
                    <TabsComponent />
                    <Alerts />
                    {/* <Cards /> */}
                    {/* <CarouselComponent /> */}
                  </main>
                  <Footer />
                </div>
              </div>
              {/* <AuthProvider>{content}</AuthProvider> */}
            </LayoutProvider>
          </SidebarProvider>
        </ThemeProvider>
      </Provider>
    </HelmetProvider>
  );
};

export default App;
