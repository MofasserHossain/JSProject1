//  Github Link: https://github.com/MofasserHossain/JSProject1

// .convert kilometer to meter
function kilometerToMeter(kilometer) {
    var result = kilometer * 1000;
    // . condition
    if (kilometer < 0){
        return "Unexpected error!! Enter value above zero!";
    }
    else if (kilometer == 0){
        return "Your result is 0. For actual result enter value above zero!";
    } 
    else{
        return result;
    }
}
var kiloToMeter = kilometerToMeter(4);


// .find Shopping Cost
function budgetCalculator(watch, mobile, laptop){
    // . condition
    if (watch < 0 || mobile < 0 || laptop < 0) {
        return "Unexpected error!! Enter number above zero. Happy shopping..";
    }
    else if (watch == 0 || mobile == 0 || laptop == 0) {
        return "Unexpected error!! Minimum product's quantity is one. Happy shopping!";
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


// .Find Hotel cost
function hotelCost(days){
    var totalCost = 0;
    // . condition
    if (days < 0) {
        return "Unexpected error!! Enter your number avobe zero.";
    }
    else if(days == 0){
        return "Unexpected error!! Minimum day's quantity is one.";
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


// .Find Mega Frind Name
function megaFriend(friendsName){
    var megaFrinedName = friendsName[0];
    for (var i = 0; i < friendsName.length; i++) {
        var element = friendsName[i];
        if(element.length <= 0){
            return "Unexpected error!! Enter right name in array value.";
        }
        else if (element.length > megaFrinedName.length) {
            megaFrinedName = element;
        }
    }
    return megaFrinedName;
}
var friendsName = ["Sayed Rabet", "Asif Al Mahbub", "Emon Hossain", "Imam Hossain Emon"];
var megaName = megaFriend(friendsName);
