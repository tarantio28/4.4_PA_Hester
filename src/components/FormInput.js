import React, { useState } from 'react';

const FormInput = () => {
    const [text, setText] = useState('');

    const handleChange = (e) => setText(e.target.value);

    return (
        <div>
            <input type="text" value={text} onChange={handleChange} />
            <p>Entered Text: {text}</p>
        </div>
    );
};

export default FormInput;
