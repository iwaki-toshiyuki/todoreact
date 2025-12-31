import React from "react";

//スタイルをオブジェクトで定義
const style = {
  backgroundColor: "#c6e5d9",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px",
};

//InputTodoをpropsで受け取る
export const InputTodo = (props) => {
  //propsの分割代入
  //disabled(活性・非活性) のpropsを追加
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
        <input disabled = {disabled} placeholder="TODOを入力" value={todoText} onChange={onChange} />
        <button disabled = {disabled} onClick ={onClick}>追加</button>
    </div>
  );
};
