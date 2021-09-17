<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import {
    spaceOptions,
    justifyContentOptions,
    alignItemsOptions,
  } from "../../preview-content/options.js";

  import Cluster from "../index.svelte";

  let argTypes = {
    clusterSpace: { control: { type: "select", options: spaceOptions } },
    clusterJustifyContent: {
      control: { type: "select", options: justifyContentOptions },
    },
    alignItems: { control: { type: "select", options: alignItemsOptions } },
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

  .item.item--short {
    height: 50px;
  }

  .item.item--tall {
    height: 150px;
  }

  .cluster__grow {
    background-color: pink;
  }

</style>

<Meta title="Cluster" component={Cluster} {argTypes} />

<Story
  name="Default"
  let:args
  args={{ clusterSpace: 'var(--s-1)', clusterJustifyContent: 'flex-start', alignItems: 'center' }}
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
  args={{ clusterSpace: 'var(--s-1)', clusterJustifyContent: 'flex-start', alignItems: 'center' }}
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
  name="With items of different heights"
  let:args
  args={{ clusterSpace: 'var(--s-1)', clusterJustifyContent: 'flex-start', alignItems: 'center' }}
>
  <Cluster {...args}>
    <span class="item item--tall">Item</span>
    <span class="item item--short">Item</span>
    <span class="item">Item</span>
    <span class="item">Item</span>
    <span class="item">Item</span>
    <span class="item item--short">Item</span>
    <span class="item">Item</span>
  </Cluster>
</Story>

<Story
  name="Combine two Cluster elements"
  let:args
  args={{ clusterSpace: 'var(--s-1)', clusterJustifyContent: 'flex-start', alignItems: 'center' }}
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
  args={{ clusterSpace: 'var(--s-1)', clusterJustifyContent: 'flex-start', alignItems: 'center' }}
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
  args={{ clusterSpace: 'var(--s-1)', clusterJustifyContent: 'flex-start', alignItems: 'center' }}
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
