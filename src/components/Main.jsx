import { useContext, useEffect } from 'react'
import DoseContext from '../context/DoseContext'
import styles from './Main.module.css'
import syringeIconWhite from '../assets/images/syringe-icon-white.png'
import syringeDropIcon from '../assets/images/syringe-drop-icon.png'
import { useHover } from '../custom-hooks/useHover'

// NOTE: Firebase
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase.config'

function Main() {
    // Context variables, functions
    const { dose, setDose, hours, setHours, minutes, setMinutes, handleClick } =
        useContext(DoseContext)

    // get last dose from firestore database at first render or when dose changes
    // and pass date string from firestore to state as new Date object
    useEffect(() => {
        // NOTE: Firebase
        const fetchDose = async () => {
            const querySnapshot = await getDocs(collection(db, 'doses'))
            querySnapshot.forEach((doc) => {
                setDose(new Date(doc.data().date))
            })
        }
        fetchDose()
    }, [dose, setDose])

    // get time difference between last dose and current time and set state accordingly
    useEffect(() => {
        const lastDoseStopwatch = () => {
            const now = new Date()
            const diff = now - dose
            setHours(Math.floor(diff / 1000 / 60 / 60))
            setMinutes(Math.floor(diff / 1000 / 60) % 60)
        }
        lastDoseStopwatch()
        // 60000 == update every minute
        const interval = setInterval(lastDoseStopwatch, 60000)
        return () => clearInterval(interval)
    }, [dose, setHours, setMinutes])

    const [hoverRef, isHovered] = useHover()

    return dose === null ? (
        <div className={styles.loading}>Loading...</div>
    ) : (
        <main>
            <div className={styles.clock}>
                <div className={styles.hours}>
                    <div>{hours}</div>
                    <div className={styles.clockTextContainer}>
                        <div className={styles.clockText}>hours</div>
                    </div>
                </div>
                <div className={styles.separator}>:</div>
                <div className={styles.minutes}>
                    <div>
                        <div>
                            <span>{minutes < 10 && '0'}</span>
                            {minutes}
                        </div>
                        <div className={styles.clockTextContainer}>
                            <div className={styles.clockText}>minutes</div>{' '}
                        </div>
                    </div>
                </div>
            </div>

            <button
                ref={hoverRef}
                className={styles.mainButton}
                onClick={handleClick}
            >
                <span className={styles.mainButtonText}>New Dose </span>
                <img
                    className={styles.syringeIcon}
                    src={isHovered ? syringeDropIcon : syringeIconWhite}
                    alt='syringe icon'
                />
            </button>
        </main>
    )
}

export default Main
