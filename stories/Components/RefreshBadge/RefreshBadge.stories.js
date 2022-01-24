import { html } from 'lit-html';
//require('../../../node_modules/refresh-badge/src/refresh-badge');

export default {
  title: 'Components/RefreshBadge',
  addParameters: {
    actions: {
      handles: ['discoveryRetuxComponent'],
    },
  },
};

const Template = (args) => html`
    <p></p>
`;

export const SingleNews = Template.bind({});
SingleNews.args = {
  news: [{title: "some text"}]
};

export const MultipleNews = Template.bind({});
MultipleNews.args = {
  news: [{title: "some text"}, {title: "some text"}]
};
