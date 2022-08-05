import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

import {magic} from '../../lib/magic-auth';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleOnClickHome = () => router.push("/");
  const handleOnClickMyList = () => router.push("/browse/mylist");
  const handleShowDropDown = () => setDropdown(!dropdown);

  const handleSignout = async (event) => {
    event.preventDefault();
    try {
      await magic.user.logout();
      router.push('/login');
    } catch(error) {
      console.log('unable to log out user : ' , error)
      router.push('/login');
    }
  }

  // get logged in user data
  useEffect(() => {
    const getUserData = async () => {
      try {
        const { email } = await magic.user.getMetadata();
        if (email) setUsername(email);
      } catch (error) {
        console.log("error getting user's data : ", error);
      }
    };
    getUserData();
  });

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <a className={styles.logoLink} href="/">
          <div className={styles.logoWrapper}>
            <Image
              src="/static/netflix.svg"
              alt="netflix logo"
              width="128px"
              height="38px"
            />
          </div>
        </a>

        <ul className={styles.navItems}>
          <li className={styles.navItem} onClick={handleOnClickHome}>
            Home
          </li>
          <li className={styles.navItem2} onClick={handleOnClickMyList}>
            My List
          </li>
        </ul>

        <nav className={styles.navContainer}>
          <div>
            <button className={styles.usernameBtn} onClick={handleShowDropDown}>
              <p className={styles.username}>{username}</p>
              <Image
                src="/static/expand-more.svg"
                alt="expand dropdown"
                width="24px"
                height="24px"
              />
            </button>
            {dropdown && (
              <div className={styles.navDropdown}>
                <div>
                  <a className={styles.linkName} onClick={handleSignout}>Sign out</a>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
