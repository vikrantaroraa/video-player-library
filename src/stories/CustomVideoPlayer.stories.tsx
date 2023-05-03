// CustomVideoPlayer.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import CustomVideoPlayer from "src/components/CustomVideoPlayer";

//👇 This default export determines where your story goes in the story list
const meta = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "CustomVideoPlayer",
  tags: ["autodocs"],
  component: CustomVideoPlayer,
} satisfies Meta<typeof CustomVideoPlayer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomVideoPlayerStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
