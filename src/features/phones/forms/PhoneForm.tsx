import React from "react";
import {useForm} from "react-hook-form";
import {Phone} from "../../../types/Phone.ts";
import styles from "./PhoneForm.module.css";
import {useSavePhoneMutation} from "../api/phonesAPI.ts";

type Props = {
    phone: Phone | null; // Optional, allows editing an existing phone
    quit: () => void;
    setPhone: (phone: Phone)=>void;
};

const PhoneForm: React.FC<Props> = ({phone, quit, setPhone}: Props) => {

    //console.log("PhoneForm", phone);

    const { register, handleSubmit, formState: { errors }, reset} = useForm<Phone>({
        defaultValues: phone || { id: null, brand: "", model: "", description: "", specification: new Map() },
    });

    const [savePhone, { isLoading, isError }] = useSavePhoneMutation(); // ✅ Use mutation hook

    const handleSave = async (data: Phone) => {
        console.log("Saving a phone...", data);
        const phoneData = await savePhone(data); // ✅ RTK Query handles `isLoading`
        setPhone(phoneData.data as Phone);
        quit();
    };

    return (
        <>
            {isLoading && <div className="loading">Loading...</div>}
            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit(handleSave)}>
                    <label>ID:</label>
                    <input type="number" {...register("id")} readOnly />

                    <label>Brand:</label>
                    <input {...register("brand", { required: "Brand is required" })} />
                    {errors.brand && <p className={styles.error}>{errors.brand.message}</p>}

                    <label>Model:</label>
                    <input {...register("model", { required: "Model is required" })} />
                    {errors.model && <p className={styles.error}>{errors.model.message}</p>}

                    <label>Description:</label>
                    <textarea {...register("description")} />

                    <div className={styles.pfContainer}>
                        <button type="button" onClick={() =>
                            reset({ id: null, brand: "", model: "", description: "", specification: new Map() })}>Reset
                        </button>
                        <button type="button" onClick={()=>quit()}>Quit</button>
                        <button type="submit">Save</button>
                    </div>
                </form>
                {isError && <div className="errorText">Error...</div>}
            </div>
        </>
    );
};

export default PhoneForm;
