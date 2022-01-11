import { html } from 'lit-html';
import './refresh-badge';

export default {
  title: 'Components/RefreshBadge'
};

const Template = (args) => html`
    <refresh-badge .news=${args.news}></refresh-badge>
`;

export const SingleNews = Template.bind({});
SingleNews.args = {
  news: [{title: "some text"}]
};

export const MultipleNews = Template.bind({});
MultipleNews.args = {
  news: [{title: "some text"}, {title: "some text"}]
};
