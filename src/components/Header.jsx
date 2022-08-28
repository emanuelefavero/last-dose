import styles from './Header.module.css'

function Header() {
    return (
        <>
            <header className={styles.headerContainer}>
                <section className={styles.header}>
                    <div className={styles.headerLogo}></div>
                </section>
                <hr />
            </header>
        </>
    )
}

export default Header
