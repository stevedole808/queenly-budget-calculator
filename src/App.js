import './App.css';
import React, { useState } from 'react';
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';

const BudgetSlider = withStyles({
	root: { color: '#682AEB', height: 4, width: 200, margin: '0px 10px' },
	thumb: {
		height: 25,
		width: 25,
		backgroundColor: 'white',
		border: '2px solid #682AEB',
		top: '15px',
	},
	track: { height: 4, borderRadius: 4 },
	rail: { height: 4, borderRadius: 4 },
})(Slider);

function App() {
	const [total, setTotal] = useState(0);
	const [ticket, setTicketAmount] = useState(50);
	const [dress, setDressAmount] = useState(150);
	const [shoes, setShoesAmount] = useState(45);
	const [accessories, setAccessoriesAmount] = useState(0);
	const [nails, setNailsAmount] = useState(30);
	const [hair, setHairAmount] = useState(30);
	const [corsage, setCorsageAmount] = useState(30);
	const maxValue = 200;

	const totalAmount =
		ticket + dress + shoes + accessories + nails + hair + corsage;

	return (
		<div className='App'>
			<div className='budgetCal'>
				<h2>Homecoming Budget Calculator</h2>
				<div className='input-container'>
					<div className='input'>
						<h2>Ticket (Football Game & Dance)</h2>
						<input value={`$${ticket}`}></input>
					</div>
					<div className='slider'>
						$0
						<BudgetSlider
							value={ticket}
							onChange={(e, value) => {
								setTicketAmount(value);
							}}
							defaultValue={ticket}
							max={maxValue}
						/>
						$200
					</div>
				</div>
				<div className='input-container'>
					<div className='input'>
						<h2>HOCO Dress</h2>
						<input value={dress} />
					</div>
					<div className='slider'>
						$0
						<BudgetSlider
							value={dress}
							onChange={(e, value) => {
								setDressAmount(value);
							}}
							defaultValue={dress}
							max={maxValue}
						/>
						$200
					</div>
				</div>
				<div className='input-container'>
					<div className='input'>
						<h2>Shoes</h2>
						<input value={shoes} />
					</div>
					<div className='slider'>
						$0
						<BudgetSlider
							value={shoes}
							onChange={(e, value) => {
								setShoesAmount(value);
							}}
							defaultValue={shoes}
							max={maxValue}
						/>
						$200
					</div>
				</div>
				<div className='input-container'>
					<div className='input'>
						<h2>Accessories (Jewelry/Purse)</h2>
						<input value={accessories} />
					</div>
					<div className='slider'>
						$0
						<BudgetSlider
							value={accessories}
							onChange={(e, value) => {
								setAccessoriesAmount(value);
							}}
							defaultValue={accessories}
							max={maxValue}
						/>
						$200
					</div>
				</div>
				<div className='input-container'>
					<div className='input'>
						<h2>Nails</h2>
						<input value={nails} />
					</div>
					<div className='slider'>
						$0
						<BudgetSlider
							value={nails}
							onChange={(e, value) => {
								setNailsAmount(value);
							}}
							defaultValue={nails}
							max={maxValue}
						/>
						$200
					</div>
				</div>
				<div className='input-container'>
					<div className='input'>
						<h2>Hair/Makeup</h2>
						<input value={hair} />
					</div>
					<div className='slider'>
						$0
						<BudgetSlider
							value={hair}
							onChange={(e, value) => {
								setHairAmount(value);
							}}
							defaultValue={hair}
							max={maxValue}
						/>
						$200
					</div>
				</div>
				<div className='input-container'>
					<div className='input'>
						<h2>Corsage & Boutonniere</h2>
						<input value={corsage}></input>
					</div>
					<div className='slider'>
						$0
						<BudgetSlider
							value={corsage}
							onChange={(e, value) => {
								setCorsageAmount(value);
							}}
							defaultValue={corsage}
							max={maxValue}
						/>
						$200
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
