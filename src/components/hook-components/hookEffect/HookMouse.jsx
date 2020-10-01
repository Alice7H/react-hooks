import React, { useState, useEffect} from 'react'

export default function HookCounter6() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = (e) => {
        console.log('mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mouseover', logMousePosition)

        return () => {
            // clean it seems componentWillUnmount
            console.log('component unmounting code')
            window.removeEventListener('mouseover', logMousePosition)
        }   

    }, [])

    return (
        <div>
            Hook X - {x}     Hook Y - {y}
        </div>
    )
}
