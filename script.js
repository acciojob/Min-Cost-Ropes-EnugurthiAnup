function mincost(arr)
{ 
//write your code here
	
	arr.sort((a,b)=> a-b )
	let sum=0
	while(arr.length>1) {
	let sum = arr[0] + arr[1]
		
		arr.splice(0,2)
		arr.push(sum)
		arr.sort((a,b)=> a-b )
		
		
	}
	return sum
// return the min cost
   
}

module.exports=mincost;
