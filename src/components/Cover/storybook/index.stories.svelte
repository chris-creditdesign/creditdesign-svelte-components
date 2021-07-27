<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import {
    spaceOptions,
    heightOptions,
  } from "../../preview-content/options.js";

  import Cover from "../index.svelte";

  let argTypes = {
    coverSpace: { control: { type: "select", options: spaceOptions } },
    coverHeight: { control: { type: "select", options: heightOptions } },
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

</style>

<Meta title="Cover" component={Cover} {argTypes} />

<Story
  name="Default"
  let:args
  args={{ coverSpace: 'var(--s-1)', coverHeight: '100vh' }}
>
  <Cover {...args}>
    <span class="item cover__centered">.cover__centered</span>
  </Cover>
</Story>

<Story
  name="With three items"
  let:args
  args={{ coverSpace: 'var(--s-1)', coverHeight: '100vh' }}
>
  <Cover {...args}>
    <span class="item">Item</span>
    <span class="item cover__centered">.cover__centered</span>
    <span class="item">Item</span>
  </Cover>
</Story>
