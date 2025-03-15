import {FC, useState} from "react";
import {useGetPhonesQuery} from "./api/phonesAPI.ts";
import {PhonesList} from "./PhonesList.tsx";
import {Pagination} from "./Pagination.tsx";
import styles from "./Application.module.css";
import PhoneCard from "./PhoneCard.tsx";

export const Application: FC = () => {

    //console.log("Application");

    const [page, setPage] = useState(0);

    const {data, error, isLoading} = useGetPhonesQuery({page, size: 10});

    return (
        <div>
            <h2 className={styles.header}>Phone List</h2>
            {isLoading && <p className="loading">Loading...</p>}
            {error && <p className="errorText">Error...</p>}
            <PhonesList content={data?.content}/>
            <PhoneCard/>
            <Pagination page={page} totalPages={data?.totalPages} setPage={setPage}/>
        </div>
    );
};