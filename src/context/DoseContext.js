import { useState, createContext } from 'react'

// NOTE: Firebase
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase.config'

const DoseContext = createContext()

export function DoseProvider({ children }) {
    const [dose, setDose] = useState(null)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)

    const handleClick = () => {
        // NOTE: Firebase
        // update fetched dose in firestore database with new dose
        const newDose = new Date()
        const updateDose = async () => {
            await updateDoc(doc(db, 'doses', 'nr0cBRPQXq9lWT2hNL08'), {
                date: newDose.toString(),
            })
        }
        updateDose()
    }

    return (
        <DoseContext.Provider
            value={{
                dose,
                setDose,
                hours,
                setHours,
                minutes,
                setMinutes,
                handleClick,
            }}
        >
            {children}
        </DoseContext.Provider>
    )
}

export default DoseContext
