import { Route, Routes } from 'react-router-dom';
import LivePage from '~/pages/Live';

function LiveRoute() {
    return (
        <Routes>
            <Route index element={<LivePage />}></Route>
        </Routes>
    );
}

export default LiveRoute;
