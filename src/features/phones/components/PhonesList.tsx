import {Phone} from "../../../types/Phone.ts";
import styles from "./PhonesList.module.css";
import {FC} from "react";
import {useDispatch} from "react-redux";
import {setPhone} from "../reducers/phoneReducer.ts";
import {AppDispatch} from "../../../app/store.ts";

type Props = {
    content?: Phone[]
};
export const PhonesList: FC<Props> = ({content}: Props) => {

    const dispatch : AppDispatch = useDispatch<AppDispatch>();

    if (!content || content.length==0) return null;

    return (
        <div className={styles.phoneListContainer}>
            {content.map((phone: Phone) =>
                (<span key={phone.id} className={styles.phoneItem} onClick={()=>dispatch(setPhone(phone))}>{phone.brand} {phone.model}</span>))}
        </div>
    );
};