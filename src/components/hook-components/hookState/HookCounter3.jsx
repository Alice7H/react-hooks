import React, {useState} from 'react'

export default function HookCounter3() {

    const [name, setName] = useState({firstName: '', lastName: ''})
    
    return (
        <form>
            {/* useState with object */}
            <p> Usa-se ... como um operador 'spread' para passar todo o objeto  </p>
            <input type="text" value={name.firstName} onChange={ e => setName({...name, firstName: e.target.value})}/>
            <input type="text" value={name.lastName} onChange={ e => setName({...name, lastName: e.target.value})}/>
            <h2>Your first name is - {name.firstName}</h2>
            <h2>Your last name is - {name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </form>
    )
}
