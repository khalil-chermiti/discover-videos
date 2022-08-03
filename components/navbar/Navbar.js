import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";

const Navbar = props => {
  const [dropdown, setDropdown] = useState(false);
  const { username } = props;
  const router = useRouter();

  const handleOnClickHome = () => router.push("/");
  const handleOnClickMyList = () => router.push("/browse/mylist");
  const handleShowDropDown = () => setDropdown(!dropdown);

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
                  <Link href="/logout">
                    <a className={styles.linkName}>Sign out</a>
                  </Link>
                  {/* <div className={styles.lineWrapper}></div> */}
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
