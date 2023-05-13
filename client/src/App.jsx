import Footer from "./components/Footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import MyGigs from "./pages/myGigs/MyGigs";
import Gigs from "./pages/gigs/Gigs";
import Order from "./pages/orders/Order";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import Add from "./pages/add/Add";
import Gig from "./pages/gig/Gig";
import "./App.scss";

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/myGigs" element={<MyGigs />} />
            <Route path="/gig/:id" element={<Gig />} />
            <Route path="/gigs" element={<Gigs />} />

            <Route exact path="/orders" element={<Order />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/messages" element={<Messages />} />

            <Route path="/message/:id" element={<Message />} />

            <Route path="/add" element={<Add />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
