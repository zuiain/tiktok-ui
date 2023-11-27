import { Routes, Route } from 'react-router-dom';
import { FeedbackPage } from '~/pages/';

function FeedbackRoutes() {
    return (
        <Routes>
            <Route index element={<FeedbackPage />}></Route>
        </Routes>
    );
}

export default FeedbackRoutes;
