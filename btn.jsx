import React, {useMemo} from 'react';

import styles from "./btn.module.css"

const GeneralBtn = ({title}) => {
    const color = useMemo(()=> {
        if(title === "Editar") return "#FFE797"
        if(title === "Crear") return "#94c918"
        return "#A72703"
    }, [title]);
    return <button className={styles.btn} style= {{"--btn-color": color }}>{title}</button>
}

export default GeneralBtn;
