import "./App.style";
import { AppWrapper } from "./App.style";
import { Header } from "./containers/header/Header";
import Sidebar from "./containers/sidebar/Sidebar";
import MarketPlace from "./pages/MarketPlace";

function App() {
  return (
    <AppWrapper>
      <Sidebar />
      <div>
        <Header />
        <MarketPlace />
      </div>
    </AppWrapper>
  );
}

export default App;
