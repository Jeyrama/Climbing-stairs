/*
A staircase is given with a non-negative cost per each step. 
Once you pay the cost, you can either climb one or two steps. 
Create a solution to find the minimum sum of costs to reach the top 
(finishing the payments including cost[-2] or cost[-1]). 
You can either start at cost[0] or cost[1].

Examples:
  climbing_stairs([0, 2, 2, 1]) ➞ 2
  climbing_stairs([0, 2, 3, 2]) ➞ 3
  climbing_stairs([10, 15, 20]) ➞ 15
  climbing_stairs([0, 0, 0, 0, 0, 0]) ➞ 0

Notes:
  2 <= len(cost) <= 1000
*/


// Solution

function climbingStairs(cost) {
  
  //you can start at first or second step 
  //if 2 steps return lower cost
  let n = cost.length;
  if (n <= 2){
    return Math.min(...cost);
  }
  //create an array storing minimum cost to reach each step 
  
  let minCost = new Array(n);
  minCost[0] = cost[0];
  minCost[1] = cost[1];
  //we set minC 0 and 1 above so now we need to set minC[i] where i is each step of cost.
  //minCost[i] is decided by adding cost of each step and either the step 1 or 2 prior whichever is cheaper
  for (let i =2; i < n; i++){
    minCost[i] = cost[i] + Math.min(minCost[i-1], minCost[i-2]);
    
  }//can exit off last step or second last whichever has less cost 
  return Math.min(minCost[n-1], minCost[n-2]); 
}