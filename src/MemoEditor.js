import React, { useState, useEffect } from "react";

function MemoEditor({ memo, onSave, onDelete, isEditable }) {
  const [title, setTitle] = useState(memo.title);
  const [content, setContent] = useState(memo.content);

  useEffect(() => {
    setTitle(memo.title);
    setContent(memo.content);
  }, [memo]);

  const handleSave = () => {
    if (onSave) {
      onSave({ ...memo, title, content });
    }
  };

  return (
    <div className="MemoEditor">
      <h2>メモの詳細</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="タイトル"
        readOnly={!isEditable}
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="メモの内容"
        readOnly={!isEditable}
      ></textarea>
      {isEditable && <button onClick={handleSave}>保存</button>}
      {isEditable && <button onClick={() => onDelete(memo.id)}>削除</button>}
    </div>
  );
}

export default MemoEditor;
