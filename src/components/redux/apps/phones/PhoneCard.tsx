import React, {useState} from "react";
import {Phone} from "./types/Phone.ts";
import PhoneDetail from "./PhoneDetail.tsx";
import PhoneForm from "./forms/PhoneForm.tsx";

type Props = {
    phone: Phone;
    cancel: ()=>void;
};

const PhoneCard: React.FC<Props> = ({phone, cancel}: Props) => {

    //console.log("PhoneCard", phone);

    const [editMode, setEditMode] = useState(false);

    const [currentPhone, setCurrentPhone] = useState<Phone>(phone);

    //console.log("Edit mode = ", editMode);

    if (editMode) return <PhoneForm phone={phone} quit = {()=>setEditMode(false)} setPhone={(p)=>setCurrentPhone(p)}/>;

    return <PhoneDetail phone={currentPhone} cancel={cancel} edit={() => setEditMode(!editMode)}/>;
};

export default PhoneCard;
