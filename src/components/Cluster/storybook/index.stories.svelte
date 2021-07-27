<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import {
    spaceOptions,
    justifyContentOptions,
  } from "../../preview-content/options.js";

  import Cluster from "../index.svelte";

  let argTypes = {
    clusterSpace: { control: { type: "select", options: spaceOptions } },
    clusterJustifyContent: {
      control: { type: "select", options: justifyContentOptions },
    },
  };

</script>

<style>
  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    background-color: lightblue;
  }

  .cluster__grow {
    background-color: pink;
  }

</style>

<Meta title="Cluster" component={Cluster} {argTypes} />

<Story
  name="Default"
  let:args
  args={{ clusterSpace: 'var(--s-1)', clusterJustifyContent: 'flex-start' }}
>
  <Cluster {...args}>
    <span class="item">Item</span>
    <span class="item">Item</span>
    <span class="item">Item</span>
    <span class="item">Item</span>
    <span class="item">Item</span>
    <span class="item">Item</span>
    <span class="item">Item</span>
  </Cluster>
</Story>

<Story
  name="With a cluster__grow child element"
  let:args
  args={{ clusterSpace: 'var(--s-1)', clusterJustifyContent: 'flex-start' }}
>
  <Cluster {...args}>
    <span class="item cluster__grow">Item</span>
    <span class="item">Item</span>
    <span class="item">Item</span>
    <span class="item">Item</span>
    <span class="item">Item</span>
    <span class="item">Item</span>
    <span class="item">Item</span>
  </Cluster>
</Story>

<Story
  name="Combine two Cluster elements"
  let:args
  args={{ clusterSpace: 'var(--s-1)', clusterJustifyContent: 'flex-start' }}
>
  <Cluster clusterJustifyContent="space-between">
    <span class="item">Item</span>
    <Cluster {...args}>
      <span class="item">Item</span>
      <span class="item">Item</span>
      <span class="item">Item</span>
      <span class="item">Item</span>
      <span class="item">Item</span>
      <span class="item">Item</span>
    </Cluster>
  </Cluster>
</Story>

<Story
  name="With focusable child elements"
  let:args
  args={{ clusterSpace: 'var(--s-1)', clusterJustifyContent: 'flex-start' }}
>
  <Cluster {...args}>
    <a class="item" href="https://www.nature.com">Item</a>
    <a class="item" href="https://www.nature.com">Item</a>
    <a class="item" href="https://www.nature.com">Item</a>
    <a class="item" href="https://www.nature.com">Item</a>
    <a class="item" href="https://www.nature.com">Item</a>
    <a class="item" href="https://www.nature.com">Item</a>
    <a class="item" href="https://www.nature.com">Item</a>
  </Cluster>
</Story>

<Story
  name="With no flexbox gap"
  let:args
  args={{ clusterSpace: 'var(--s-1)', clusterJustifyContent: 'flex-start' }}
>
  <div class="no-flexbox-gap">
    <Cluster {...args}>
      <span class="item">Item</span>
      <span class="item">Item</span>
      <span class="item">Item</span>
      <span class="item">Item</span>
      <span class="item">Item</span>
      <span class="item">Item</span>
      <span class="item">Item</span>
    </Cluster>
  </div>
</Story>
