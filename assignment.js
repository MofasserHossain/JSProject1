// .convert kilometer to meter
function kilometerToMeter(kilometer) {
    var result = kilometer * 1000;
    // . condition
    if (kilometer < 0){
        return "Unexpected error!! Enter Value Above Zero!";
    }
    else if (kilometer == 0){
        return "Your Result is 0. Enter Value Above Zero!";
    } 
    else{
        return result;
    }
}
var kiloToMeter = kilometerToMeter(0);
console.log(kiloToMeter);


// .find Shopping Cost
function budgetCalculator(watch, mobile, laptop){
    // . condition
    if (watch < 0 || mobile < 0 || laptop < 0) {
        return "Unexpected error!! Enter Number Above Zero. Happy Shopping..";
    }
    else if (watch == 0 || mobile == 0 || laptop == 0) {
        return "Unexpected error!! Minimum Product's Quantity is One. Happy Shopping!";
    }
    else {
        var watchPrice = watch * 50,
            mobilePrice = mobile * 100,
            laptopPrice = laptop * 500,
        totalPrice = watchPrice + mobilePrice + laptopPrice;
        return totalPrice;
    }
}
var totalShoppingCost = budgetCalculator(5, 2, 2);
console.log(totalShoppingCost);


// .Find Hotel cost
function hotelCost(days){
    var totalCost = 0;
    // . condition
    if (days < 0) {
        return "Unexpected error!! Enter Your Number Avobe Zero.";
    }
    else if(days == 0){
        return "Unexpected error!! Minimum Day's Quantity is One.";
    }
    else if (days <= 10) {
        totalCost = days * 100;
    }
    else if (days <= 20) {
        var firstTenDays = 10 * 100,
            TenToTwenty = days - 10,
            remainning = TenToTwenty * 80;
        totalCost = firstTenDays + remainning;
    }
    else{
        var firstTenDays = 10 * 100,
            TenToTwentyDays = 10 * 80,
            TwentyToAbove = days - 20,
            remainning = TwentyToAbove * 50;
        totalCost = firstTenDays + TenToTwentyDays + remainning;
    }
    return totalCost;
}
var totalHouseCost = hotelCost(12);
console.log(totalHouseCost);

// .Find Mega Frind Name
function megaFriend(friendsName){
    var megaFrinedName = friendsName[0];
    for (var i = 0; i < friendsName.length; i++) {
        var element = friendsName[i];
        if(element.length <= 0){
            return "Unexpected error!! Enter Right Name In Array Value.";
        }
        else if (element.length > megaFrinedName.length) {
            megaFrinedName = element;
        }
    }
    return megaFrinedName;
}
var friendsName = ["Sayed Rabet", "Asif Al Mahbub", "Emon Hossain", "Imam Hossain Emon"];
var megaName = megaFriend(friendsName);
console.log(megaName);
