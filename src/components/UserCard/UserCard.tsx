import styles from './UserCard.module.scss';
import {UserStat} from "../UserStat";
import {UserTitle} from "../UserTitle";
import {LocalGithubUser} from "../../types";
import {UserInfo} from "../UserInfo";

interface UserCardProps extends LocalGithubUser {
}

export const UserCard = (props: UserCardProps) => {
    return (
        <div className={styles.userCard}>
            <img src={props.avatar} alt={props.login} className={styles.avatar}/>
            <UserTitle login={props.login} name={props.name} created={props.created}/>
            <p className={`${styles.bio}${props.bio ? '' : `${styles.empty}`}`}>{props.bio || 'This profile has no bio'}</p>
            <UserStat repos={props.repos} followers={props.followers} following={props.following}/>
            <UserInfo company={props.company} blog={props.blog} twitter={props.twitter} location={props.location}/>
        </div>
    );
};
