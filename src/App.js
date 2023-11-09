import { useRoutes } from 'react-router-dom';
import { publicRoutes } from '~/routes';

function App() {
    const public_routes = useRoutes(publicRoutes);

    return <div className="App">{public_routes}</div>;
}

export default App;
