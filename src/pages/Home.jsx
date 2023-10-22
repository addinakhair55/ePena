import LandingPage from "../components/LandingPage";

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
            <Main />
        </div>
    )
}

export default Home;