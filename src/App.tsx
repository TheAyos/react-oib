import { useState, useEffect } from "react";
import Header from "./components/Header";
import ResultsInput from "./components/ResultsInput";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    const d = new Date();
    const schoolYear = d.getMonth() >= 8 ? d.getFullYear() + 1 : d.getFullYear();
    useEffect(() => { document.title = `Simulateur bac OIB ${schoolYear}`; }, []); /* prettier-ignore */

    return (
        <div className="App">
            <Header schoolYear={schoolYear} />

            <ResultsInput />

            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
            </div>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
        </div>
    );
}

export default App;
