import styles from './InfoItem.module.scss';
import React from "react";

interface InfoItemProps {
    icon: React.ReactNode,
    text?: string | null,
    isLink?: boolean
}

export const InfoItem = ({icon, text, isLink}: InfoItemProps) => {
    const currentTex = text || 'Not Available';
    let currentHref: string;
    if (isLink) {
        currentHref = text && text.startsWith('http') ? text : `https//${text}`;
    }
    return (
        <div className={styles.InfoItem}>

        </div>
    );
};


