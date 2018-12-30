whatCanIDrink = function(age){
    if (age < 0){
        return "Sorry. I can’t tell what drink because that age is incorrect!";
    }
    if (age < 14){
        return "Drink Toddy";
    }
    if (age< 18 && age>=14){
        return "drink Coke";
    }
    if (age <21 && age >=18){
        return "drink beer";
    }
    if (age < 130){
        return "drink whiskey";
    }
    else {
        return "sorry I cant tell what age you are"
    }
}
alert(whatCanIDrink(12))