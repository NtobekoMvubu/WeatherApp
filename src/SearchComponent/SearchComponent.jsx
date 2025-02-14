import React, {useState, useEffect} from "react";
import styles from './SearchComponent.module.css'
function SearchComponent(){
    

    return(
        <div className={styles.searchComponent}>
            <input id={styles.searchInput} type="text" placeholder="Search a city"/>
            <button >Search</button>
        </div>
    );
}
export default SearchComponent