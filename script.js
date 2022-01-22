
//when compute button clicked
function compute()
{
    //create variables
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    //validate principal amount
    if(principal <=0) {                                     //handles negative, zero, and null values
        alert("Enter a positive number please");            //added friendly syntax "please"
        document.getElementById("principal").focus();       //changes focus principal field
        return false;                                       //do not calc
    }

    //calc
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    //show results
    document.getElementById("result").innerHTML="If you deposit <mark>$"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>.\<br\>You will receive an amount of <mark>$"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>.\<br\>"
    //found <mark></mark> for highlighting
}

//update int rate when slider changes
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
