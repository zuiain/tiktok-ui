import { useRoutes } from 'react-router-dom';
import { publicRoutes } from '~/routes';

function App() {
    const _publicRoutes = useRoutes(publicRoutes);

    return <div className="App">{_publicRoutes}</div>;
}

export default App;
