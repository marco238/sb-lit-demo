import { html } from 'lit-html';
import '@unidad-editorial/ue-table-ranking'

export default {
	title: 'Components/sports/ueTableRanking/ueTableRanking',
	argTypes: {
		typeCompetition: {
			name: 'Competition',
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
	const { team1Name, team1Score, team2Name, team2Score, typeCompetition } = args;
	return html`
  <ue-table-ranking 
    table-ranking-url="https://api.unidadeditorial.es/sports/v1/classifications/current/?site=2&amp;type=10&amp;tournament=0101" 
    filter-base-url="https://components.unidadeditorial.es/visual/sports/ueTableRanking/v4/config/filters/" 
    sport="football" 
    id-team="186" 
    num-teams-show="4" lang="esES" filter-name="extended" 
    show-group-name="true">
  </ue-table-ranking>
`};

export const Demo = Template.bind({});
Demo.args = {
	team1Name: "Barcelona",
	team1Score: 1,
	team2Name: "Atletic",
	team2Score: 0
};
