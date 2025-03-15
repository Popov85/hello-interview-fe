import React from "react";
import {Phone} from "./types/Phone.ts";
import styles from "./PhoneDetail.module.css";
import {useDeletePhoneMutation} from "./api/phonesAPI.ts";

type Props = {
    phone: Phone | null;
    cancel: ()=>void;
    edit: () => void;
};

const PhoneDetail: React.FC<Props> = ({phone, cancel, edit}: Props) => {

    //console.log("PhoneDetail", phone);

    const [deletePhone, { isLoading, isError }] = useDeletePhoneMutation(); // ✅ Use mutation hook

    if (!phone) return null;

    const handleDelete = (id: number) => {
        deletePhone(id);
        cancel();
    }

    return (
        <>
            {isLoading && <div className="loading">Loading...</div>}
            <div className={styles.detailContainer}>

                <h3 className={styles.header}>Phone Details</h3>

                <div className={styles.detailRow}>
                    <span className={styles.label}>ID:</span>
                    <span className={styles.value}>{phone.id}</span>
                </div>

                <div className={styles.detailRow}>
                    <span className={styles.label}>Brand:</span>
                    <span className={styles.value}>{phone.brand}</span>
                </div>

                <div className={styles.detailRow}>
                    <span className={styles.label}>Model:</span>
                    <span className={styles.value}>{phone.model}</span>
                </div>

                <div className={styles.detailRow}>
                    <span className={styles.label}>Description:</span>
                    <span className={styles.value}>{phone.description || "No description available"}</span>
                </div>
                <div >
                    <button type="button" onClick={()=>handleDelete(phone.id as number)}>Delete</button>
                    <button type="button" onClick={() => edit()}>Edit</button>
                    <button type="button" onClick={() => cancel()}>Quit</button>
                </div>
                {isError && <div className="errorText">Error...</div>}
            </div>
        </>

    );
};

export default PhoneDetail;
