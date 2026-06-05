const btn=document.getElementById("add-btn");
const ul=document.getElementById("expense-list");

let amt=0;
let expense=[];
let count=0;

btn.addEventListener("click",(e)=>{
     const exname=document.getElementById("expense-name");
     const examt=document.getElementById("expense-amount");
     

   
    
      if(exname.value=="" || examt.value=="") alert("Please enter a valid data")

        else{   
       addvalue(exname.value, examt.value);  
       renderList();
        }

})

function addvalue(val1,val2){

    let found = false;

    for(let i=0;i<expense.length;i++){

        if(val1 === expense[i].name){

            expense[i].amount += Number(val2);

            found = true;

            break;
        }
    }

    if(!found){

        expense.push({
            name: val1,
            amount: Number(val2)
        });
    }

    amt += Number(val2);

    document.getElementById("total").innerText = amt;
}

function renderList(){

    ul.innerHTML = "";

    for(let i=0;i<expense.length;i++){

        let li = document.createElement("li");

        li.innerText =
        `${expense[i].name} : ₹${expense[i].amount}`;

         let delBtn = document.createElement("button");

        delBtn.innerText = "Delete";

        delBtn.addEventListener("click",()=>{

           amt-=Number(expense[i].amount);
           document.getElementById("total").innerText = amt;
           expense.splice(i,1);
           renderList();

        });

        li.append(delBtn);

        ul.append(li);
    }
}