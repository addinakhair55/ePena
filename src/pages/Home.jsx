import Footer from "../components/Footer";
import LandingPage from "../components/LandingPage";
import Navbar from "../components/Navbar";

function Main() {
    return(
        <main>
            <LandingPage/>
        </main>
    )
}
function Home() {
    return(
        <div>
            <Navbar/>
                <Main />
            <Footer/>
        </div>
    )
}

export default Home;