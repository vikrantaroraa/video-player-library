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
      volumeIconAndRangeStyle,
    },
    ref
  ) => {
    const onKeyDown = (event) => {
      if (event.key === "Enter" || event.key === " ") {
        toggleVolume();
      }
    };
    return (
      <div
        className={styles["icon-and-volume-range-container"]}
        style={{
          ...volumeIconAndRangeStyle,
          ...controlsVariantArray[controlsVariant]
            .volumeIconAndRangeVariantStyle,
        }}
      >
        <span
          role="button"
          tabIndex={"0"}
          onKeyDown={onKeyDown}
          title={isMuted ? "Muted" : "Volume"}
          className={styles["volume-high-and-mute-icon-container"]}
          onClick={toggleVolume}
          style={{
            ...volumeIconStyle,
            ...controlsVariantArray[controlsVariant].volumeIconVariantStyle,
          }}
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
        <div
          className={styles["volume-range-input-container"]}
          style={{
            ...controlsVariantArray[controlsVariant]
              .volumeRangeInputContainerVariantStyle,
          }}
        >
          <input
            ref={ref}
            onChange={(e) => changeVolume(e)}
            className={styles["volume-range-input"]}
            type="range"
            min={0}
            max={10}
            style={{
              ...volumeRangeStyle,
              ...controlsVariantArray[controlsVariant].volumeRangeVariantStyle,
            }}
          />
        </div>
      </div>
    );
  }
);

export default DefaultVolumeComponent;
