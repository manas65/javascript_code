let obj=[
    {
        prname:"XYZ",
        prprice:20,
        license:"license MIT"
    },
    {
        prname:"abc",
        prprice:21,
        license:"license MIT 1.0"
    },
    {
        prname:"ABC",
        prprice:22,
        license:"license MIT 2.0"
    }
    ]

obj.map((i)=>
{
    if(i.prprice>21)
    console.log(i)
})    