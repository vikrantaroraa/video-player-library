// @ts-nocheck
import MyPlayAndPauseComponent from "./components/user-components/MyPlayAndPauseComponent";
import MyDurationAndProgressBarComponentComponent from "./components/user-components/MyDurationAndProgressBarComponentComponent";
import MyVolumeComponent from "./components/user-components/MyVolumeComponent";
import MyPlaybackSpeedComponent from "./components/user-components/MyPlaybackSpeedComponent";
import MyPlayPauseAndDurationComponent from "./components/user-components/MyPlayPauseAndDurationComponent";

import CustomVideoPlayer from "./CustomVideoPlayer";
import "./App.css";
import { forwardRef, useRef } from "react";

export default function App() {
  const videoPlayerRef = useRef(null);
  return (
    <div className="App">
      <CustomVideoPlayer
        ref={videoPlayerRef}
        controlsVariant={"horizontalBottomVariant"}
        controlsContainerStyle={{
          backgroundColor: "#01da72",
          opacity: 0.95,
          height: 25,
          gap: 5,
          border: "1px solid #01da72",
        }}
        // USER CUSTOM COMPONENT STARTS (DO NOT USE FOR NOW)
        // UserCustomComponent={(props) => (
        //   <MyPlayPauseAndDurationComponent {...props} />
        // )}
        // USER CUSTOM COMPONENT ENDS

        // play and pause component props start (check how to change width from here only)

        // UserPlayIcon={() => <h4>Play</h4>}
        // UserPauseIcon={() => <h4>Pause</h4>}
        // UserPlayAndPauseComponent={(props) => (
        //   <MyPlayAndPauseComponent {...props} />
        // )}
        playAndPauseStyle={{
          borderRadius: 2,
          color: "#fff",
          fontSize: 16,
          height: "100%",
          width: "10%",
        }}
        // duration and progress bar component props start

        // UserDurationAndProgressBarComponent={(props) => (
        //   <MyDurationAndProgressBarComponentComponent {...props} />
        // )}
        durationAndProgressBarStyle={{
          // backgroundColor: "lightpink",
          color: "green",
          height: "100%",
          width: "60%",
        }}
        videoDurationStyle={{
          color: "#fff",
          fontSize: 12,
          fontWeight: 600,
        }}
        progressBarContainerStyle={{
          backgroundColor: "#088a49",
          borderRadius: 5,
          height: "45%",
          padding: 2,
        }}
        progressBarStyle={{
          backgroundColor: "#fff",
          borderRadius: 5,
        }}
        // volume icon and range props start

        // UserVolumeComponent={forwardRef((props, ref) => (
        //   <MyVolumeComponent {...props} ref={ref} />
        // ))}
        // UserVolumeHighIcon={() => <h1>High</h1>}
        // UserVolumeMuteIcon={() => <h1>Muted</h1>}
        volumeIconAndRangeStyle={{
          // backgroundColor: "lightsalmon",
          color: "white",
          // fontSize: 10,
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "50%",
        }}
        volumeIconStyle={{
          color: "white",
          width: "100%",
        }}
        volumeRangeStyle={{
          accentColor: "#fff",
        }}
        // playback select props start

        // UserPlaybackSpeedComponent={(props) => (
        //   <MyPlaybackSpeedComponent {...props} />
        // )}
        userPlaybackSpeedOptions={[
          "0.25x",
          "0.5x",
          "0.75x",
          "1x",
          "1.25x",
          "1.5x",
          "1.75x",
          "2x",
        ]}
        userDefaultSelectedSpeedOption={"1.75x"}
        playbackSpeedSelectStyle={{
          border: "1px solid #fff",
          borderRadius: 3.5,
          color: "#fff",
          fontSize: 13.3,
          fontWeight: 500,
          backgroundColor: "rgba(0,0,0,0.2)",
          height: "auto",
          outline: "none",
          width: "10%",
        }}
        playbackSpeedSelectOptionsStyle={{
          backgroundColor: "#fff",
          color: "#000",
          fontWeight: 400,
        }}
      />
    </div>
  );
}
