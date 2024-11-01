import React from 'react';

function MemoList({ memos }) {
    return (
        <div>
            <h2>メモ一覧</h2>
            <ul>
                {memos.map((memo, index) => (
                    <li key={index}>{memo}</li>
                ))}
            </ul>
        </div>
    );
}

export default MemoList;
