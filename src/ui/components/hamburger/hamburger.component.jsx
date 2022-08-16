import './hamburger.component.styles.css'
import { useEffect, useState } from 'react'

export function Hamburger() {
    const [isHamburguerClicked, setIsHamburguerClicked] = useState(false)

    useEffect(() => {
        const nav = document.getElementById("nav")
        if (isHamburguerClicked) {
            nav.style.display = "flex"
        }
    }, [isHamburguerClicked])

    return (
        <button className='header-nav-hamburger' onClick={() => {
            setIsHamburguerClicked(
                currentValue => !currentValue
            )
        }}>H</button>
    )
}