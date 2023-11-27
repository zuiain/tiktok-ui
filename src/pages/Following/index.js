import { useParams } from 'react-router-dom';

function Following() {
    const { slug } = useParams();
    return <h2>Following Page {slug && `- ${slug}`}</h2>;
}

export default Following;
