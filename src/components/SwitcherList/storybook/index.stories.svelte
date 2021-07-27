<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import {
    spaceOptions,
    measureOptions,
  } from "../../preview-content/options.js";

  import SwitcherList from "../index.svelte";

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

<Meta title="SwitcherList" component={SwitcherList} {argTypes} />

<Story
  name="Default"
  let:args
  args={{ switcherSpace: 'var(--s-1)', switcherMinWidth: 'var(--measure)' }}
>
  <SwitcherList {...args}>
    <li class="item">List item</li>
    <li class="item">List item</li>
    <li class="item">List item</li>
  </SwitcherList>
</Story>

<Story
  name="With eight items"
  let:args
  args={{ switcherSpace: 'var(--s-1)', switcherMinWidth: 'var(--measure)' }}
>
  <SwitcherList {...args}>
    <li class="item">List item one</li>
    <li class="item">List item two</li>
    <li class="item">List item three</li>
    <li class="item">List item four</li>
    <li class="item">List item five</li>
    <li class="item">List item six</li>
    <li class="item">List item seven</li>
    <li class="item">List item eight</li>
  </SwitcherList>
</Story>

<Story
  name="With seven items"
  let:args
  args={{ switcherSpace: 'var(--s-1)', switcherMinWidth: 'var(--measure)' }}
>
  <SwitcherList {...args}>
    <li class="item">List item one</li>
    <li class="item">List item two</li>
    <li class="item">List item three</li>
    <li class="item">List item four</li>
    <li class="item">List item five</li>
    <li class="item">List item six</li>
    <li class="item">List item seven</li>
  </SwitcherList>
</Story>

<Story
  name="With no flexbox gap"
  let:args
  args={{ switcherSpace: 'var(--s-1)', switcherMinWidth: 'var(--measure)' }}
>
  <div class="no-flexbox-gap">
    <SwitcherList {...args}>
      <li class="item">List item</li>
      <li class="item">List item</li>
      <li class="item">List item</li>
    </SwitcherList>
  </div>
</Story>
