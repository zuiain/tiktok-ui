import { Route, Routes } from 'react-router-dom';
import Upload from '~/pages/Upload';

function UploadRoutes() {
    return (
        <Routes>
            <Route index element={<Upload />}></Route>
        </Routes>
    );
}

export default UploadRoutes;
