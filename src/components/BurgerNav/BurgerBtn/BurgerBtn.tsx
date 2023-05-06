import React from "react";
import styles from "./BurgerBtn.module.scss";

type BurgerBtnPropsType = {
    isActive:boolean
}

export const BurgerBtn = ({isActive}:BurgerBtnPropsType) => {
    // const [isActive, setIsActive] = useState(false);

    // const handleClick = () => {
    //     setIsActive(!isActive);
    // };

    return (
        <button
            className={`${styles.toggleHamburger} ${isActive && styles.active}`}
            // onClick={handleClick}
            aria-label="Menu toggle"
        >
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
        </button>
    );
};

