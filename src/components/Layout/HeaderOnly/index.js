import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

function HeaderOnly() {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="Content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default HeaderOnly;
