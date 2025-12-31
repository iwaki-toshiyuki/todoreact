import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";
import "./styles.css";
import { useState } from "react";

export const Todo = () => {
    //入力された文字列を保持するためのuseState
    const [todoText, setTodoText] = useState("");

    //useStateで未完了のTodoリストと完了したTodoリストを管理
    const [incompleteTodos, setIncompleteTodos] = useState([]);
    const [completeTodos, setCompleteTodos] = useState([]);

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

    //完了ボタンが押されたときのイベント関数
    const onClickComplete = (index) => {
        //未完了のTodoリストから指定したindexの要素を削除
        const newIncompleteTodos = [...incompleteTodos];
        newIncompleteTodos.splice(index, 1);

        //完了したTodoリストに追加
        const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
        setIncompleteTodos(newIncompleteTodos);
        setCompleteTodos(newCompleteTodos);
    }

    //戻すボタンが押されたときのイベント関数
    const onClickBack = (index) => {
        //完了したTodoリストから指定したindexの要素を削除
        const newCompleteTodos = [...completeTodos];
        newCompleteTodos.splice(index, 1);

        //未完了のTodoリストに追加
        const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
        setCompleteTodos(newCompleteTodos);
        setIncompleteTodos(newIncompleteTodos);
    }

    //未完了のTodoが5個以上の場合に追加ボタンを非活性化するための変数
    const isMaxLimitIncompleteTodos = incompleteTodos.length >= 5;

    //コンポーネントを用いて必要なpropsを渡して表示
    return (
        <>
            {/* InputTodoコンポーネントに必要なpropsを渡す */}
            <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} disabled={isMaxLimitIncompleteTodos}/>

            {/* 未完了のTodoが5個以上の場合に警告メッセージを表示 */}
            {isMaxLimitIncompleteTodos && (
                <p style={{color:"red"}}>登録できるTodoは5個までです。</p>
            )}   
            
            {/* IncompleteTodosコンポーネントに必要なpropsを渡す */}
            <IncompleteTodos todos={incompleteTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete} />

            {/* CompleteTodosコンポーネントに必要なpropsを渡す */}
            <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
        </>
    );
};