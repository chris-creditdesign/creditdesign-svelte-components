<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import { spaceOptions } from "../../preview-content/options.js";

  import StackList from "../index.svelte";

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

<Meta title="StackList" component={StackList} {argTypes} />

<Story name="Default" let:args args={{ stackSpace: 'var(--s-1)' }}>
  <StackList {...args}>
    <li class="item">Item</li>
    <li class="item">Item</li>
    <li class="item">Item</li>
    <li class="item">Item</li>
    <li class="item">Item</li>
  </StackList>
</Story>

<Story name="With Split after" let:args args={{ stackSpace: 'var(--s-1)' }}>
  <div class="test-container">
    <StackList {...args}>
      <li class="item">Item</li>
      <li class="item">Item</li>
      <li class="item">Item</li>
      <li class="item stack__split-after">.stack__split-after</li>
      <li class="item">Item</li>
    </StackList>
  </div>
</Story>

<Story name="With nested stacks" let:args args={{ stackSpace: 'var(--s3)' }}>
  <StackList {...args}>
    <li class="item">Item</li>
    <li class="item">Item</li>

    <li>
      <StackList stackSpace="var(--s-3)">
        <li class="item item--nested">Item</li>
        <li class="item item--nested">Item</li>
        <li class="item item--nested">Item</li>
        <li class="item item--nested">Item</li>
        <li class="item item--nested">Item</li>
      </StackList>
    </li>

    <li class="item">Item</li>
    <li class="item">Item</li>
    <li class="item">Item</li>
  </StackList>
</Story>

<Story name="With no flexbox gap" let:args args={{ stackSpace: 'var(--s-1)' }}>
  <div class="no-flexbox-gap">
    <StackList {...args}>
      <li class="item">Item</li>
      <li class="item">Item</li>
      <li class="item">Item</li>
      <li class="item">Item</li>
      <li class="item">Item</li>
    </StackList>
  </div>
</Story>
