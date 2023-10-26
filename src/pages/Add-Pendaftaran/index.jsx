import CreatePendaftaran from "../../components/Create-Pendaftaran"
import Sidebar from "../../components/Sidebar"
import Topbar from "../../components/Topbar"
import { addPendaftaran } from "../../pendaftaranSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function AddPendaftaran() {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const handleTambahPendaftaran = (newPendaftaran) => {
        dispatch(addPendaftaran(newPendaftaran));
        navigate('/pendaftaran');
    };

    return(
        <>
            <div className="dashboard">
                <div className="content">
                <Sidebar />
                <main>
                    <Topbar />
                    <CreatePendaftaran addPendaftaran={handleTambahPendaftaran} />
                </main>
                </div>
            </div>
        </>
    )
}

export default AddPendaftaran