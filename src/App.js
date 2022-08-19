import './App.css';
import React, { useState } from 'react';
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';
import { Chart, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

Chart.register(ArcElement, Tooltip);

const BudgetSlider = withStyles({
	root: {
		color: '#682AEB',
		height: 4,
		width: 200,
		margin: '0px 20px',
	},
	thumb: {
		height: 25,
		width: 25,
		backgroundColor: 'white',
		border: '2px solid #682AEB',
		top: '20%',
	},
	track: { height: 4, borderRadius: 4 },
	rail: { height: 4, borderRadius: 4 },
})(Slider);

function App() {
	const [details, setDetails] = useState({
		ticket: 50,
		dress: 150,
		shoes: 45,
		accessories: 0,
		nails: 30,
		hair: 30,
		corsage: 30,
	});

	const max = 200;
	const min = 0;

	const handleChange = (e) => {
		const name = e.target.name;
		const element = document.getElementById(`${name}-error`);
		const curVal = Math.max(min, Math.min(max, Number(e.target.value)));
		const values = e.target.value;

		if (values === '' || values === null) {
			values = '';
		}
		if (values > 200) {
			element.innerHTML = 'Please enter a value less than 200';
			element.classList.add('error');
		} else {
			element.innerHTML = '';
			element.classList.remove('error');
		}

		setDetails((prev) => {
			return { ...prev, [name]: curVal };
		});
	};

	const data = {
		labels: [
			'Ticket',
			'Dress',
			'Shoes',
			'Accessories',
			'Nails',
			'Hair',
			'Corsage',
		],
		display: false,
		datasets: [
			{
				label: 'Amount of $',
				data: [
					details.ticket,
					details.dress,
					details.shoes,
					details.accessories,
					details.nails,
					details.hair,
					details.corsage,
				],
				borderColor: ['rgba(255,206,86,0.2)'],
				backgroundColor: [
					'rgba(238, 130, 238)',
					'rgba(255, 0, 0)',
					'rgba(54,162,235,1)',
					'rgba(60, 179, 113)',
					'rgba(153,102,255,1)',
					'rgba(255, 165, 0)',
					'rgba(60, 179, 113)',
				],
				pointBackgroundColor: 'rgba(255,206,86,0.2)',
			},
		],
	};

	const totalAmount =
		details.ticket +
		details.dress +
		details.shoes +
		details.accessories +
		details.nails +
		details.hair +
		details.corsage;

	return (
		<div className='App'>
			<div className='budgetCal-container'>
				<div className='budgetCal'>
					<h1>Homecoming Budget Calculator</h1>
					<div className='input-container'>
						<div className='input'>
							<h2>Ticket (Football Game & Dance)</h2>
							<div className='money-sign'>$</div>
							<input
								name='ticket'
								type='number'
								value={details.ticket}
								onChange={handleChange}
							></input>
							<div id='ticket-error' />
						</div>
						<div className='slider'>
							$0
							<BudgetSlider
								value={details.ticket}
								onChange={(e, value) =>
									setDetails((prev) => {
										return { ...prev, ticket: value };
									})
								}
								max={max}
							/>
							$200
						</div>
					</div>
					<div className='input-container'>
						<div className='input'>
							<h2>HOCO Dress</h2>
							<span className='money-sign'>$</span>
							<input
								name='dress'
								type='number'
								value={details.dress}
								onChange={handleChange}
							></input>
							<div id='dress-error'></div>
						</div>
						<div className='slider'>
							$0
							<BudgetSlider
								value={details.dress}
								onChange={(e, value) =>
									setDetails((prev) => {
										return { ...prev, dress: value };
									})
								}
								defaultValue={details.dress}
								max={max}
							/>
							$200
						</div>
					</div>
					<div className='input-container'>
						<div className='input'>
							<h2>Shoes</h2>
							<span className='money-sign'>$</span>
							<input
								name='shoes'
								type='number'
								value={details.shoes}
								onChange={handleChange}
							></input>
							<div id='shoes-error'></div>
						</div>
						<div className='slider'>
							$0
							<BudgetSlider
								value={details.shoes}
								defaultValue={details.shoes}
								max={max}
								onChange={(e, value) =>
									setDetails((prev) => {
										return { ...prev, shoes: value };
									})
								}
							/>
							$200
						</div>
					</div>
					<div className='input-container'>
						<div className='input'>
							<h2>Accessories (Jewelry/Purse)</h2>
							<span className='money-sign'>$</span>
							<input
								name='accessories'
								type='number'
								value={details.accessories}
								onChange={handleChange}
							></input>
							<div id='accessories-error'></div>
						</div>
						<div className='slider'>
							$0
							<BudgetSlider
								value={details.accessories}
								onChange={(e, value) =>
									setDetails((prev) => {
										return { ...prev, accessories: value };
									})
								}
								defaultValue={details.accessories}
								max={max}
							/>
							$200
						</div>
					</div>
					<div className='input-container'>
						<div className='input'>
							<h2>Nails</h2>
							<span className='money-sign'>$</span>
							<input
								name='nails'
								type='number'
								value={details.nails}
								onChange={handleChange}
							></input>
							<div id='nails-error'></div>
						</div>
						<div className='slider'>
							$0
							<BudgetSlider
								value={details.nails}
								onChange={(e, value) =>
									setDetails((prev) => {
										return { ...prev, nails: value };
									})
								}
								defaultValue={details.nails}
								max={max}
							/>
							$200
						</div>
					</div>
					<div className='input-container'>
						<div className='input'>
							<h2>Hair/Makeup</h2>
							<span className='money-sign'>$</span>
							<input
								name='hair'
								type='number'
								value={details.hair}
								onChange={handleChange}
							></input>
							<div id='hair-error'></div>
						</div>
						<div className='slider'>
							$0
							<BudgetSlider
								value={details.hair}
								onChange={(e, value) =>
									setDetails((prev) => {
										return { ...prev, hair: value };
									})
								}
								defaultValue={details.hair}
								max={max}
							/>
							$200
						</div>
					</div>
					<div className='input-container'>
						<div className='input'>
							<h2>Corsage & Boutonniere</h2>
							<span className='money-sign'>$</span>
							<input
								name='corsage'
								type='number'
								value={details.corsage}
								onChange={handleChange}
							></input>
							<div id='corsage-error'></div>
						</div>
						<div className='slider'>
							$0
							<BudgetSlider
								value={details.corsage}
								onChange={(e, value) =>
									setDetails((prev) => {
										return { ...prev, corsage: value };
									})
								}
								defaultValue={details.corsage}
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
						<Doughnut data={data} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
