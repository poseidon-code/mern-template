import { useEffect } from 'react';

const App = () => {
    useEffect(() => {
        fetch(process.env.REACT_APP_BACKEND)
            .then((res) => res.json())
            .then((data) => console.log(data));
    }, []);

    return (
        <div className='App'>
            <h1>Hello world ! 😪</h1>
        </div>
    );
};

export default App;
