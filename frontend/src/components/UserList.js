import CustomUserItem from './UserItem'

const CustomUserList = ({users}) => {
  return (
    <table>
      <thead>
      <tr>
        <th>Username</th>
        <th>First name</th>
        <th>Last name</th>
        <th>Email</th>
      </tr>
      </thead>
      <tbody>
      {users.map((user) => <CustomUserItem user={user} key={user.email}/>)}
      </tbody>
    </table>
  )
};

export default CustomUserList;