// @ts-nocheck
interface MyDurationAndProgressBarComponentComponentProps {
  seekVideo: () => void;
  seekVideoOnTabFocus: () => void;
  videoProgressInSeconds: number;
  videoProgress: number;
  videoDuration: number;
  progressBarStyle?: object;
  progressBarContainerStyle?: object;
  videoDurationStyle?: object;
  durationAndProgressBarStyle?: object;
}

const MyDurationAndProgressBarComponentComponent = ({
  seekVideo,
  seekVideoOnTabFocus,
  videoProgressInSeconds,
  videoProgress,
  videoDuration,
  progressBarStyle,
  progressBarContainerStyle,
  videoDurationStyle,
  durationAndProgressBarStyle,
}: MyDurationAndProgressBarComponentComponentProps) => {
  return (
    <div
      style={{
        display: "flex",
        gap: 10,
      }}
    >
      <div className="video-duration">
        {videoProgressInSeconds}:{videoDuration}
      </div>
      <div className="video-progress">
        {/* <progress value={videoProgress.toFixed(0)} max={100} /> */}
        <input
          onChange={(event) => {
            seekVideo(event);
            seekVideoOnTabFocus(event);
          }}
          type="range"
          value={videoProgress.toFixed(0)}
          min={0}
          max={100}
        />
      </div>
    </div>
  );
};
export default MyDurationAndProgressBarComponentComponent;
