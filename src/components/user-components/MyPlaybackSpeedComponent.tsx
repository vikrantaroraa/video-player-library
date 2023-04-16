// @ts-nocheck
interface MyPlaybackSpeedComponentProps {
  playbackSpeedOptions: Array<string>;
  changePlaybackSpeed: () => void;
  userPlaybackSpeedOptions: Array<string>;
  userDefaultSelectedSpeedOption: string;
  controlsVariantArray: object;
  controlsVariant: string;
  playbackSpeedSelectStyle: object;
  playbackSpeedSelectOptionsStyle: object;
}

const MyPlaybackSpeedComponent = ({
  playbackSpeedOptions,
  changePlaybackSpeed,
  userPlaybackSpeedOptions,
  userDefaultSelectedSpeedOption,
  controlsVariantArray,
  controlsVariant,
  playbackSpeedSelectStyle,
  playbackSpeedSelectOptionsStyle,
}: MyPlaybackSpeedComponentProps) => {
  const optionsArray = userPlaybackSpeedOptions
    ? userPlaybackSpeedOptions
    : playbackSpeedOptions;
  const defaultSelectedSpeedValue = userDefaultSelectedSpeedOption
    ? userDefaultSelectedSpeedOption
    : "Normal";
  return (
    <div>
      <select
        defaultValue={defaultSelectedSpeedValue}
        onChange={(event) => {
          changePlaybackSpeed(event);
        }}
        style={{
          ...controlsVariantArray[controlsVariant].playbackSelectStyle,
          ...playbackSpeedSelectStyle,
        }}
      >
        {optionsArray.map((speedOption, index) => (
          <option
            key={index}
            value={speedOption}
            style={playbackSpeedSelectOptionsStyle}
          >
            {speedOption}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MyPlaybackSpeedComponent;
