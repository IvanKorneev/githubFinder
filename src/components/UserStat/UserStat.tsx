import styles from './UserStat.module.scss';
import {LocalGithubUser} from "../../types";

interface UserStatProps extends Pick<LocalGithubUser, 'repos' | 'following' | 'followers'> {

}

export const UserStat = ({repos, followers, following}: UserStatProps) => {
    return (
        <div className={styles.UserStat}>
            <div className={styles.info}>
                <div className={styles.infoTitle}>Repos</div>
                <div className={styles.infoNumber}>{repos}</div>
            </div>
            <div className={styles.info}>
                <div className={styles.infoTitle}>Following</div>
                <div className={styles.infoNumber}>{following}</div>
            </div>
            <div className={styles.info}>
                <div className={styles.infoTitle}>Followers</div>
                <div className={styles.infoNumber}>{followers}</div>
            </div>
        </div>
    )
};
