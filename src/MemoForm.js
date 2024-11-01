import React, { useState } from 'react';

function MemoForm({ addMemo }) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            addMemo(input);
            setInput('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="メモを入力"
            />
            <button type="submit">追加</button>
        </form>
    );
}

export default MemoForm;
