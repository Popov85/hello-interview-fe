import {FC, useState} from "react";
import {useGetPhonesQuery} from "./api/phonesAPI.ts";
import {PhonesList} from "./PhonesList.tsx";
import {Pagination} from "./Pagination.tsx";
import styles from "./Application.module.css";
import {Phone} from "./types/Phone.ts";
import PhoneCard from "./PhoneCard.tsx";

export const Application: FC = () => {

    //console.log("Application");

    const [page, setPage] = useState(0);

    const [selectedPhone, setSelectedPhone] = useState<Phone | null>(null);

    const {data, error, isLoading} = useGetPhonesQuery({page, size: 5});

    return (
        <div>
            <h2 className={styles.header}>Phone List</h2>
            {isLoading && <p className="loading">Loading...</p>}
            {error && <p className="errorText">Error...</p>}
            <PhonesList content={data?.content} setSelected={setSelectedPhone}/>
            {
                selectedPhone !== null && <PhoneCard phone={selectedPhone} cancel={()=>setSelectedPhone(null)}/>
            }
            <Pagination page={page} totalPages={data?.totalPages} onPageChange={setPage}/>
        </div>
    );
};