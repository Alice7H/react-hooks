import React, { useState, useEffect} from 'react'

export default function HookCounter5() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
 
    useEffect(() => {
        console.log('useEffect - updating document title');
        document.title = `You clicked ${count} times`
    }, [count])

    return (
        <div>
               <p> usa o hook userEffect after render</p>
               <input type="text" value={name} onChange={ e => setName(e.target.value)}/>
                <button onClick={ () => setCount(count + 1)}>
                    Click {count} times
                </button>
        </div>
    )
}
