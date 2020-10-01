import React, {useContext} from 'react'
import { CountContext } from '../../../App'

export default function CompF() {

    const countContext = useContext(CountContext)

    return (
        <div>
        <p>Component F = {countContext.countState}</p>
        <button onClick={ () => countContext.countDispatch('increment')}>Increment</button>
        <button onClick={ () => countContext.countDispatch('decrement')}>Decrement</button>
        <button onClick={ () => countContext.countDispatch('reset')}>Reset</button>
    </div>
    )
}
