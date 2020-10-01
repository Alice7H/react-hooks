import React, {useState, useEffect} from 'react'

export default function IntervalHookCounter() {

    const [count, setCount] = useState(0)

    useEffect( () => {
        // use function inside to don't forget the props as a dependency 
        function doSomething()  {
            // console.log(someProp)
        }

        doSomething()

        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])  // [someProp])  use count here or use prevCount in setCount()

    const tick = () => {
        setCount(prevCont => prevCont + 1)
    }

    return (
        <div>
            <p>Uso com dependência incorreta</p>
            <h1>Count {count}</h1>
        </div>
    )
}
