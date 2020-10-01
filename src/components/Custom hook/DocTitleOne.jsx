import React, {useState, useEffect} from 'react'

export default function DocTitleOne() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Count - ${count}`
    }, [count])

    return (
        <div>
            <button onClick={()=> setCount(count + 1)}> Count - {count}</button>
        </div>
    )
}
