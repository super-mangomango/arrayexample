import { Route, Routes } from 'react-router-dom';
import List from "./List";
import ExampleOne from "./ExampleOne";
import Params from "./Params"
import Hooks from "./Hooks"

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<List/>}/>
            <Route path="/array" element={<ExampleOne/>}/>
            <Route path="/params" element={<Params/>}/>
            <Route path="/hooks" element={<Hooks />} />
        </Routes>
    );
};

export default App;
