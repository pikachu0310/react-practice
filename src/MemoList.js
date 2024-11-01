import React from "react";

function MemoList({ memos, onEdit }) {
  return (
    <div>
      <h2>メモ一覧</h2>
      <ul>
        {memos.map((memo) => (
          <li key={memo.id} onClick={() => onEdit(memo)}>
            {memo.title || "（無題）"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MemoList;
