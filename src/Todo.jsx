import "./styles.css";
import { useState } from "react";

export const Todo = () => {
    //useStateの初期化
    const [incompleteTodos, setIncompleteTodos] = useState(["Todoです1", "Todoです2"]);
    const [completeTodos, setCompleteTodos] = useState(["Todoでした1", "Todoでした2"]);

    return (
        <>
            <div className="input-area">
                <input placeholder="TODOを入力" />
                <button>追加</button>
            </div>
            <div className="incomplete-area">
                <p className="title">未完了のTodo</p>
                <ul>
                    {/* //未完了のTodoリストをmap関数を用いて表示 */}
                    {incompleteTodos.map((todo) => (
                            // key は React がリスト要素を一意に識別し、追加・削除・並び替え時の差分更新を正しく行うために必要
                            <li key={todo}>
                                <div className="list-row">
                                    <p className="todo-item">{todo}</p>
                                    <button>完了</button>
                                    <button>削除</button>
                                </div>
                            </li>
                    ))}
                </ul>
            </div>
            <div className="complete-area">
                <p className="title">完了したTodo</p>
                <ul>
                    {/* //完了したTodoリストをmap関数を用いて表示 */}
                    {completeTodos.map((todo) => (
                        <li key={todo}>
                            <div className="list-row">
                                <p className="todo-item">{todo}</p>
                                <button>戻す</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}