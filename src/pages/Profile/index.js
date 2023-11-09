import { useParams } from 'react-router-dom';

function Profile() {
    const { id } = useParams();
    return (
        <>
            <h1>Profile page</h1>
            {id && <h2>User id - {id}</h2>}
        </>
    );
}

export default Profile;
