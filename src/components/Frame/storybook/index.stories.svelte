<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";

  import Frame from "../index.svelte";

  let argTypes = {
    frameRatioHeight: { control: { type: "range", min: 0, max: 16, step: 1 } },
    frameRatioWidth: { control: { type: "range", min: 0, max: 16, step: 1 } },
  };

</script>

<style>
  .place-holder {
    font-weight: bold;
    text-transform: uppercase;
    background-color: #ececec;
  }

</style>

<Meta title="Frame" component={Frame} {argTypes} />

<Story
  name="Default"
  let:args
  args={{ frameRatioHeight: 9, frameRatioWidth: 16 }}
>
  <Frame {...args}><img src="img/image.jpg" alt="test" /></Frame>
</Story>

<Story
  name="Width video"
  let:args
  args={{ frameRatioHeight: 9, frameRatioWidth: 16 }}
>
  <Frame {...args}>
    <!-- svelte-ignore a11y-media-has-caption -->
    <video poster="video/video.jpg" playsinline="" autoplay="true" loop="true">
      <source src="video/video.webm" type="video/webm" />
      <source src="video/video.mp4" type="video/mp4" />
    </video>
  </Frame>
</Story>

<Story
  name="Width placeholder content"
  let:args
  args={{ frameRatioHeight: 9, frameRatioWidth: 16 }}
>
  <Frame {...args}>
    <div class="place-holder">
      <p>Image pending</p>
    </div>
  </Frame>
</Story>
