import React, { useState } from "react";
import MemoList from "./MemoList";
import MemoEditor from "./MemoEditor";
import "./App.css";

function App() {
  const [memos, setMemos] = useState(() => {
    const storedMemos = localStorage.getItem("memos");
    return storedMemos ? JSON.parse(storedMemos) : [];
  });
  const [activeMemo, setActiveMemo] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const updateLocalStorage = (updatedMemos) => {
    localStorage.setItem("memos", JSON.stringify(updatedMemos));
  };

  const handleAddMemo = () => {
    const newMemo = { id: crypto.randomUUID(), title: "新規メモ", content: "" };
    const updatedMemos = [newMemo, ...memos];
    setMemos(updatedMemos);
    updateLocalStorage(updatedMemos);
    setActiveMemo(newMemo);
    setIsEditing(true);
  };

  const handleSaveMemo = (updatedMemo) => {
    if (!updatedMemo.title.trim() || !updatedMemo.content.trim()) {
      alert("タイトルと内容を入力してください。");
      return;
    }
    const updatedMemos = memos.map((memo) =>
      memo.id === updatedMemo.id ? updatedMemo : memo,
    );
    setMemos(updatedMemos);
    updateLocalStorage(updatedMemos);
    setIsEditing(false);
  };

  const handleDeleteMemo = (id) => {
    const updatedMemos = memos.filter((memo) => memo.id !== id);
    setMemos(updatedMemos);
    updateLocalStorage(updatedMemos);
    setActiveMemo(null);
    setIsEditing(false);
  };

  const handleEditMemo = (memo) => {
    setActiveMemo(memo);
    setIsEditing(true);
  };

  return (
    <div className="App">
      <h1>シンプルなメモアプリ (React練習用)</h1>
      <button onClick={handleAddMemo}>＋ 新規メモ</button>
      {isEditing ? (
        <MemoEditor
          memo={activeMemo}
          onSave={handleSaveMemo}
          onDelete={handleDeleteMemo}
        />
      ) : (
        <MemoList memos={memos} onEdit={handleEditMemo} />
      )}
    </div>
  );
}

export default App;
