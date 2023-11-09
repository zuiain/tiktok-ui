import { Route, Routes } from 'react-router-dom';
import Search from '~/pages/Search';

function SearchRoutes() {
    return (
        <>
            <Routes>
                <Route index element={<Search />}></Route>
            </Routes>
        </>
    );
}

export default SearchRoutes;
