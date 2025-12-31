import React from "react";

//CompleteTodosをpropsで受け取る
export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div className="complete-area">
      <p className="title">完了したTodo</p>
      <ul>
          {/* //完了したTodoリストをmap関数を用いて表示 */}
          {todos.map((todo,index) => (
              <li key={todo}>
                  <div className="list-row">
                      <p className="todo-item">{todo}</p>
                      <button onClick={() => onClickBack(index)}>戻す</button>
                  </div>
              </li>
          ))}
      </ul>
    </div>
  );
};
