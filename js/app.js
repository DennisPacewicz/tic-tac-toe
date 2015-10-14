var grid = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var turn = true;
var play = true;
var cross = "<svg height=\"160.0\" width=\"160.0\" class=\"piece\">"+
      "<path d=\"M 25.0 25.0 l 110 110\" stroke=\"white\" stroke-width=\"32.0\" fill=\"none\"></path>"+
      "<path d=\"M 135.0 25.0 l -110 110\" stroke=\"white\" stroke-width=\"32.0\" fill=\"none\"></path></svg>";
var circle = "<svg height=\"160.0\" width=\"160.0\" class=\"piece\">"+
      "<circle cx=\"80\" cy=\"80\" r=\"50\" stroke=\"white\" stroke-width=\"32.0\" fill=\"none\" /></svg>";

function selection(num){
	if(play){
		if(num != 0){
			if(turn){
				if(grid[num-1] != 2){
					grid[num-1] = 1;
					document.getElementById(num).style.cssText = 'background:#ccc;';
					document.getElementById(num).innerHTML = cross;
					turn = false;
				}
			} else {
				if(grid[num-1] != 1){
					grid[num-1] = 2;
					document.getElementById(num).style.cssText = 'background:#000;';
					document.getElementById(num).innerHTML = circle;
					turn = true;
				}
			}
		} 

		console.log(grid);
		winCheck();
	}
}

function winCheck(){
	// check rows
		cmp(0,1,2);
		cmp(3,4,5);
		cmp(6,7,8);

	// check columns
		cmp(0,3,6);
		cmp(1,4,7);
		cmp(2,5,8);

	// check diagonal
		cmp(0,4,8);
		cmp(2,4,6);

	if(grid.indexOf(0) < 0){ // no more moves
		setTimeout(reset,4000);
	}
}

function cmp(n1, n2, n3){
	if(grid[n1] == grid[n2] && grid[n1] == grid[n3]){
		if(grid[n1] != 0){
			document.getElementById(n1+1).style.cssText = 'background:#7cc0b0;';
			document.getElementById(n2+1).style.cssText = 'background:#7cc0b0;';
			document.getElementById(n3+1).style.cssText = 'background:#7cc0b0;';
			winner(grid[n1]);	
		}
	} 
}

function winner(id){
		console.log("player "+id+" wins.");
		play = false;
		setTimeout(reset,4000);	

}

function reset(){
	grid = [0, 0, 0, 0, 0, 0, 0, 0, 0];	
	for(var i = 1; i <= 9; i++){
		document.getElementById(i).style.cssText = 'background:#444;';
		document.getElementById(i).innerHTML = "";
	}
	play = true;
}