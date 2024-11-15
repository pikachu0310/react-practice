import React from "react";
import PropTypes from "prop-types";
import { useAuth } from "./AuthContext";

function MemoEditor({ memo, onSave, onDelete }) {
  const { isLoggedIn } = useAuth();
  const [title, setTitle] = React.useState(memo.title);
  const [content, setContent] = React.useState(memo.content);

  const handleSave = () => {
    if (!isLoggedIn) return;
    onSave({ ...memo, title, content });
  };

  const handleDelete = () => {
    if (!isLoggedIn) return;
    onDelete(memo.id);
  };

  return (
    <div className="memo-editor">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={!isLoggedIn}
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        disabled={!isLoggedIn}
      />
      <button onClick={handleSave} disabled={!isLoggedIn}>
        保存
      </button>
      <button onClick={handleDelete} disabled={!isLoggedIn}>
        削除
      </button>
    </div>
  );
}

MemoEditor.propTypes = {
  memo: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default MemoEditor;
