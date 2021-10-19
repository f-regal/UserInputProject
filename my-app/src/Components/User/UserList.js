import UserItem from './UserItem'

const UserList = (props) => {
    const listOfInputs = props.inputs;

    return(<div>
        <ul>
            {listOfInputs.map(input => <UserItem />)}
        </ul>
    </div>);
    
}

export default UserList;
