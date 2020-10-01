import React from 'react'
import useInput from './useInput'

export default function UserForm() {
    
    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')

    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')

    const submitHandler = (e) => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First name</label>                    
                    {/* <input type="text" value={firstName} onChange={ e => setFirstName(e.target.value)}/> */}
                    <input type="text" {...bindFirstName}/>
                </div>
                <div>
                    <label>Last name</label>
                    {/* <input type="text" value={lastName} onChange={ e => setLastName(e.target.value)}/> */}
                    <input type="text" {...bindLastName}/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}
