import React, { useState } from "react";

function MemoEditor({ memo, onSave, onDelete }) {
  const [title, setTitle] = useState(memo.title);
  const [content, setContent] = useState(memo.content);

  const handleSave = () => {
    onSave({ ...memo, title, content });
  };

  return (
    <div>
      <h2>メモの編集</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="タイトル"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="メモの内容"
      ></textarea>
      <button onClick={handleSave}>保存</button>
      <button onClick={() => onDelete(memo.id)}>削除</button>
    </div>
  );
}

export default MemoEditor;
