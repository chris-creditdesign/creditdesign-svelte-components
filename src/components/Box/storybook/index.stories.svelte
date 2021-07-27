<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import { spaceOptions } from "../../preview-content/options.js";

  import Box from "../index.svelte";

  let argTypes = {
    boxSpace: { control: { type: "select", options: spaceOptions } },
  };

</script>

<style>
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: none;
    height: 100px;
    background-color: lightblue;
  }

</style>

<Meta title="Box" component={Box} {argTypes} />

<Story name="Default" let:args args={{ boxSpace: 'var(--s-1)' }}>
  <Box {...args}><span>Item</span></Box>
</Story>
