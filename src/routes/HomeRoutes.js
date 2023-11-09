import { Route, Routes } from 'react-router-dom';
import Home from '~/pages/Home';

function HomeRoutes() {
    return (
        <>
            <Routes>
                <Route index element={<Home />}></Route>
            </Routes>
        </>
    );
}

export default HomeRoutes;
