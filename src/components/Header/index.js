import styles from './Header.module.scss';
import logo from '../../assets/img/logo.png';
import React from 'react';

function Header({onFilter}) {
    const [filter, setFilter] = React.useState(false);

    const filterPictures = () => {
        setFilter(!filter);
        onFilter(!filter);
    }
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img width={80} height={80} src={logo} alt="logo" />
            <div className={styles.logo__text}>
                <p className={styles.logo__text__title}>REACT SHIBEGRAM</p>
                <p className={styles.logo__text__subtitle}>Альбом фотографий</p>
            </div>
        </div>
        <div className={styles.user}>
          <div className={`${styles.favorite__icon} ${filter ? styles.active : ''}`} onClick={filterPictures}></div>
        </div>
      </header>
    )
}

export default Header;