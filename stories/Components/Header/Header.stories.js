import { Header } from './Header';

export default {
  title: 'Components/Header',
};

const Template = (args) => Header(args);

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
