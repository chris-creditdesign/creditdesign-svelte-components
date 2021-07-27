<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import {
    spaceOptions,
    measureOptions,
  } from "../../preview-content/options.js";

  import Switcher from "../index.svelte";

  let argTypes = {
    switcherSpace: { control: { type: "select", options: spaceOptions } },
    switcherMinWidth: { control: { type: "select", options: measureOptions } },
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

<Meta title="Switcher" component={Switcher} {argTypes} />

<Story
  name="Default"
  let:args
  args={{ switcherSpace: 'var(--s-1)', switcherMinWidth: 'var(--measure)' }}
>
  <Switcher {...args}>
    <span class="item">Item</span>
    <span class="item">Item</span>
    <span class="item">Item</span>
  </Switcher>
</Story>

<Story
  name="With eight items"
  let:args
  args={{ switcherSpace: 'var(--s-1)', switcherMinWidth: 'var(--measure)' }}
>
  <Switcher {...args}>
    <span class="item">One</span>
    <span class="item">Two</span>
    <span class="item">Three</span>
    <span class="item">Four</span>
    <span class="item">Five</span>
    <span class="item">Six</span>
    <span class="item">Seven</span>
    <span class="item">Eight</span>
  </Switcher>
</Story>

<Story
  name="With seven items"
  let:args
  args={{ switcherSpace: 'var(--s-1)', switcherMinWidth: 'var(--measure)' }}
>
  <Switcher {...args}>
    <span class="item">One</span>
    <span class="item">Two</span>
    <span class="item">Three</span>
    <span class="item">Four</span>
    <span class="item">Five</span>
    <span class="item">Six</span>
    <span class="item">Seven</span>
  </Switcher>
</Story>

<Story
  name="With no flexbox gap"
  let:args
  args={{ switcherSpace: 'var(--s-1)', switcherMinWidth: 'var(--measure)' }}
>
  <div class="no-flexbox-gap">
    <Switcher {...args}>
      <span class="item">Item</span>
      <span class="item">Item</span>
      <span class="item">Item</span>
    </Switcher>
  </div>
</Story>
