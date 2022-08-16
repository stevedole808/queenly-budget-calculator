import './App.css';
import React, { useState } from 'react';
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';
import { Chart, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

Chart.register(ArcElement);

const BudgetSlider = withStyles({
	root: { color: '#682AEB', height: 4, width: 200, margin: '0px 10px' },
	thumb: {
		height: 25,
		width: 25,
		backgroundColor: 'white',
		border: '2px solid #682AEB',
		top: '20%',
	},
	track: { height: 4, borderRadius: 4 },
	rail: { height: 4, borderRadius: 4 },
	// '@media only screen and (max-width: 600px)': {
	// 	thumb: {
	// 		top: '30%',
	// 	},
	// },
})(Slider);

function App() {
	const [ticket, setTicketAmount] = useState(50);
	const [dress, setDressAmount] = useState(150);
	const [shoes, setShoesAmount] = useState(45);
	const [accessories, setAccessoriesAmount] = useState(0);
	const [nails, setNailsAmount] = useState(30);
	const [hair, setHairAmount] = useState(30);
	const [corsage, setCorsageAmount] = useState(30);
	const [total, setTotal] = useState(
		ticket + dress + shoes + accessories + nails + hair + corsage
	);
	const [error, setError] = useState('');

	const max = 200;
	const min = 0;

	console.log(total);

	const data = {
		labels: ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri'],
		datasets: [
			{
				label: 'Attendance for Week 1',
				data: [ticket, dress, shoes, accessories, nails, hair, corsage],
				borderColor: ['rgba(255,206,86,0.2)'],
				backgroundColor: [
					'rgba(238, 130, 238)',
					'rgba(255, 0, 0)',
					'rgba(54,162,235,1)',
					'rgba(60, 179, 113)',
					'rgba(153,102,255,1)',
					'rgba(000,000,000,0)',
					'rgba(0, 0, 0, 0.5)',
				],
				// pointBackgroundColor: 'rgba(255,206,86,0.2)',
			},
		],
	};

	const options = {
		plugins: {
			title: {
				display: true,
				text: 'Doughnut Chart',
				color: 'blue',
				font: {
					size: 34,
				},
				padding: {
					top: 30,
					bottom: 30,
				},
				responsive: true,
				animation: {
					animateScale: true,
				},
			},
		},
	};

	const totalAmount =
		ticket + dress + shoes + accessories + nails + hair + corsage;
	// const handleSliderChange = (e, value) => {
	// 	setTicketAmount(value);
	// };

	// const handleInputChange = (e, value) => {
	// 	setTicketAmount(e.target.value === '' ? '' : Number(e.target.value));
	// };

	const target = (e) => (e.target.value === '' ? '' : Number(e.target.value));
	const ticketDiv = document.querySelector('.input');

	console.log(ticketDiv);

	// const handleChange = (e) => {
	// 	let value = Math.max(min, Math.min(max, Number(e.target.value)));
	// 	if (e.target.value === '') {
	// 		e.target.value = '';
	// 	} else {
	// 		e.target.value = Number(value);
	// 	}
	// 	setTicketAmount(value);
	// };

	const handleChange = (e) => {
		let html = '<div className="error" >yes</div>';
		let value = Math.max(min, Math.min(max, Number(e.target.value)));
		console.log(e.target.value);
		if (e.target.value === '') {
			e.target.value = '';
		} else {
			if (e.target.value > 200) {
				ticketDiv.innerHTML += html;
			}
			e.target.value = Number(value);
		}
		setTicketAmount(value);
	};

	// const validate = (values) => {
	// 	const errors = {};
	// 	const regex = /[^0-9.]/g;

	// 	if (values > 200 || values < 1) {
	// 	}
	// };

	return (
		<div className='App'>
			<div className='budgetCal-container'>
				<div className='budgetCal'>
					<h1>Homecoming Budget Calculator</h1>
					<div className='input-container'>
						<div className='input ticket'>
							<h2>Ticket (Football Game & Dance)</h2>
							<input
								value={ticket}
								// defaultValue={ticket}
								type='number'
								className='value'
								onChange={handleChange}
							></input>
						</div>
						<div className='slider'>
							$0
							<BudgetSlider
								value={ticket}
								onChange={(e, value) => {
									setTicketAmount(value);
								}}
								defaultValue={ticket}
								max={max}
							/>
							$200
						</div>
					</div>
					<div className='input-container'>
						<div className='input'>
							<h2>HOCO Dress</h2>
							<input
								value={dress}
								onChange={(e, value) => {
									setDressAmount(target(e));
								}}
							/>
						</div>
						<div className='slider'>
							$0
							<BudgetSlider
								value={dress}
								onChange={(e, value) => setDressAmount(value)}
								defaultValue={dress}
								max={max}
							/>
							$200
						</div>
					</div>
					<div className='input-container'>
						<div className='input'>
							<h2>Shoes</h2>
							<input
								value={shoes}
								onChange={(e, value) => {
									setShoesAmount(target(e));
								}}
							/>
						</div>
						<div className='slider'>
							$0
							<BudgetSlider
								value={shoes}
								defaultValue={shoes}
								max={max}
								onChange={(e, value) => setShoesAmount(value)}
							/>
							$200
						</div>
					</div>
					<div className='input-container'>
						<div className='input'>
							<h2>Accessories (Jewelry/Purse)</h2>
							<input
								value={accessories}
								onChange={(e, value) => setAccessoriesAmount(target(e))}
							/>
						</div>
						<div className='slider'>
							$0
							<BudgetSlider
								value={accessories}
								onChange={(e, value) => {
									setAccessoriesAmount(value);
								}}
								defaultValue={accessories}
								max={max}
							/>
							$200
						</div>
					</div>
					<div className='input-container'>
						<div className='input'>
							<h2>Nails</h2>
							<input
								value={nails}
								onChange={(e, value) => setNailsAmount(target(e))}
							/>
						</div>
						<div className='slider'>
							$0
							<BudgetSlider
								value={nails}
								onChange={(e, value) => {
									setNailsAmount(value);
								}}
								defaultValue={nails}
								max={max}
							/>
							$200
						</div>
					</div>
					<div className='input-container'>
						<div className='input'>
							<h2>Hair/Makeup</h2>
							<input
								value={hair}
								onChange={(e, value) => setHairAmount(target(e))}
							/>
						</div>
						<div className='slider'>
							$0
							<BudgetSlider
								value={hair}
								onChange={(e, value) => {
									setHairAmount(value);
								}}
								defaultValue={hair}
								max={max}
							/>
							$200
						</div>
					</div>
					<div className='input-container'>
						<div className='input'>
							<h2>Corsage & Boutonniere</h2>
							<input
								value={corsage}
								onChange={(e, value) => setCorsageAmount(target(e))}
							/>
						</div>
						<div className='slider'>
							$0
							<BudgetSlider
								value={corsage}
								onChange={(e, value) => {
									setCorsageAmount(value);
								}}
								defaultValue={corsage}
								max={max}
							/>
							$200
						</div>
					</div>
				</div>
				<div className='chart'>
					<h2>Your total expenses for homecoming</h2>
					<div className='doughnut-chart'>
						<span>${totalAmount}</span>
						<Doughnut data={data} options={options} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
