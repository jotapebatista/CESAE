import data from '../mockdata/data.json'

let toDoItems = data
const ToDoList = () => {
    return (
        <ul>
            {toDoItems.map(({id, content, complete}) => (
                <Item id={id} content={content} complete={complete}/>
            ))}
        </ul>
    );
}


export default ToDoList