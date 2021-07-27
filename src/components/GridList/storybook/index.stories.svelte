<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import {
    spaceOptions,
    measureOptions,
  } from "../../preview-content/options.js";

  import GridList from "../index.svelte";

  let argTypes = {
    gridColumnSpace: { control: { type: "select", options: spaceOptions } },
    gridRowSpace: { control: { type: "select", options: spaceOptions } },
    gridSpace: { control: { type: "select", options: spaceOptions } },
    minWidth: { control: { type: "select", options: measureOptions } },
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

<Meta title="GridList" component={GridList} {argTypes} />

<Story
  name="Default"
  let:args
  args={{ gridColumnSpace: 'var(--s-1)', gridRowSpace: 'var(--s-1)', gridSpace: '', minWidth: 'var(--measure-small)' }}
>
  <GridList {...args}>
    <li class="item">List item</li>
    <li class="item">List item</li>
    <li class="item">List item</li>
    <li class="item">List item</li>
    <li class="item">List item</li>
    <li class="item">List item</li>
    <li class="item">List item</li>
  </GridList>
</Story>
