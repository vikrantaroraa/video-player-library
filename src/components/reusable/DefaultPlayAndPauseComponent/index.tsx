// @ts-nocheck
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "src/components/reusable/DefaultPlayAndPauseComponent/index.module.css";

const DefaultPlayAndPauseComponent = ({
  UserPlayIcon,
  UserPauseIcon,
  playAndPauseStyle,
  playAndPauseVideo,
  isPlaying,
  controlsVariantArray,
  controlsVariant,
}) => {
  const onKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      playAndPauseVideo();
    }
  };
  return (
    <div
      role="button"
      tabIndex={"0"}
      onKeyDown={onKeyDown}
      onClick={playAndPauseVideo}
      className={styles["button-container"]}
      style={{
        ...playAndPauseStyle,
        ...controlsVariantArray[controlsVariant].playAndPauseVariantStyle,
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
