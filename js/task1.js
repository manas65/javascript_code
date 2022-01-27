function filterRange(arr,a,b){
ans=[]
arr.map((i)=>{
    if(i>=a && i<=b )
        ans.push(i)
})
return ans
}

console.log(filterRange([10,20,22,35,45],20,30))