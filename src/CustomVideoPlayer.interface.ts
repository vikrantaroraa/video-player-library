import { ReactNode } from "react";

export interface CustomVideoPlayerProps {
  videoUrl?: string;

  // controls container props
  controlsVariant?: string;
  controlsContainerStyle?: object;

  // play and pause props
  UserPlayIcon?: ReactNode;
  UserPauseIcon?: ReactNode;
  playAndPauseStyle?: object;
  UserPlayAndPauseComponent?: ReactNode;

  // video duration and progress bar props
  progressBarStyle?: object;
  videoDurationStyle?: object;
  progressBarContainerStyle?: object;
  durationAndProgressBarStyle?: object;
  UserDurationAndProgressBarComponent?: ReactNode;

  // volume icon and range styles
  UserVolumeHighIcon?: ReactNode;
  UserVolumeMutecon?: ReactNode;
  volumeIconAndRangeStyle?: object;
  volumeIconStyle?: object;
  volumeRangeStyle?: object;
  UserVolumeComponent?: ReactNode;

  // playback speed select props
  UserPlaybackSpeedComponent?: ReactNode;
  userPlaybackSpeedOptions?: Array<string>;
  userDefaultSelectedSpeedOption?: string;
  playbackSpeedSelectStyle?: object;
  playbackSpeedSelectOptionsStyle?: object;
}
