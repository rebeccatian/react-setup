import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

const HelloWorld = () => {
    return (
        <h1>
            Hello World
        </h1>
    );
}

root.render(<HelloWorld />);