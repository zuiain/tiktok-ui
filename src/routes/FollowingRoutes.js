import { Routes, Route } from 'react-router-dom';
import Following from '~/pages/Following';
function FollowingRoutes() {
    return (
        <>
            <Routes>
                <Route index element={<Following />}></Route>
                <Route path="/:slug" element={<Following />}></Route>
            </Routes>
        </>
    );
}

export default FollowingRoutes;
