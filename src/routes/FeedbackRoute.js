import { Routes, Route } from 'react-router-dom';
import FeedbackPage from '~/pages/Feedback';

function FeedbackRoutes() {
    return (
        <Routes>
            <Route index element={<FeedbackPage />}></Route>
        </Routes>
    );
}

export default FeedbackRoutes;
