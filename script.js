function mincost(arr)
{ 
//write your code here
	
	arr.sort((a,b)=> a-b )
	let sum=0
	for (let i = 1; i < arr.length; i++) {
		let sum = arr[i] + arr[i-1]
		
		arr.splice(0,2)
		arr.push(sum)
		arr.sort((a,b)=> a-b )
		
		
	}
	return sum
// return the min cost
   
}

module.exports=mincost;
