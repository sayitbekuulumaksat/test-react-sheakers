import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Cards from "./components/Cards";
import Basket from "./components/Basket";
import Bookmarks from "./components/Bookmarks";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        {/* <Basket /> */}
        <Routes>
          <Route path='/' element={<Cards />} />
          <Route path='basket' element={<Basket />}></Route>
          <Route path='bookmarks' element={<Bookmarks />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
