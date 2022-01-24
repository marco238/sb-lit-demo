import { addons } from '@storybook/addons';
import ueTheme from './ueTheme';

addons.setConfig({
  panelPosition: 'right',
  theme: ueTheme,
  toolbar: {
    zoom: { hidden: true }
  },
});