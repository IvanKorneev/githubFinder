import styles from './InfoItem.module.scss';
import React from "react";

interface InfoItemProps {
    icon: React.ReactNode,
    text?: string | null,
    isLink?:boolean
}

export const InfoItem = ({icon,text,isLink}: InfoItemProps) => {
    return (
        <div className={styles.InfoItem}>

        </div>
    );
};


