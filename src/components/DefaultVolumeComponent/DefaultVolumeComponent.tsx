// @ts-nocheck
import { faVolumeHigh, faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { forwardRef } from "react";
import styles from "./DefaultVolumeComponent.module.css";

const DefaultVolumeComponent = forwardRef(
  (
    {
      isMuted,
      toggleVolume,
      changeVolume,
      controlsVariantArray,
      controlsVariant,
      UserVolumeHighIcon,
      UserVolumeMuteIcon,
      volumeIconStyle,
      volumeRangeStyle,
      volumeIconAndRangeStyle
    },
    ref
  ) => {
    return (
      <div
        className={styles["icon-and-volume-range-container"]}
        style={{
          ...volumeIconAndRangeStyle,
          ...controlsVariantArray[controlsVariant]
            .volumeIconAndRangeVariantStyle
        }}
      >
        <span
          className={styles["volume-high-and-mute-icon-container"]}
          onClick={toggleVolume}
          style={volumeIconStyle}
        >
          {isMuted ? (
            UserVolumeMuteIcon ? (
              <UserVolumeMuteIcon />
            ) : (
              <FontAwesomeIcon icon={faVolumeMute} />
            )
          ) : UserVolumeHighIcon ? (
            <UserVolumeHighIcon />
          ) : (
            <FontAwesomeIcon icon={faVolumeHigh} />
          )}
        </span>
        <div className={styles["volume-range-input-container"]}>
          <input
            ref={ref}
            onChange={(e) => changeVolume(e)}
            className={styles["volume-range-input"]}
            type="range"
            min={0}
            max={10}
            style={{
              ...volumeRangeStyle,
              ...controlsVariantArray[controlsVariant].volumeRangeStyle
            }}
          />
        </div>
      </div>
    );
  }
);

export default DefaultVolumeComponent;
