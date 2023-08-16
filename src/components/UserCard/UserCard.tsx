import styles from "./UserCard.module.scss";
import { IUser } from "types/IUser";
import { FC } from "react";
import { useGetUserDetailsQuery } from "store/github/github.api";

const UserCard: FC<IUser> = ({ login, avatar_url, html_url }) => {
  const { data: userDetails } = useGetUserDetailsQuery(login);

  if (!userDetails) {
    return null;
  }

  return (
    <div className={styles.card_wrapper}>
      <img width={40} height={40} src={avatar_url} alt="user avatar" />
      <div className={styles.card_content}>
        <p>
          <b>bio:</b> {userDetails.bio}
        </p>
        <p>
          <b>name:</b> {userDetails.name}
        </p>
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          repositories
        </a>
      </div>
    </div>
  );
};

export default UserCard;
