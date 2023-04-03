import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello/Hello";
import Hobby from "./components/Hobby/Hobby";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Hello name="Kanyshai" age="25" />
            <Hobby hobby="do makeup" />
            <Hello name="Kamila" age="18" />
            <Hobby hobby="play volleyball" />
            <Hello name="Kairat" age="13" />
            <Hobby hobby="boxing" />
            <Footer/>
        </div>
    );
}

export default App;

// Future Slices
// Бем - мотодология
// Компонент - функция, которая возвращяет JSX(HTML + JS) разметку
// Декомпозиция - разделение кода компонента