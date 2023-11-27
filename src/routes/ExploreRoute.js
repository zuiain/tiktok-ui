import { Routes, Route } from 'react-router-dom';
import { HomePage } from '~/pages/';

function ExploreRoute() {
    return (
        <Routes>
            <Route index element={<HomePage />}></Route>
        </Routes>
    );
}

export default ExploreRoute;
