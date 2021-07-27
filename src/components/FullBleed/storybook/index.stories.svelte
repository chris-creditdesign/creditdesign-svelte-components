<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import {
    spaceOptions,
    measureOptions,
  } from "../../preview-content/options.js";

  import FullBleed from "../index.svelte";

  let argTypes = {
    fullBleedMeasure: { control: { type: "select", options: measureOptions } },
    fullBleedSideSpace: { control: { type: "select", options: spaceOptions } },
    fullBleedStackSpace: { control: { type: "select", options: spaceOptions } },
  };

</script>

<style>
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: none;
    min-height: 100px;
    background-color: lightblue;
  }

  span:nth-child(2n) {
    background-color: pink;
  }

  img {
    max-width: 100%;
  }

</style>

<Meta title="FullBleed" component={FullBleed} {argTypes} />

<Story
  name="Default"
  let:args
  args={{ fullBleedMeasure: 'var(--measure)', fullBleedSideSpace: 'var(--s-1)', fullBleedStackSpace: 'var(--s-1)' }}
>
  <FullBleed {...args}>
    <span>Item</span>
    <span class="full-bleed">.full-bleed</span>
    <span>Item</span>
    <span class="full-bleed--2">.full-bleed--2</span>
    <span>Item</span>
    <span class="full-bleed--3">.full-bleed--3</span>
    <span>Item</span>
    <span class="full-bleed--4">.full-bleed--4</span>
    <span>Item</span>
    <span class="full-bleed--left">.full-bleed--left</span>
    <span>Item</span>
    <span class="full-bleed--left-2">.full-bleed--left-2</span>
    <span>Item</span>
    <span class="full-bleed--left-3">.full-bleed--left-3</span>
    <span>Item</span>
    <span class="full-bleed--left-4">.full-bleed--left-4</span>
    <span>Item</span>
    <span class="full-bleed--right">.full-bleed--right</span>
    <span>Item</span>
    <span class="full-bleed--right-2">.full-bleed--right-2</span>
    <span>Item</span>
    <span class="full-bleed--right-3">.full-bleed--right-3</span>
    <span>Item</span>
    <span class="full-bleed--right-4">.full-bleed--right-4</span>
    <span>Item</span>
  </FullBleed>
</Story>

<Story
  name="With text and images"
  let:args
  args={{ fullBleedMeasure: 'var(--measure)', fullBleedSideSpace: 'var(--s-1)', fullBleedStackSpace: 'var(--s-1)' }}
>
  <FullBleed {...args}>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo vitae
      explicabo quam reprehenderit. Atque autem, aspernatur facilis dolorum,
      nisi, eum ipsa illum mollitia sed at laudantium quas voluptatem incidunt
      qui?
    </p>
    <img class="full-bleed--4" src="img/image.jpg" alt="test" />
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo vitae
      explicabo quam reprehenderit. Atque autem, aspernatur facilis dolorum,
      nisi, eum ipsa illum mollitia sed at laudantium quas voluptatem incidunt
      qui?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo vitae
      explicabo quam reprehenderit. Atque autem, aspernatur facilis dolorum,
      nisi, eum ipsa illum mollitia sed at laudantium quas voluptatem incidunt
      qui?
    </p>
  </FullBleed>
</Story>
