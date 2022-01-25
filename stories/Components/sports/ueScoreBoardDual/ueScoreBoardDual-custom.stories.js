import { html } from 'lit-html';
import '@unidad-editorial/ue-scoreboard-dual';

export default {
	title: 'Components/sports/ueScoreBoardDual/ueScoreBoardDual Custom',
	argTypes: {
		// typeCompetition: {
		//   name:'Competition',
		//   control: { type: 'select' },
		//   options: ['football', 'basketball', 'tennis', 'motor'],
		// },
		separator: {
			type: { required: false },
			control: {
				type: 'text'
			}
		},
		homeTeam: {
			name: 'Team 1 Name',
			type: { required: true },
			table: { disable: false }
		},
		homeTeamScore: {
			name: 'Team 1 Score',
			type: { required: true },
			table: { disable: false },
			control: {
				type: 'number',
				min: 0,
				max: 200,
				step: 1
			}
		},

		awayTeam: {
			name: 'Team 2 Name',
			type: { required: true },
			table: { disable: false }
		},
		awayTeamScore: {
			name: 'Team 2 Score',
			type: { required: true },
			table: { disable: false },
			control: {
				type: 'number',
				min: 0,
				max: 200,
				step: 1
			}
		},
		stat: {
			label: 'Status match',
			description: 'Status match',
			control: {
				type: 'number',
				min: 0,
				max: 6,
				step: 1
			}
		}
	}
};

const Template = (arg) => {
	const { homeTeam, homeTeamScore, awayTeam, awayTeamScore, stat, startDateConfirmed, separator } = arg;
	return html`
  	<ue-scoreboard-dual style="display:block; max-width:750px; margin: 0 auto;" class="ue-c-scoreboard-dual--medium" separator="${separator}" match='{
        "homeTeam": {
            "name": "${homeTeam}",
            "score": ${homeTeamScore},
            "img": [{"url": "./sports/img/barcelona.svg", "size": "144"}]
        },
        "awayTeam": {
            "name": "${awayTeam}",
            "score": ${awayTeamScore},
            "img": [{"url": "./sports/img/realmadrid.svg", "size": "144"}]
        },
        "tv":[
            {"name":"BEIN TV"},
            {"name":"Antena 3"}
        ],
        "status": {"id": ${stat}},
        "startDateConfirmed": ${startDateConfirmed},
        "startTime": "18:15",
        "url": "www.marca.com"
    }'></ue-scoreboard-dual>
	`;
};

export const Demo = Template.bind({});
Demo.args = {
	homeTeam: "Barcelona",
	homeTeamScore: 1,
	awayTeam: "Real Madrid",
	awayTeamScore: 0,
	stat: 0,
	startDateConfirmed: true,
	separator: 'vs.'
};
