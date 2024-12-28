import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div>
            <h1>Hello, React!</h1>
            <p>React is a JavaScript library for building user interfaces.</p>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
