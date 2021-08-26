<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import Stack from "../../Stack/index.svelte";
  import {
    spaceOptions,
    measureOptions,
  } from "../../preview-content/options.js";

  import Center from "../index.svelte";

  let argTypes = {
    centerSpace: { control: { type: "select", options: spaceOptions } },
    centerMeasure: { control: { type: "select", options: measureOptions } },
    intrinsicallyCenter: { control: { type: "boolean" } },
  };

</script>

<style>
  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: none;
    min-height: 100px;
    padding: var(--s1);
    background-color: lightblue;
  }

  .item:not(:first-child) {
    margin-top: var(--s-1);
  }

  .item--small {
    width: max-content;
    background-color: lightgray;
  }

</style>

<Meta title="Center" component={Center} {argTypes} />

<Story
  name="Default"
  let:args
  args={{ centerSpace: 'var(--s-1)', centerMeasure: 'var(--measure)', intrinsicallyCenter: false }}
>
  <Center {...args}><span class="item">Item</span></Center>
</Story>

<Story
  name="With stack of content"
  let:args
  args={{ centerSpace: 'var(--s-1)', centerMeasure: 'var(--measure)', intrinsicallyCenter: false }}
>
  <Center {...args}>
    <span class="item">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Beatae quam architecto delectus voluptatibus exercitationem asperiores
      recusandae, accusamus est numquam incidunt, ullam suscipit, odit error
      quaerat provident fuga itaque magni aspernatur.</span>
    <span class="item">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Beatae quam architecto delectus voluptatibus exercitationem asperiores
      recusandae, accusamus est numquam incidunt, ullam suscipit, odit error
      quaerat provident fuga itaque magni aspernatur.</span>
    <span class="item item--small">Less wide item</span>
    <span class="item">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Beatae quam architecto delectus voluptatibus exercitationem asperiores
      recusandae, accusamus est numquam incidunt, ullam suscipit, odit error
      quaerat provident fuga itaque magni aspernatur.</span>
    <span class="item">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Beatae quam architecto delectus voluptatibus exercitationem asperiores
      recusandae, accusamus est numquam incidunt, ullam suscipit, odit error
      quaerat provident fuga itaque magni aspernatur.</span>
  </Center>
</Story>

<Story
  name="With intrinsic centering"
  let:args
  args={{ centerSpace: 'var(--s-1)', centerMeasure: 'var(--measure)', intrinsicallyCenter: true }}
>
  <Center {...args}>
    <span class="item">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Beatae quam architecto delectus voluptatibus exercitationem asperiores
      recusandae, accusamus est numquam incidunt, ullam suscipit, odit error
      quaerat provident fuga itaque magni aspernatur.</span>
    <span class="item">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Beatae quam architecto delectus voluptatibus exercitationem asperiores
      recusandae, accusamus est numquam incidunt, ullam suscipit, odit error
      quaerat provident fuga itaque magni aspernatur.</span>
    <span class="item item--small">Less wide item</span>
    <span class="item">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Beatae quam architecto delectus voluptatibus exercitationem asperiores
      recusandae, accusamus est numquam incidunt, ullam suscipit, odit error
      quaerat provident fuga itaque magni aspernatur.</span>
    <span class="item">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Beatae quam architecto delectus voluptatibus exercitationem asperiores
      recusandae, accusamus est numquam incidunt, ullam suscipit, odit error
      quaerat provident fuga itaque magni aspernatur.</span>
  </Center>
</Story>
