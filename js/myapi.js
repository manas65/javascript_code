const {members}=require("./mydata")
const {test1}=require("./myfun")

members.map((item)=>test1(item.MemberName,item.MemberID))