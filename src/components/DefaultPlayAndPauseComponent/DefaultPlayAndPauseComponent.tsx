// @ts-nocheck
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./DefaultPlayAndPauseComponent.module.css";

const DefaultPlayAndPauseComponent = ({
  UserPlayIcon,
  UserPauseIcon,
  playAndPauseStyle,
  playAndPauseVideo,
  isPlaying,
  controlsVariantArray,
  controlsVariant
}) => {
  return (
    <div
      onClick={playAndPauseVideo}
      className={styles["play-and-pause-button-container"]}
      style={{
        ...playAndPauseStyle,
        ...controlsVariantArray[controlsVariant].playAndPauseVariantStyle
      }}
    >
      {isPlaying ? (
        UserPauseIcon ? (
          <UserPauseIcon />
        ) : (
          <FontAwesomeIcon icon={faPause} />
        )
      ) : UserPlayIcon ? (
        <UserPlayIcon />
      ) : (
        <FontAwesomeIcon icon={faPlay} />
      )}
    </div>
  );
};

export default DefaultPlayAndPauseComponent;
