import { useState } from "react"

const ListRender = () => {

    const [list] = useState(["Matheus", "Pedro", "Josias"])

    const [users, setUsers] = useState([
        { id: 1, name: "Matheus", age: 31 },
        { id: 2, name: "Pedro", age: 20 },
        { id: 3, name: "joão", age: 19 },
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) =>
            prevUsers.filter((user) => randomNumber !== user.id))
    }

    return (
        <div>
            {/* Render sem key */}
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            {/* Render com key */}
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.age} anos</li>
                ))}
            </ul>
            {/* Previous state */}
            <button onClick={deleteRandom}>Delete ranom user</button>
        </div>
    )
}

export default ListRender
