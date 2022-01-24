import { html } from 'lit-html';
import '../../../node_modules/@unidad-editorial/ue-scoreboard-dual';

export default {
  title: 'Components/ueScoreBoardDual',
  argTypes: {
    typeCompetition: {
      name:'Competition',
      control: { type: 'select' },
      options: ['Football', 'Basket', 'Tennis', 'Motor'],
    },
    team1Name: {
      name: 'Team 1 Name',
      type: { required: true }
    },
    team1Score: {
      name: 'Team 1 Score',
      type: { required: true },
      control: {
        type: 'number',
        min: 0,
        max: 200,
        step: 1
      }
    },

    team2Name: {
      name: 'Team 2 Name',
      type: { required: true }
    },
    team2Score: {
      name: 'Team 2 Score',
      type: { required: true },
      control: {
        type: 'number',
        min: 0,
        max: 200,
        step: 1
      }
    }
  }
};

const Template = (args) => {
  const { team1Name, team1Score, team2Name, team2Score} = args;
  return html`
  <ue-scoreboard-dual  match='{"homeTeam":{"name":"${team1Name}","score":${team1Score}},"awayTeam":{"name":"${team2Name}","score":${team2Score}}}'></ue-scoreboard-dual>
`};

export const Dual = Template.bind({});
Dual.args = {
  team1Name: "Barcelona",
  team1Score: 1,
  team2Name: "Atletic",
  team2Score: 0
};

