import "./styles.css";

export const Todo = () => {
    return (
        <>
            <div className="input-area">
                <input placeholder="TODOを入力" />
                <button>追加</button>
            </div>
            <div className="incomplete-area">
                <p className="title">未完了のTodo</p>
                <ul>
                    <li>
                        <div className="list-row">
                            <p className="todo-item">Todoです</p>
                            <button>完了</button>
                            <button>削除</button>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="complete-area">
                <p className="title">完了したTodo</p>
                <ul>
                    <li>
                        
                        <div className="list-row">
                            <p className="todo-item">完了したTodoです</p>
                            <button>戻す</button>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
}