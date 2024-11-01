import React, { useState } from 'react';
import MemoList from './MemoList';
import MemoForm from './MemoForm';
import './App.css';

function App() {
    const [memos, setMemos] = useState([]);

    const addMemo = (memo) => {
        setMemos([...memos, memo]);
    };

    return (
        <div className="App">
            <h1>メモアプリ</h1>
            <MemoForm addMemo={addMemo} />
            <MemoList memos={memos} />
        </div>
    );
}

export default App;
