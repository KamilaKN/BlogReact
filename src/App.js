import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Header/Header"
import Hello from "./components/Hello/Hello";

function App() {
    return (
        <div className="App">
            <Header/>
            <Hello name="kamila" age="18" hobbi="dance" />
            <Hello name="ainazik" age="15" hobbi="sport" />
            <Footer/>
        </div>
    );
}

export default App;
