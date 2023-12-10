import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

import logo from "./public/logo.png";

// @ts-expect-error - `base` is required, although theme works without it: https://github.com/storybookjs/storybook/issues/23065
const theme = create({
  brandImage: logo,
});

addons.setConfig({ theme });
