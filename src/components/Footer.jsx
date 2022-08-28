import styles from './Footer.module.css'

function Footer() {
    return (
        <>
            <footer className={styles.footerContainer}>
                <hr />
                <section className={styles.footer}>
                    <div className={styles.footerText}>
                        <a href='https://github.com/emanuelefavero'>
                            Emanuele Favero &copy; {new Date().getFullYear()}
                        </a>
                    </div>
                </section>
            </footer>
        </>
    )
}

export default Footer
