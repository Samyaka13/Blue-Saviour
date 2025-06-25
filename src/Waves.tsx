import Diveyam from '@/assets/Diveyam.jpeg'
// Custom Avatar component
const Avatar = ({ children, className = "" }) => (
	<div className={`relative ${className}`}>
		{children}
	</div>
);

const AvatarImage = ({ src, alt = "", className = "" }) => (
	<img
		src={src}
		alt={alt}
		className={`w-full h-full object-cover rounded-full ${className}`}
	/>
);

const AvatarFallback = ({ children, className = "" }) => (
	<div className={`w-full h-full rounded-full flex items-center justify-center ${className}`}>
		{children}
	</div>
);

const posts = [
	{
		id: 1,
		name: "Diveyam Mishra",
		time: "2h ago",
		avatar: Diveyam,
		content:
			"Just finished a cleanup at Sandy Shores! The beach looks so much better now.",
		tags: ["#BlueSavior", "#BeachCleanup"],
		image:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuD7rPJRTDVomsm_ELfSPGZ8mthvLSNznzyaSfFjuWWjYjVH5DAnms7fLvmD_RZ9gXYM_4rYaq0Bl6LGkvbdFdRruTkSmimgft5V-SMEHDLN71FsFQtJ-sS5Wxz13vaNlGJRZvk_S5lY1Er8fKAvbeUH6cs9MIJnfr-fGFR-KALzTZYaXXnmaA3OV6E8jSFCnRLJJS4DA7c0hAfMv16Ff3VNPL30QMFt-Uu-LtNhaYIe-DqFCvgIjgpKw4pOpXlBbdyF7RZcXw873pcp",
		likes: 23,
		comments: 5,
		verified: true,
	},
	{
		id: 2,
		name: "Ethan Miller",
		time: "1d ago",
		avatar:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuCC6bcEUGKN_Gd4-5Lx8mgvxRv4c_w_FdggCzRIUcOczwGekuGF0e8eBn4sVV899aOJUkUlvGpW2K-58CgMejP1kOCDBnOJK9RUQwJy3ApbokBgRWhvgA1XKL1Zcf_DfPh_0C8Rtz98gm8OIz4ofDZveaJNHU4uh0SIF4tGBSTuU_ev0A2VXeqg-6cGvS2qaQUuVfRueBfMw1kIfoyDgQwEh7E8Fqmu4ZG6pUfT0MDFpP4NLYWI2tcJ2F-ok5ObqTc95qJ_KZyHac_r",
		content:
			"Another successful cleanup at Ocean View! Thanks to everyone who came out.",
		tags: ["#BlueSavior", "#Community"],
		image:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuBY6JPWgJ_uHLF5oZwxYCqQImyTKvv6jM2eXgvfTd9HCtEAhpcX3Xznsuk3mBKM07hCcBpLRcdbPSCpMjgznyRa0PmHCxs33MrHjozksWzFZqmxRWD7mrDWtK6HQfXldH8LyWy29cssngMea3qfo3nXtCZIuAv7DXjXvoQXVOTK0CtS9SHlX0F85H5JfRiXf4CpBteRevdAkU2Dr6LuQCbJMrztXeC7K5BdStmdLC48sLYQ7BWhN-UAP-AJ_KKLBCgffFdAhFMMMSEY",
		likes: 18,
		comments: 3,
		verified: false,
	},
	{
		id: 3,
		name: "Olivia Bennett",
		time: "4d ago",
		avatar:"",
		content:
			"Had a great time at the cleanup drive today! The beach is looking cleaner and healthier.",
		tags: ["#BlueSavior", "#MakingADifference"],
		image:"",
		likes: 32,
		comments: 7,
		verified: true,
	},
];

const CommunityFeed = () => {
	return (
		<div className="bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 min-h-screen font-inter">
			{/* Enhanced Header */}
			<header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-lg">
				<div className="container mx-auto px-2 sm:px-4 flex items-center justify-between h-16">
					<div className="flex items-center">
						<div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent flex items-center">
							<div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3 shadow-md">
								<i className="fa-solid fa-water text-white text-sm"></i>
							</div>
							<span>Blue-Saviour</span>
						</div>
					</div>
					<nav className="hidden md:flex items-center space-x-6">
						<a
							href="https://readdy.ai/home/8566214f-f3a6-4cd1-a397-0239dbfbc28c/5856ca08-6395-465d-bafe-b28f9160444b"
							data-readdy="true"
							className="text-slate-600 font-medium hover:text-blue-600 cursor-pointer transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-blue-50"
						>
							Dashboard
						</a>
						<a
							href="#"
							className="text-blue-600 font-medium hover:text-blue-800 cursor-pointer transition-colors duration-200 px-3 py-2 rounded-lg bg-blue-50 border border-blue-200"
						>
							Waves
						</a>
						<a
							href="#"
							className="text-slate-600 font-medium hover:text-blue-600 cursor-pointer transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-blue-50"
						>
							Impact Hub
						</a>
						<a
							href="#"
							className="text-slate-600 font-medium hover:text-blue-600 cursor-pointer transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-blue-50"
						>
							Rewards
						</a>
					</nav>
					<div className="flex items-center space-x-3">
						<button className="relative text-slate-600 hover:text-blue-600 cursor-pointer p-2 rounded-lg hover:bg-blue-50 transition-all duration-200">
							<i className="fa-solid fa-bell text-xl"></i>
							<span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium shadow-md">
								3
							</span>
						</button>
						<div className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-blue-50 transition-all duration-200">
							<Avatar className="h-9 w-9 border-2 border-blue-400 shadow-md">
								<AvatarImage src="https://readdy.ai/api/search-image?query=Professional%2520profile%2520picture%2520of%2520a%2520person%2520with%2520a%2520friendly%2520smile%252C%2520blue%2520ocean%2520background%252C%2520high%2520quality%2520portrait%2520photograph%2520with%2520natural%2520lighting%252C%2520clean%2520professional%2520headshot&width=100&height=100&seq=1010&orientation=squarish" />
								{/* <AvatarFallback className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-semibold">BS</AvatarFallback> */}
							</Avatar>
							<span className="text-sm font-semibold text-slate-700 hidden md:inline-block">
								Bhoomi Sharma
							</span>
						</div>
					</div>
				</div>
			</header>

			{/* Main Content */}
			<main className="community-feed py-8 px-4 max-w-2xl mx-auto">
				{/* Enhanced Title */}
				<div className="text-center mb-8">
					<h2 className="text-4xl font-bold bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-800 bg-clip-text text-transparent mb-2">
						WAVES
					</h2>
					<p className="text-slate-600 text-lg">Join the community making waves for our oceans</p>
				</div>

				{/* Enhanced Search Bar */}
				<div className="mb-8 bg-white rounded-2xl shadow-xl border border-blue-100 p-6">
					<div className="relative">
						<input
							type="text"
							placeholder="Search in community..."
							className="w-full bg-slate-50 text-slate-700 placeholder-slate-400 rounded-xl py-4 px-6 pl-12 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all duration-200 border border-slate-200"
						/>
						<i className="fa-solid fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"></i>
					</div>
					<div className="flex flex-wrap gap-2 mt-4">
						<span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full cursor-pointer hover:bg-blue-200 transition-colors">#BlueSavior</span>
						<span className="px-3 py-1 bg-cyan-100 text-cyan-700 text-sm rounded-full cursor-pointer hover:bg-cyan-200 transition-colors">#BeachCleanup</span>
						<span className="px-3 py-1 bg-sky-100 text-sky-700 text-sm rounded-full cursor-pointer hover:bg-sky-200 transition-colors">#Community</span>
					</div>
				</div>

				{/* Enhanced Posts */}
				{posts.map((post) => (
					<div
						key={post.id}
						className="bg-white rounded-2xl shadow-xl mb-8 overflow-hidden border border-blue-100 hover:shadow-2xl transition-all duration-300"
					>
						<div className="p-6">
							<div className="flex items-center mb-5">
								<div className="relative">
									<img
										src={post.avatar}
										alt={`${post.name} avatar`}
										className="w-14 h-14 rounded-full mr-4 border-3 border-blue-200 shadow-md"
									/>
									{post.verified && (
										<div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
											<i className="fa-solid fa-check text-white text-xs"></i>
										</div>
									)}
								</div>
								<div className="flex-1">
									<div className="flex items-center gap-2">
										<p className="font-bold text-slate-800 text-lg">
											{post.name}
										</p>
									</div>
									<p className="text-sm text-slate-500 font-medium">{post.time}</p>
								</div>
								<button className="text-slate-400 hover:text-slate-600 p-2">
									<i className="fa-solid fa-ellipsis text-lg"></i>
								</button>
							</div>
							<p className="text-slate-700 mb-5 leading-relaxed text-lg">
								{post.content}
							</p>
							<div className="flex flex-wrap gap-2 mb-4">
								{post.tags.map((tag, i) => (
									<a
										key={i}
										href="#"
										className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 shadow-md font-medium"
									>
										{tag}
									</a>
								))}
							</div>
						</div>
						<div className="relative overflow-hidden group">
							<img
								src={post.image}
								alt="Post image"
								className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</div>
						<div className="p-5 bg-gradient-to-r from-slate-50 to-blue-50 border-t border-blue-100">
							<div className="flex justify-between items-center">
								<div className="flex items-center space-x-6">
									<button className="flex items-center text-slate-600 hover:text-red-500 transition-all duration-200 group">
										<i className="fa-regular fa-heart mr-2 text-xl group-hover:scale-110 transition-transform"></i>
										<span className="font-semibold">{post.likes}</span>
									</button>
									<button className="flex items-center text-slate-600 hover:text-blue-600 transition-all duration-200 group">
										<i className="fa-regular fa-comment-dots mr-2 text-xl group-hover:scale-110 transition-transform"></i>
										<span className="font-semibold">{post.comments}</span>
									</button>
								</div>
								<button className="flex items-center text-slate-600 hover:text-blue-600 transition-all duration-200 group p-2 rounded-lg hover:bg-white">
									<i className="fa-solid fa-share-nodes text-xl group-hover:scale-110 transition-transform"></i>
								</button>
							</div>
						</div>
					</div>
				))}

				{/* Load More Button */}
				<div className="text-center mt-8">
					<button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 shadow-lg hover:shadow-xl">
						Load More Posts
					</button>
				</div>
			</main>

			{/* Enhanced Floating Create Button */}
			<button className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-4 px-6 rounded-2xl shadow-2xl flex items-center transition-all duration-200 hover:scale-105 group">
				<i className="fa-solid fa-plus mr-2 text-lg group-hover:rotate-90 transition-transform duration-200"></i>
				<span>Create</span>
			</button>
		</div>
	);
};

export default CommunityFeed;