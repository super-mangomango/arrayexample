import { Route, Routes } from 'react-router-dom';
import List from "./List";
import ExampleOne from "./ExampleOne";
import Params from "./Params"
import Hooks from "./Hooks"
import Observer from  "./Observer"
import ObserverHook from "./ObserverHook"

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<List/>}/>
            <Route path="/array" element={<ExampleOne/>}/>
            <Route path="/params" element={<Params/>}/>
            <Route path="/hooks" element={<Hooks />} />
            <Route path="/observer" element={<Observer />} />
            <Route path="/observer-hook" element={<ObserverHook />} />
        </Routes>
    );
};

export default App;
