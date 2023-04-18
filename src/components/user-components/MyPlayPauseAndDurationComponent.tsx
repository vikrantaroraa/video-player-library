// @ts-nocheck
import { ReactNode } from "react";

interface MyPlayPauseAndDurationComponentProps {
  // Play/Pause props
  isPlaying: boolean;
  playAndPauseVideo: () => void;
  playAndPauseStyle?: object;
  UserPlayIcon?: ReactNode;
  UserPauseIcon?: ReactNode;
  controlsVariantArray?: object;
  controlsVariant: string;

  // Duration component props
  seekVideo: () => void;
  videoProgressInSeconds: number;
  videoProgress: number;
  videoDuration: number;
  videoDurationStyle: object;
  progressBarStyle?: object;
  progressBarContainerStyle?: object;
  videoDurationStyle?: object;
  durationAndProgressBarStyle?: object;
}

const MyPlayPauseAndDurationComponent = ({
  UserPlayIcon,
  UserPauseIcon,
  isPlaying,
  playAndPauseVideo,
  playAndPauseStyle,
  controlsVariantArray,
  controlsVariant,
  // Duration Props
  seekVideo,
  videoProgressInSeconds,
  videoProgress,
  videoDuration,
  videoDurationStyle,
  progressBarStyle,
  durationAndProgressBarStyle,
  progressBarContainerStyle,
}: MyPlayPauseAndDurationComponentProps) => {
  return (
    <>
      <div
        onClick={playAndPauseVideo}
        style={{
          ...playAndPauseStyle,
          ...controlsVariantArray[controlsVariant].playAndPauseVariantStyle,
        }}
      >
        {isPlaying ? (
          UserPauseIcon ? (
            <UserPauseIcon />
          ) : (
            <button>Pause</button>
          )
        ) : UserPlayIcon ? (
          <UserPlayIcon />
        ) : (
          <button>Play</button>
        )}
      </div>
      <div
        style={{
          display: "flex",
          gap: 10,
          ...durationAndProgressBarStyle,
          ...controlsVariantArray[controlsVariant]
            .durationAndProgressBarVariantStyle,
        }}
      >
        <div className="video-duration" style={videoDurationStyle}>
          {videoProgressInSeconds}:{videoDuration}
        </div>
        <div className="video-progress" style={progressBarContainerStyle}>
          {/* <progress value={videoProgress.toFixed(0)} max={100} /> */}
          <input
            onChange={(event) => seekVideo(event)}
            type="range"
            value={videoProgress.toFixed(0)}
            min={0}
            max={100}
            style={progressBarStyle}
          />
        </div>
      </div>
    </>
  );
};

export default MyPlayPauseAndDurationComponent;
