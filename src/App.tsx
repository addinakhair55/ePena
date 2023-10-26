import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PendaftaranDetail from "./pages/Detail-Pendaftaran";
import Login from "./pages/Login/Login"
import Registration from "./pages/Registration/Registration"
import { AuthProvider } from "./components/Context/AuthContext";
import PrivateRoute from "./components/PrivateRoute"
import OpenAI from "./pages/ChatAi/ChatAI";
import Pendaftaran from "./pages/Pendaftaran";
import Dashboard from "./pages/Dashboard";
import AddPendaftaran from "./pages/Add-Pendaftaran";

function App() {
  return (
    <>
      <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route path="/pendaftaran" element={<Pendaftaran />} />
            <Route path="/add-pendaftaran" element={<AddPendaftaran />} />
            <Route path="/pendaftaran/:namaLengkap" element={<PendaftaranDetail />} />
            <Route path="/openai" element={<OpenAI />} />
          </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
