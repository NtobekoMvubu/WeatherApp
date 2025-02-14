import styles from './HeaderComponent.module.css'
function  HeaderComponent(){
    return(
        <div className={styles.headerComponent}>
            <h1 className={styles.webTitle}>WeatherApp</h1>
        </div>
    );
}

export default HeaderComponent