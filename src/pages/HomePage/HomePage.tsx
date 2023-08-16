import styles from "./HomePage.module.scss";
import { useSearchUsersQuery } from "store/github/github.api";
import { FC, useEffect, useState } from "react";
import UserCard from "components/UserCard/UserCard";
import { PrimaryButton } from "components/Button/Button";
import Input from "components/Input/Input";

const HomePage: FC = () => {
  const [search, setSearch] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const [showDropdown, setShowDropdown] = useState(false);

  const {
    isLoading,
    isError,
    data = [],
    refetch,
  } = useSearchUsersQuery(searchQuery, {
    skip: searchQuery.length < 1,
  });

  const handleSearch = () => {
    setSearchQuery(search);
    setShowDropdown(true);
  };

  useEffect(() => {
    if (search.length) {
      setShowDropdown(true);
      refetch();
    } else {
      setShowDropdown(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    setShowDropdown(false);
  }, [search.length]);

  return (
    <div className={styles.wrapper}>
      {isError ? (
        <p className={styles.errorMessage}>Something went wrong...</p>
      ) : (
        <div className={styles.container}>
          <div className={styles.inputContainer}>
            <Input
              size={"small"}
              onChange={(e) => setSearch(e.target.value)}
              label={"Search GitHub username..."}
              name={"user"}
              variant={"outlined"}
              className={styles.input}
            />
            <PrimaryButton
              color={"warning"}
              className={styles.searchButton}
              onClick={handleSearch}
              size={"small"}
            >
              Search
            </PrimaryButton>
          </div>

          {showDropdown && (
            <div className={styles.dropdown}>
              {isLoading && <p>Loading...</p>}

              {!isLoading && data.length === 0 && (
                <p className={styles.errorMessage}>No users found</p>
              )}
              {!isLoading && data.length > 0 && (
                <>
                  {data.map((user) => (
                    <UserCard key={user.id} {...user} />
                  ))}
                </>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HomePage;
