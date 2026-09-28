export const images = [
	{
		id: 1,
		imageUrl: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=85",
		title: "City After Dark",
		description: "Downtown lights bring the evening streets to life.",
		alt: "Illuminated city skyline at night",
		category: "City Life"
	},
	{
		id: 2,
		imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=85",
		title: "Busy Streets",
		description: "A lively avenue winds between the buildings of the city.",
		alt: "Urban street lined with tall buildings",
		category: "City Life"
	},
	{
		id: 3,
		imageUrl: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=85",
		title: "Metropolitan View",
		description: "A wide view across a dense modern city skyline.",
		alt: "Modern city buildings viewed from above",
		category: "City Life"
	},
	{
		id: 4,
		imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=85",
		title: "Dinner Is Served",
		description: "A colorful meal arranged for a shared table.",
		alt: "Plates of freshly prepared food on a table",
		category: "Food"
	},
	{
		id: 5,
		imageUrl: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=85",
		title: "Fresh Greens",
		description: "A bright bowl packed with crisp vegetables and greens.",
		alt: "Fresh salad bowl with colorful vegetables",
		category: "Food"
	},
	{
		id: 6,
		imageUrl: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=85",
		title: "Pasta Night",
		description: "A hearty pasta dish topped with herbs and seasoning.",
		alt: "Fresh pasta served with herbs",
		category: "Food"
	}
];

export const galleries = Object.entries(
	images.reduce((groups, image) => {
		const category = image.category || "General";
		if (!groups[category]) groups[category] = [];
		groups[category].push(image);
		return groups;
	}, {})
);


