import {useEffect, useState} from "react";
import {fireData} from '../utils/firebase';
import {onValue, ref} from 'firebase/database';

const usePageData = (fieldName) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // fireData
        //     .ref(fieldName)
        //     .child(fieldName)
        //     .once('value')
        //     .then(data => setData(data.val()))
        const dataRef = ref(fireData, fieldName);

        onValue(dataRef, (snapshot) => {
            setData(snapshot.val())
        })
    }, [fieldName]);

    return data;
}
export default usePageData;