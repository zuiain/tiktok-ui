import Profile from '~/pages/Profile';
import { Routes, Route } from 'react-router-dom';

function ProfileRoutes() {
    return (
        <>
            <Routes>
                <Route index element={<Profile />}></Route>
                <Route path="/:id" element={<Profile />}></Route>
            </Routes>
        </>
    );
}

export default ProfileRoutes;
