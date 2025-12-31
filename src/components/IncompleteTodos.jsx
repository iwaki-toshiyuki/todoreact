import React from "react";

//IncompleteTodosをpropsで受け取る
export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
        <p className="title">未完了のTodo</p>
        <ul>
            {/* 未完了のTodoリストをmap関数を用いて表示 */}
            {/* index は配列内での位置を表し、イベント処理（削除・完了など）で対象要素を特定するために使用する*/}
            {todos.map((todo,index) => (
                    // key は React がリスト要素を一意に識別し、追加・削除・並び替え時の差分更新を正しく行うために必要
                    <li key={todo}>
                        <div className="list-row">
                            <p className="todo-item">{todo}</p>
                            <button onClick={() => onClickComplete(index)}>完了</button>
                            {/* 削除ボタンが押されたときにonClickDelete関数を呼び出し、indexを引数として渡す */}
                            <button onClick={() => onClickDelete(index)}>削除</button>
                        </div>
                    </li>
            ))}
        </ul>
    </div>
  );
};
