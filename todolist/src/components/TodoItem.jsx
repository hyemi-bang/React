function TodoItem(props){
    const handleDelete = () => {
        props.onDelete(props.item);
    };

    return(
        <div className="todo-item">
            {props.item}
            <button onClick={handleDelete}>삭제</button>
        </div>
    );
}
export default TodoItem;