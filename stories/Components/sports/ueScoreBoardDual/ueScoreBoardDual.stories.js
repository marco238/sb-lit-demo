import { html } from 'lit-html';
import '@unidad-editorial/ue-scoreboard-dual';

export default {
  title: 'Components/sports/ueScoreBoardDual/ueScoreBoardDual',
  argTypes: {
    
    typeCompetition: {
      name:'Competition',
      table: { disable: true },
      control: { type: 'select' },
      options: ['football', 'basketball', 'tennis', 'motor'],
    },
    team1Name: {
      name: 'Team 1 Name',
      table: { disable: true },
      type: { required: true }
    },
    team1Score: {
      name: 'Team 1 Score',
      table: { disable: true },
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
      table: { disable: true },
      type: { required: true }
    },
    team2Score: {
      name: 'Team 2 Score',
      table: { disable: true },
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
  const { team1Name, team1Score, team2Name, team2Score, typeCompetition} = args;
  return html`
  <ue-scoreboard-dual class="${typeCompetition}" match='{"homeTeam":{"name":"${team1Name}","score":${team1Score}},"awayTeam":{"name":"${team2Name}","score":${team2Score}}}'></ue-scoreboard-dual>
`};

export const RN = Template.bind({});
RN.args = {
  team1Name: "Barcelona",
  team1Score: 1,
  team2Name: "Atletic",
  team2Score: 0
};

export const RNA = Template.bind({});
RNA.args = {
  team1Name: "Barcelona",
  team1Score: 1,
  team2Name: "Atletic",
  team2Score: 0
};


export const RNB = Template.bind({});
RNB.args = {
  team1Name: "Barcelona",
  team1Score: 1,
  team2Name: "Atletic",
  team2Score: 0
};


export const RNC = Template.bind({});
RNC.args = {
  team1Name: "Barcelona",
  team1Score: 1,
  team2Name: "Atletic",
  team2Score: 0
};

