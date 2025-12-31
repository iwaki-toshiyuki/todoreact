import "./styles.css";
import { useState } from "react";

export const Todo = () => {
    //入力された文字列を保持するためのuseState
    const [todoText, setTodoText] = useState("");

    //useStateで未完了のTodoリストと完了したTodoリストを管理
    const [incompleteTodos, setIncompleteTodos] = useState(["Todoです1", "Todoです2"]);
    const [completeTodos, setCompleteTodos] = useState(["Todoでした1", "Todoでした2"]);

    //入力された文字列を取得するためのイベント関数
    const onChangeTodoText = (event) => setTodoText(event.target.value);

    //追加ボタンが押されたときのイベント関数
    const onClickAdd = () => {
        if (todoText === "") return;
        const newTodos = [...incompleteTodos, todoText];
        setIncompleteTodos(newTodos);
        setTodoText("");
    }

    //削除ボタンが押されたときのイベント関数
    const onClickDelete = (index) => {
        const newTodos = [...incompleteTodos];
        //spliceメソッドで指定したindexの要素を配列から削除(1は1つ削除することを意味)
        newTodos.splice(index, 1);
        setIncompleteTodos(newTodos);
    }

    return (
        <>
            <div className="input-area">
                <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText} />
                <button onClick ={onClickAdd}>追加</button>
            </div>
            <div className="incomplete-area">
                <p className="title">未完了のTodo</p>
                <ul>
                    {/* 未完了のTodoリストをmap関数を用いて表示 */}
                    {/* index は配列内での位置を表し、イベント処理（削除・完了など）で対象要素を特定するために使用する*/}
                    {incompleteTodos.map((todo,index) => (
                            // key は React がリスト要素を一意に識別し、追加・削除・並び替え時の差分更新を正しく行うために必要
                            <li key={todo}>
                                <div className="list-row">
                                    <p className="todo-item">{todo}</p>
                                    <button>完了</button>
                                    {/* 削除ボタンが押されたときにonClickDelete関数を呼び出し、indexを引数として渡す */}
                                    <button onClick={() => onClickDelete(index)}>削除</button>
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