// @ts-nocheck
import { ReactNode } from "react";

interface MyPlayAndPauseComponentProps {
  isPlaying: boolean;
  playAndPauseVideo: () => void;
  playAndPauseStyle?: object;
  UserPlayIcon?: ReactNode;
  UserPauseIcon?: ReactNode;
}

const MyPlayAndPauseComponent = ({
  UserPlayIcon,
  UserPauseIcon,
  isPlaying,
  playAndPauseVideo,
  playAndPauseStyle
}: MyPlayAndPauseComponentProps) => {
  return (
    <div onClick={playAndPauseVideo} style={playAndPauseStyle}>
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
  );
};

export default MyPlayAndPauseComponent;
