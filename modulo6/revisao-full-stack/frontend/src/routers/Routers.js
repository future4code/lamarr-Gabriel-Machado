import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EndPage from '../pages/EndPage';
import Home from '../pages/Home';

const Routers = () => {
    return <BrowserRouter>
        <Routes>
            <Route index element={<Home/>} />
            <Route path='/end-page' element={<EndPage/>} />
        </Routes>
    </BrowserRouter>
}
export default Routers;