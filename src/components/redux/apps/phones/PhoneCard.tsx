import React, {useState} from "react";
import {Phone} from "./types/Phone.ts";
import PhoneDetail from "./PhoneDetail.tsx";
import PhoneForm from "./forms/PhoneForm.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store/store.ts";
import {resetPhone, setPhone} from "../../store/reducers/phoneReducer.ts";

const PhoneCard: React.FC = () => {

    //console.log("PhoneCard", phone);

    const [editMode, setEditMode] = useState(false);

    const dispatch: AppDispatch = useDispatch<AppDispatch>();

    const selectedPhone: Phone | null = useSelector((state: RootState) => state.phoneReducer.phone);

    if (!selectedPhone) return null;

    if (editMode && selectedPhone!==null)
        return <PhoneForm phone={selectedPhone} quit = {()=>setEditMode(false)} setPhone={(p)=>dispatch(setPhone(p))}/>;

    return <PhoneDetail phone={selectedPhone} cancel={()=>dispatch(resetPhone())} edit={() => setEditMode(!editMode)}/>;
};

export default PhoneCard;
