import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
// import AddProduct from "./pages/AddProduct";
import ProductDetail from "./pages/PendafataranDetail";
import Login from "./pages/Login"
import Registration from "./pages/Registration"
import { AuthProvider } from "./components/Context/AuthContext";
// import PrivateRoute from "./components/PrivateRoute"
import OpenAI from "./pages/ChatAI";
import Dash from "./pages/Dashboard/Dash";
import Pendaftaran from "./pages/Pendaftaran";
import AddPendaftaran from "./pages/Add-Pendaftaran";

function App() {
  return (
    <>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dash />} />
            <Route path="/pendaftaran" element={<Pendaftaran />} />
            <Route path="/add-pendaftaran" element={<AddPendaftaran />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product/:productName" element={<ProductDetail />} />
            <Route path="/openai" element={<OpenAI />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </>
  );
}

export default App;
