// @ts-nocheck
import { forwardRef, ReactNode } from "react";

interface MyVolumeComponentProps {
  isMuted: boolean;
  toggleVolume: () => void;
  changeVolume: () => void;
  controlsVariantArray: object;
  controlsVariant: string;
  UserVolumeHighIcon?: ReactNode;
  UserVolumeMuteIcon?: ReactNode;
  volumeIconStyle?: object;
  volumeRangeStyle?: object;
  volumeIconAndRangeStyle?: object;
}
const MyVolumeComponent = forwardRef(
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
    }: MyVolumeComponentProps,
    ref
  ) => {
    return (
      <div
        style={{
          display: "flex",
          gap: 5,
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          ...volumeIconAndRangeStyle
        }}
      >
        <div onClick={toggleVolume} style={volumeIconStyle}>
          {isMuted ? (
            UserVolumeMuteIcon ? (
              <UserVolumeMuteIcon />
            ) : (
              <button>Muted</button>
            )
          ) : UserVolumeHighIcon ? (
            <UserVolumeHighIcon />
          ) : (
            <button>High</button>
          )}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%"
          }}
        >
          <input
            ref={ref}
            onChange={(e) => changeVolume(e)}
            type="range"
            min={0}
            max={10}
            style={{
              ...controlsVariantArray[controlsVariant].volumeRangeStyle,
              ...volumeRangeStyle
            }}
          />
        </div>
      </div>
    );
  }
);

export default MyVolumeComponent;
