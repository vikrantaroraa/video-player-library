// @ts-nocheck
import styles from "src/components/reusable/DefaultPlaybackSpeedComponent/index.module.css";

const DefaultPlaybackSpeedComponent = ({
  playbackSpeedOptions,
  changePlaybackSpeed,
  userPlaybackSpeedOptions,
  userDefaultSelectedSpeedOption,
  controlsVariantArray,
  controlsVariant,
  playbackSpeedSelectStyle,
  playbackSpeedSelectOptionsStyle,
}) => {
  const optionsArray = userPlaybackSpeedOptions
    ? userPlaybackSpeedOptions
    : playbackSpeedOptions;
  const defaultSelectedSpeedValue = userDefaultSelectedSpeedOption
    ? userDefaultSelectedSpeedOption
    : "Normal";
  return (
    <select
      className={styles["playback-speed-select"]}
      name="playback-speed"
      onChange={(event) => {
        changePlaybackSpeed(event);
      }}
      defaultValue={defaultSelectedSpeedValue}
      style={{
        ...playbackSpeedSelectStyle,
        ...controlsVariantArray[controlsVariant].playbackSelectVariantStyle,
      }}
    >
      {optionsArray.map((speed, index) => (
        <option
          key={index}
          value={speed}
          style={playbackSpeedSelectOptionsStyle}
        >
          {speed}
        </option>
      ))}
    </select>
  );
};

export default DefaultPlaybackSpeedComponent;
