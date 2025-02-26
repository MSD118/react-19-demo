import React, { useState } from 'react';
import './text-input.d.ts' // Only need to import the TS file
import './text-input.ts'; // Only need to import the TS file
import './text-input.js'; // Only need to import the JS file
const UseWebComponentDemo = () => {
    const [value, setValue] = useState('Hi');
    return (
        <div>
            <h1>Use Web Component Demo</h1>
            <p>{value}</p>
            <text-input
                value={value}
                oninputUpdate={(event: CustomEvent<{ value: string }>) => {
                    console.log(event.detail.value);
                    setValue(event.detail.value);
                }}
            />
        </div>
    );
}

export default UseWebComponentDemo;