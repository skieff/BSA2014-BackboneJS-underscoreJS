var _ = require("underscore");

var Calendar = function(){

	this.getDay = function(day){
		return _.find(this.WeekEventsList, function(item){
			return item.day === day;
		});
	};

	this.getWeekEventsList = function(){
		return _.map(this.WeekEventsList, function(item){
			return {day:item.day, date: item.date, eventsCount: item.events.length};
		});
	};

	this.WeekEventsList = [
		{
			day: "Monday",
			date: "7.7.2014",
			events: [
				{
					time: "5:00 AM",
					text: "Go to the bad"
				},
				{
					time: "7:00 AM",
					text: "Get up"
				},
				{
					time: "7:05 AM",
					text: "Get up!!!!!!"
				},
				{
					time: "7:10 AM",
					text: "Get up! Take a coffe"
				},
				{
					time: "7:10 AM",
					text: "Write a code"
				}
			]
		},
		{
			day: "Tuesday",
			date: "8.7.2014",
			events: [
				{
					time: "7:00 AM",
					text: "Get up"
				},
				{
					time: "7:05 AM",
					text: "Get up!!!!!!"
				},
				{
					time: "7:10 AM",
					text: "Go to the shop"
				},
			]
		},
		{
			day: "Wednesday",
			date: "9.7.2014",
			events: [
				{
					time: "7:00 AM",
					text: "Get up"
				},
				{
					time: "7:10 AM",
					text: "Get up! Take a coffe"
				},
				{
					time: "7:10 AM",
					text: "Write a code"
				}
			]
		},
		{
			day: "Thursday",
			date: "10.7.2014",
			events: [
				{
					time: "5:10 AM",
					text: "Write a code"
				}
			]
		},
		{
			day: "Friday",
			date: "11.7.2014",
			events: [
				{
					time: "7:10 AM",
					text: "Write a code"
				},
				{
					time: "7:10 AM",
					text: "Drink a beer"
				},
			]
		},
		{
			day: "Saturday",
			date: "12.7.2014",
			events: [
				{
					time: "7:00 AM",
					text: "Buy a beer"
				},
				{
					time: "7:10 AM",
					text: "Drink it"
				}
			]
		},
		{
			day: "Sunday",
			date: "13.7.2014",
			events: [
				{
					time: "7:10 PM",
					text: "Stop drink"
				}
			]
		},
		
	];
};

module.exports = new Calendar();