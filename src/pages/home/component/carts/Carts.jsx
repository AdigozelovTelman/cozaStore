import React from 'react'
import styles from './Carts.module.scss'

const Carts = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.cart}>
                    <div className={styles.cartText}>
                        <h5>Women</h5>
                        <span>Spring 2018</span>
                    </div>
                    <div className={styles.image}>
                        <img src="https://preview.colorlib.com/theme/cozastore/images/banner-01.jpg" alt="sekil" />
                    </div>

                </div>
                <div className={styles.cart}>
                    <div className={styles.cartText}>
                        <h5>Women</h5>
                        <span>Spring 2018</span>
                    </div>
                    <div className={styles.image}>
                        <img src="https://preview.colorlib.com/theme/cozastore/images/banner-02.jpg" alt="sekil" />
                    </div>

                </div>
                <div className={styles.cart}>
                    <div className={styles.cartText}>
                        <h5>Women</h5>
                        <span>Spring 2018</span>
                    </div>
                    <div className={styles.image}>
                        <img src="https://preview.colorlib.com/theme/cozastore/images/banner-03.jpg" alt="sekil" />
                    </div>

                </div>

            </div>
        </>
    )
}

export default Carts