
/*
 * GET home page.
 */



exports.view = function(req,res){
	res.render('index', {
		"projects": 
		[
		{
			"name": "Waiting in Line",
			"image": "dog.jpg",
			"id": "project 1"
		},
		{
			"name": "Waiting in Line",
			"image": "dog.jpg",
			"id": "project 1"
		}]
	});
};