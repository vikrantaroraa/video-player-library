// @ts-nocheck
import styles from "./DefaultDurationAndProgressBarComponent.module.css";

const DefaultDurationAndProgressBarComponent = ({
  videoDurationStyle,
  videoProgressInSeconds,
  videoDuration,
  progressBarContainerStyle,
  videoProgress,
  progressBarStyle,
  seekVideo,
  durationAndProgressBarStyle,
  controlsVariantArray,
  controlsVariant
}) => {
  return (
    <div
      className={styles["duration-and-progress-bar"]}
      style={{
        ...durationAndProgressBarStyle,
        ...controlsVariantArray[controlsVariant]
          .durationAndProgressBarVariantStyle
      }}
    >
      <div className={styles["duration-container"]} style={videoDurationStyle}>
        {videoProgressInSeconds}:{videoDuration}
      </div>

      <div
        onClick={(event) => seekVideo(event)}
        className={styles["progress-bar-container"]}
        style={progressBarContainerStyle}
      >
        <div
          className={styles["progress"]}
          style={{
            height: controlsVariant.includes("vertical")
              ? `${videoProgress}%`
              : "100%",
            width: controlsVariant.includes("horizontal")
              ? `${videoProgress}%`
              : "100%",
            ...progressBarStyle
          }}
        ></div>
      </div>
    </div>
  );
};

export default DefaultDurationAndProgressBarComponent;
