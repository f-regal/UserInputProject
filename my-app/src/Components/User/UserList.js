import UserItem from './UserItem'

const UserList = (props) => {
    return(<div>
        <ul>
            {props.items.map(item => <UserItem key={item.id} >
                {`${item.text} (${item.age} years old)`}
                </UserItem >)}
        </ul>
    </div>);
    
}

export default UserList;
