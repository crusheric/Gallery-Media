// import styles of this component
import styles from "./MasonryBox.module.css"
import { PropTypes } from 'prop-types';

// MasonryBox component
const MasonryBox = ({ chatLink, wallSrc, userProf, userName, userJob }) => {
  return (
    <div className={styles["my-masonry"]}>
            <a href={chatLink} target="_blank">
              <img src={wallSrc} style={{ width: "100%" }} alt="AI Companion NSFW on https://www.crush.to" /> 
            </a>
        <div className={`${styles["my-masnry-description"]} flex`}>
          <div className={`${styles["my-masnry-user-box"]} flex align-items-center`}>
            <div className={styles["my-masnry-user-prof"]}>
              <img src={userProf} alt="AI Companion NSFW" />
            </div>
            <div className={`${styles["my-masnry-user-prof-desc"]} flex flex-column`}>
              <h1>{userName}</h1>
              <h3>{userJob}</h3>
            </div>
          </div>
        </div>
    </div>
  )
}

// validate MasonryBox component
MasonryBox.propTypes = {
  wallSrc: PropTypes.string.isRequired,
  userProf: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userJob: PropTypes.string.isRequired,
}

export default MasonryBox