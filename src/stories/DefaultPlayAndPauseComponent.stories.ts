import type { Meta, StoryObj } from "@storybook/react";

import DefaultPlayAndPauseComponent from "src/components/reusable/DefaultPlayAndPauseComponent";

const controlsVariantArray = {
  // If you change the variant names, remember to update the progress bar code
  // that checks for the variant names for calculating width
  bottom: {
    controlsContainerStyle: {
      width: "100%",
      bottom: 0,
      left: 0,
    },
    playAndPauseVariantStyle: {
      height: "100%",
      width: "6%",
    },
    durationAndProgressBarVariantStyle: {
      height: "100%",
      width: "64%",
    },
    volumeIconAndRangeVariantStyle: {
      height: "100%",
      width: "20%",
    },
    volumeIconVariantStyle: {
      width: "20%",
    },
    volumeRangeInputContainerVariantStyle: {
      width: "80%",
    },
    volumeRangeVariantStyle: {
      appearance: "slider-horizontal",
      width: "100%",
    },
    playbackSelectVariantStyle: {
      padding: "0 5px",
      height: "100%",
      width: "10%",
    },
  },
  top: {
    controlsContainerStyle: {
      width: "100%",
      top: 0,
      left: 0,
    },
    playAndPauseVariantStyle: {
      height: "100%",
      width: "6%",
    },
    durationAndProgressBarVariantStyle: {
      height: "100%",
      width: "64%",
    },
    volumeIconAndRangeVariantStyle: {
      height: "100%",
      width: "20%",
    },
    volumeIconVariantStyle: {
      width: "20%",
    },
    volumeRangeInputContainerVariantStyle: {
      width: "80%",
    },
    volumeRangeVariantStyle: {
      appearance: "slider-horizontal",
      width: "100%",
    },
    playbackSelectVariantStyle: {
      padding: "0 5px",
      height: "100%",
      width: "10%",
    },
  },
  verticalLeft: {
    controlsContainerStyle: {
      flexDirection: "column",
      height: "100%",
      width: "28px",
      left: 0,
    },
    playAndPauseVariantStyle: {
      height: "10%",
      width: "100%",
    },
    durationAndProgressBarVariantStyle: {
      width: "40%",
      height: "55%",
      flexDirection: "column",
    },
    volumeIconAndRangeVariantStyle: {
      width: "100%",
      height: "25%",
      flexDirection: "column-reverse",
    },
    volumeIconVariantStyle: {
      height: "20%",
    },
    volumeRangeInputContainerVariantStyle: {
      height: "80%",
    },
    volumeRangeVariantStyle: {
      appearance: "slider-vertical",
      height: "100%",
    },
    playbackSelectVariantStyle: {
      padding: 0,
      height: "10%",
      width: "100%",
    },
  },
  verticalRight: {
    controlsContainerStyle: {
      flexDirection: "column",
      height: "100%",
      width: "28px",
      right: 0,
    },
    playAndPauseVariantStyle: {
      height: "10%",
      width: "100%",
    },
    durationAndProgressBarVariantStyle: {
      width: "40%",
      height: "55%",
      flexDirection: "column",
    },
    volumeIconAndRangeVariantStyle: {
      width: "100%",
      height: "25%",
      flexDirection: "column-reverse",
    },
    volumeIconVariantStyle: {
      height: "20%",
    },
    volumeRangeInputContainerVariantStyle: {
      height: "80%",
    },
    volumeRangeVariantStyle: {
      appearance: "slider-vertical",
      height: "100%",
    },
    playbackSelectVariantStyle: {
      padding: 0,
      height: "10%",
      width: "100%",
    },
  },
};

//👇 This default export determines where your story goes in the story list
const meta = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Default Play And Pause Component",
  component: DefaultPlayAndPauseComponent,
  tags: ["autodocs"],
} satisfies Meta<typeof DefaultPlayAndPauseComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VideoPaused: Story = {
  args: {
    //👇 The args you need here will depend on your component
    playAndPauseVideo: () => alert("Video Playing"),
    isPlaying: false,
    controlsVariantArray: controlsVariantArray,
    controlsVariant: "bottom",
  },
};

export const VideoPlaying: Story = {
  args: {
    //👇 The args you need here will depend on your component
    playAndPauseVideo: () => alert("Video Paused"),
    isPlaying: true,
    controlsVariantArray: controlsVariantArray,
    controlsVariant: "bottom",
  },
};
