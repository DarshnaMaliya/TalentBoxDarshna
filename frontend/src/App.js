import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Signin from "./components/Signin";
import Home from "./components/Home";
import Courses from "./components/Courses";

function App() {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  return (
    <div style={{backgroundColor: "#D6CFC7"}}>
    <header>
      <Header />
    </header>
    <main>
     <Routes>
     <Route path="" element={ <Home/> } /> 
     <Route path="/signin" element={ <Signin />} />
     <Route path="/courses" element={ <Courses />} />
     </Routes>
    </main>
    </div>
  );
}

export default App;
