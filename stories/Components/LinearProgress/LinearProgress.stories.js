import { html } from 'lit-html';
import '@material/mwc-linear-progress';

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: 'Lit Components/LinearProgress',
  argTypes: {
    progress: {
        control: {
            type: 'number',
            min: 0,
            max: 1,
            step: 0.05
        }
    },
  }
};

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template = (args) => html`
    <style>
        div {
            width: 500px;
        }
        
        mwc-linear-progress {
            margin: 50px;
            --mdc-theme-primary: ${args.primaryColor};
            --mdc-linear-progress-buffer-color: ${args.secundaryColor};
        }
    </style>
    <div>
        <mwc-linear-progress ?indeterminate=${args.indeterminate} progress="${args.progress}"></mwc-linear-progress>
    </div>
`;

export const Progress = Template.bind({});
// More on args: https://storybook.js.org/docs/web-components/writing-stories/args
Progress.args = {
  progress: 0.75,
  indeterminate: false,
  primaryColor: '#1EA8FD',
  secundaryColor: 'rgba(0, 0, 0, 0.1)'
};

export const Indeterminate = Template.bind({});
// More on args: https://storybook.js.org/docs/web-components/writing-stories/args
Indeterminate.args = {
  progress: 0.75,
  indeterminate: true,
  primaryColor: '#1EA8FD',
  secundaryColor: 'rgba(0, 0, 0, 0.1)'
};