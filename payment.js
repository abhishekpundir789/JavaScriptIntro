// declaration of variables

var fullName= prompt("Enter your full name" , "No Name");
var address= prompt("Enter your address", "no address");
var city= prompt("Enter the city", "Vancouver");
var Province= prompt("Enter the province", "British Columbia");
var accountBalance=prompt("Enter the balance", "0.0");
var account_Balance= parseInt(accountBalance);
var totalAccountBalance;
// calculate the final balance after the penalty

if(accountBalance>0 && accountBalance<1000){
    totalAccountBalance= account_Balance+(account_Balance*0.02);
    document.write("Full Name:"+ " "+ fullName);
    document.write("<br>");
    document.write("Address:"+" "+ address);
    document.write("<br>");
    document.write("City:"+" "+city);
    document.write("<br>");
    document.write("Province:"+" "+Province);
    document.write("<br>");
    document.write("Account Balance:"+" "+accountBalance);
    document.write("<br>");
    document.write("Total Owing:"+" "+totalAccountBalance);
} 
else if(accountBalance>=1000){
    totalAccountBalance= account_Balance+(account_Balance*0.03);
    document.write("Full Name:"+ " "+ fullName);
    document.write("<br>");
    document.write("Address:"+" "+ address);
    document.write("<br>");
    document.write("City:"+" "+city);
    document.write("<br>");
    document.write("Province:"+" "+Province);
    document.write("<br>");
    document.write("Account Balance:"+" "+accountBalance);
    document.write("<br>");
    document.write("Total Owing:"+" "+totalAccountBalance);
}
else if(accountBalance==0){
    document.write("Full Name:"+ " "+ fullName);
    document.write("<br>");
    document.write("Address:"+" "+ address);
    document.write("<br>");
    document.write("City:"+" "+city);
    document.write("<br>");
    document.write("Province:"+" "+Province);
    document.write("<br>");
    document.write("Account Balance:"+" "+accountBalance);
    document.write("<br>");
    document.write("Total Owing:"+" "+0);
    document.write("<br>");
    document.write("Thank you for the Payment!!!");
}