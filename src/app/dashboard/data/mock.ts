export const chartData = {
	total: 50,
	segments: [
		{ label: 'Completed', value: 50, color: '#4CAF50', type: 'completed'},
		{ label: 'In Progress', value: 15, color: '#FF9800', type: 'in-progress' },
		{ label: 'Not Started', value: 5, color: '#9E9E9E', type: 'at-risk' },
		{ label: 'At Risk', value: 5, color: '#F44336', type: 'not-started' },
	]
};

export const summaryData = [
	{ label: 'Total Students Enrolled', value: 50 },
	{ label: 'Badges', value: 5 },
	{ label: 'Completion Rate', value: '68%' },
	{ label: 'Students At Risk', value: 5 }
];

export const badgeList = [
	{
		title: 'Badge Title',
		totalGoals: 5,
		completed: 4,
		inProgress: 1,
		notStarted: 0,
		completionRate: 73
	},
	
	{
		title: 'Badge Title2',
		totalGoals: 1,
		completed: 2,
		inProgress: 5,
		notStarted: 2,
		completionRate: 55
	},
];
