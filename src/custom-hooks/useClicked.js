import { useState, useRef, useEffect } from 'react'

export function useClicked() {
    const [value, setValue] = useState(false)
    const ref = useRef(null)
    const handleMouseDown = () => setValue(true)
    const handleMouseUp = () => setValue(false)
    useEffect(
        () => {
            const node = ref.current
            if (node) {
                node.addEventListener('mousedown', handleMouseDown)
                node.addEventListener('mouseup', handleMouseUp)
                return () => {
                    node.removeEventListener('mousedown', handleMouseDown)
                    node.removeEventListener('mouseup', handleMouseUp)
                }
            }
        },

        // eslint-disable-next-line react-hooks/exhaustive-deps
        [ref.current] // Recall only if ref changes
    )
    return [ref, value]
}
