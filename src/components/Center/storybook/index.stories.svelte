<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import {
    spaceOptions,
    measureOptions,
  } from "../../preview-content/options.js";

  import Center from "../index.svelte";

  let argTypes = {
    centerSpace: { control: { type: "select", options: spaceOptions } },
    centerMeasure: { control: { type: "select", options: measureOptions } },
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

<Meta title="Center" component={Center} {argTypes} />

<Story
  name="Default"
  let:args
  args={{ centerSpace: 'var(--s-1)', centerMeasure: 'var(--measure)' }}
>
  <Center {...args}><span class="item">Item</span></Center>
</Story>
