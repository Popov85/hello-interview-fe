import {FC, useState} from "react";
import {useGetPhonesQuery} from "./api/phonesAPI.ts";
import {PhonesList} from "./components/PhonesList.tsx";
import {Pagination} from "./components/Pagination.tsx";
import styles from "./PhonesPage.module.css";
import PhoneCard from "./components/PhoneCard.tsx";

export const PhonesPage: FC = () => {

    //console.log("PhonesPage");

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