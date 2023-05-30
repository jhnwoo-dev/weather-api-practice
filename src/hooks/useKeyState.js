import { useState, useEffect } from 'react';

export function useKeyboardState() {
    const [lastKeyPressed, setLastKeyPressed] = useState("nothing");

    useEffect(() => {
        const onKeyPress = (e) => {
            console.log(e);
            setLastKeyPressed(e.key)
        }
        document.addEventListener("keydown", onKeyPress)

        return () => {
            document.removeEventListener("keydown", onKeyPress)
        }
    }, [])

    return lastKeyPressed
}

export function useKeyboardListState() {
    const [listOfKeyPresses, setListOfKeyPresses] = useState([]);

    useEffect(() => {
        const onKeyPress = (e) => {
            setListOfKeyPresses(previousListOfKeyPresses => [e.key, ...previousListOfKeyPresses]);
        }
        document.addEventListener("keydown", onKeyPress);

        return () => {
            document.removeEventListener("keydown", onKeyPress)
        }
    }, [])
    return listOfKeyPresses
}