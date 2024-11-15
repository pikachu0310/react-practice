import React, { useState, useEffect } from "react";
import MemoList from "./MemoList";
import MemoEditor from "./MemoEditor";
import { useAuth } from "./AuthContext";

function AppContent() {
  const [memos, setMemos] = useState([]);
  const [activeMemo, setActiveMemo] = useState(null);
  const { isLoggedIn, login, logout } = useAuth();

  useEffect(() => {
    const storedMemos = localStorage.getItem("memos");
    if (storedMemos) {
      setMemos(JSON.parse(storedMemos));
    }
  }, []);

  useEffect(() => {
    if (memos.length > 0) {
      localStorage.setItem("memos", JSON.stringify(memos));
    }
  }, [memos]);

  const handleAddMemo = () => {
    if (!isLoggedIn) return;
    const newMemo = { id: Date.now(), title: "新規メモ", content: "" };
    setMemos([newMemo, ...memos]);
    setActiveMemo(newMemo);
  };

  const handleSaveMemo = (updatedMemo) => {
    setMemos(
      memos.map((memo) => (memo.id === updatedMemo.id ? updatedMemo : memo)),
    );
    setActiveMemo(null);
  };

  const handleDeleteMemo = (id) => {
    setMemos(memos.filter((memo) => memo.id !== id));
    setActiveMemo(null);
  };

  const handleEditMemo = (memo) => {
    setActiveMemo(memo);
  };

  return (
    <div className="App">
      <h1>シンプルなメモアプリ (React練習用)</h1>
      {isLoggedIn ? (
        <>
          <button onClick={logout}>ログアウト</button>
          <button onClick={handleAddMemo}>＋ 新規メモ</button>
        </>
      ) : (
        <button onClick={login}>ログイン</button>
      )}
      <div className="content">
        <MemoList memos={memos} onEdit={handleEditMemo} />
        {activeMemo && (
          <MemoEditor
            memo={activeMemo}
            onSave={handleSaveMemo}
            onDelete={handleDeleteMemo}
          />
        )}
      </div>
    </div>
  );
}

export default AppContent;
