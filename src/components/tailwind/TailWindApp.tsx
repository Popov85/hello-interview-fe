import styles from "./TailWindApp.module.css";

export const TailWindApp = () => {
    return (
        <div className={`${styles.myDiv} bg-gray-200`}>
            Hello, world!
        </div>
    );
};