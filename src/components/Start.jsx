import { useState, useEffect } from 'react'
import '../css/start.scss'

function Start({ setState }) {

    const Add = () => {
        setState(1);
    }

    return (
        <>
            <h1>Welcome</h1>
            <button onClick={Add}>Add</button>
        </>
    )
}

export default Start