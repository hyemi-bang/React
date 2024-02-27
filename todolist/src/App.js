import React,{useState} from 'react';
import './App.css';
import TodoBoard from './components/TodoBoard';

// 인풋창이 있고 버튼이 있다
// 인풋창에 값을 입력하고 버튼을 클릭하면 아이템이 추가된다
// 아이템 삭제버튼을 누르면 삭제가 가능하다

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList]=useState([]);

  const addItem = () => {
    if (inputValue.trim() !== '') {
      setTodoList([...todoList, inputValue.trim()]);
      setInputValue('');
    }
  };

  const deleteItem=(itemToDelete)=>{
    setTodoList(todoList.filter(item => item !== itemToDelete));
  };

  const handleKeyDown =(e)=>{
    if(e.key === 'Enter'){
      addItem();
    }
  };

  return (
    <main>
      <div className='input-container'>
    <input value={inputValue} type="text" onChange={(e)=>setInputValue(e.target.value)}  
    //  (e)=>console.log(e.target.value)
    onKeyDown={handleKeyDown}/>
    <button className='addBtn' onClick={addItem}>추가</button>
    </div>
    <TodoBoard todoList={todoList} onDelete={deleteItem}/> 
    {/* Appdl 가지고 있는 todoList를 todoBoard에게 전달하기 위해서는 
    props를 사용해야한다 */}
    </main>
  );
}

export default App;
