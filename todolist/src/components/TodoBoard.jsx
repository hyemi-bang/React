import TodoItem from "./TodoItem";

function TodoBoard(props){// props를 받아올 수 있게 되었고 이 안에 todoList가 나올것이다.
   // console.log("todoBoard", props.todoList);
 
    return(
        <div>
            <h1>Todo List</h1>
            {props.todoList.map((item)=>
             <TodoItem 
             key={item} 
             item={item} 
             onDelete={props.onDelete}/>)}
            {/* map은 array한 아이템을 하나하나 가져와서 반환해준다 */}
        </div>
    );
}

export default TodoBoard;