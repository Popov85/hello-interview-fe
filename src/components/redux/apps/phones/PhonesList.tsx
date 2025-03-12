import {Phone} from "./types/Phone.ts";
import styles from "./PhonesList.module.css";
import {FC} from "react";

type Props = {
    content?: Phone[],
    setSelected: (selected: Phone | null) => void,
};
export const PhonesList: FC<Props> = ({content, setSelected}: Props) => {

    if (!content || content.length==0) return null;

    return (
        <div className={styles.phoneListContainer}>
            {content.map((phone: Phone) =>
                (<span key={phone.id} className={styles.phoneItem} onClick={()=>setSelected({...phone})}>{phone.brand} {phone.model}</span>))}
        </div>
    );
};