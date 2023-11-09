import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

function DefaultLayout() {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="Content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
