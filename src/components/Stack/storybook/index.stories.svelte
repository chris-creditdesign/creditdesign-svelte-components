<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import { spaceOptions } from "../../preview-content/options.js";

  import Stack from "../index.svelte";

  let argTypes = {
    stackSpace: { control: { type: "select", options: spaceOptions } },
  };

</script>

<style>
  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: none;
    height: 100px;
    background-color: lightblue;
  }

  .item--nested {
    background-color: pink;
  }

  .stack__split-after {
    background-color: mediumaquamarine;
  }

  .test-container {
    width: 100%;
    height: 100vh;
  }

</style>

<Meta title="Stack" component={Stack} {argTypes} />

<Story name="Default" let:args args={{ stackSpace: 'var(--s-1)' }}>
  <Stack {...args}>
    <span class="item">Item</span>
    <span class="item">Item</span>
    <span class="item">Item</span>
    <span class="item">Item</span>
    <span class="item">Item</span>
  </Stack>
</Story>

<Story name="With Split after" let:args args={{ stackSpace: 'var(--s-1)' }}>
  <div class="test-container">
    <Stack {...args}>
      <span class="item">Item</span>
      <span class="item">Item</span>
      <span class="item">Item</span>
      <span class="item stack__split-after">.stack__split-after</span>
      <span class="item">Item</span>
    </Stack>
  </div>
</Story>

<Story name="With nested stacks" let:args args={{ stackSpace: 'var(--s3)' }}>
  <Stack {...args}>
    <span class="item">Item</span>
    <span class="item">Item</span>

    <Stack stackSpace="var(--s-3)">
      <span class="item item--nested">Item</span>
      <span class="item item--nested">Item</span>
      <span class="item item--nested">Item</span>
      <span class="item item--nested">Item</span>
      <span class="item item--nested">Item</span>
    </Stack>

    <span class="item">Item</span>
    <span class="item">Item</span>
    <span class="item">Item</span>
  </Stack>
</Story>
