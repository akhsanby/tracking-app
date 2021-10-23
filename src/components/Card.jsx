import React from 'react'
import { pp, ellipsis } from '../icons'
import data from '../../data.json'

export default function Card() {
	const [timeframe, setTimeframe] = React.useState("daily")

	return(
		<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
			<CardPrimary timeframe={timeframe} setTimeframe={setTimeframe}/>
			<CardSecondary timeframe={timeframe} />
		</div>
	)
}

function CardPrimary({ timeframe, setTimeframe }) {
	return(
		<div className="<sm:h-55 w-60 bg-[#1d204b] row-span-2 rounded-2xl">
			<div className="p-8 h-[70%] bg-[#5746ea] rounded-2xl <sm:(p-4 flex flex-row gap-4 items-center)">		
				<img src={pp} alt="profile" className="w-25 h-25 <sm:(w-20 h-20) rounded-full" />
				<div className="mt-10 <sm:mt-0 font-normal">
					<p className="text-[#9489f4] <sm:text-sm">Report for</p>
					<p className="text-4xl <sm:text-lg text-white">Bayu Rian</p>
				</div>
			</div>
			<div className="p-5 ml-4 grid grid-rows-3 gap-2 <sm:(grid-cols-3 flex justify-evenly mt-4 p-0 ml-0 gap-0)">
				<p 
					className={(timeframe === 'daily' ? "text-white" : "text-[#4c4e81] hover:text-white")}
					onClick={() => setTimeframe('daily')}>
					Daily
				</p>
				<p 
					className={(timeframe === 'weekly' ? "text-white" : "text-[#4c4e81] hover:text-white")}
					onClick={() => setTimeframe('weekly')}>
					Weekly
				</p>
				<p 
					className={(timeframe === 'monthly' ? "text-white" : "text-[#4c4e81] hover:text-white")} 
					onClick={() => setTimeframe('monthly')}>
					Monthly
				</p>
			</div>
		</div>
	)
}

function CardSecondary({ timeframe }) {
	return(
		<>
			{data.map((item, index) => (
				<div key={index} className={`group relative h-55 w-60 rounded-2xl overflow-hidden hover:overflow-hidden`} style={{ backgroundColor: `${item.color}` }}>
					<img src={item.icon} className="absolute right-3 duration-300 transform group-hover:scale-120" />
					<div className="absolute bottom-0 p-5 bg-[#1d204b] h-[80%] w-full rounded-2xl">
						<div className="flex justify-between items-center ">
							<div className="text-white font-bold">{item.title}</div>
							<img src={ellipsis} />
						</div>
						<div className="mt-5">
							<p className="text-white font-medium text-5xl">
								{(timeframe === 'weekly' ? item.timeframes.weekly.current : (timeframe === 'monthly' ? item.timeframes.monthly.current : item.timeframes.daily.current))} hrs
							</p>
							<p className="text-[#686c9c] font-sm text-lg">
								{(timeframe === 'weekly' ? "Last week - " : (timeframe === 'monthly' ? "Last month - " : "Yesterday - "))}
								{(timeframe === 'weekly' ? item.timeframes.weekly.previous : (timeframe === 'monthly' ? item.timeframes.monthly.previous : item.timeframes.daily.previous))} hrs
							</p>
						</div>
					</div>
				</div>
			))}
		</>
	) 
}