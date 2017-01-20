var movies =[
	{
		title: "Godfather",
		watched: false,
		rating: 5
	},
	{
		title: "Frozen",	
		watched: true,
		rating: 5
	},
	{
		title: "Arrival",
		watched: true,
		rating: 5
	}
]

function printMovies(){
	for (i=0; i<movies.length; i++){
		if (movies[i].watched == true){
			console.log('You have watched ' + movies[i].title + ' - ' movies[i].rating + ' stars');
		} else (movies[i].watched == false){
			console.log("You have not watched " + movies[i].title + " - " movies[i].rating + " stars");
		} 
	}
}