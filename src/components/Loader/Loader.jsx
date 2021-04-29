import styles from './Loader.module.css'

const Loader = () => (
<div className={styles.loader}>
    <div className={styles.ldsRipple}>
        <div className={styles.ldsRippleElem}></div>
        <div className={styles.ldsRippleElem}></div>
    </div>
</div>
);

export default Loader;