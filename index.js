let express = require('express');
let app = express();

function getWelcomeMessage(){
  return "Welcome to our service!"
}

function getGreetingMessage(username){
  return "Hello, "+username+"!";
}

function checkPasswordStrength(password){
  let number = password.length;
  let result;
  if(number >= 15){
    result = "strong"
  }else{
    result = "weak";
  }
  return "Password is "+result;
}

function getSum(num1, num2){
  let result = num1 + num2;
  return result.toString();
}

function getSubscriptionStatus(name, subscription){
  let condtion = (subscription == "true");
  let result;
  if(condtion){
    result = "subscribed";
  }else{
    result = "not subscribed";
  }
  return name + " is " + result;
}

function getDiscountedPrice(price, discount){
  return price - (price * (discount / 100));
}

function getPersonalizedGreeting(name, age, gender){
  return "Hello, "+name+"! You are a "+age+" year old "+gender+".";
}

function getFinalPrice(price, discount, tax){
  let discountePrice = price - (price * (discount / 100));
  return discountePrice + (discountePrice * (tax / 100));
}

function getTotalExerciseTime(running, swimming, cycling){
  return running + swimming + cycling;
}

app.get("/welcome", (req, res) => {
  res.send(getWelcomeMessage());
})

app.get("/greet", (req, res) => {
  let username = req.query.username;
  res.send(getGreetingMessage(username));
})

app.get("/check-password", (req, res) => {
  let password = req.query.password;
  res.send(checkPasswordStrength(password));
})

app.get("/sum", (req, res) => {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);
  res.send(getSum(num1,num2));
})

app.get("/subscription-status", (req, res) => {
  let username = req.query.username;
  let isSubscribed = req.query.isSubscribed;
  res.send(getSubscriptionStatus(username, isSubscribed));
})

app.get("/discounted-price", (req, res) => {
  let price = parseInt(req.query.price);
  let discount = parseInt(req.query.discount);
  res.send(getDiscountedPrice(price, discount).toString());
})

app.get("/personalized-greeting", (req, res) => {
  let age = parseInt(req.query.age);
  let gender = req.query.gender;
  let name = req.query.name;
  res.send(getPersonalizedGreeting(name, age, gender).toString());
})

app.get("/final-price", (req, res) => {
  let price = parseInt(req.query.price);
  let discount = parseInt(req.query.discount);
  let tax = parseInt(req.query.tax);
  res.send(getFinalPrice(price, discount, tax).toString());
})

app.get("/total-exercise-time", (req, res) => {
  let running = parseFloat(req.query.running);
  let swimming = parseFloat(req.query.swimming);
  let cycling = parseFloat(req.query.cycling);
  res.send(getTotalExerciseTime(running, swimming, cycling).toString());
})

let PORT = 3000;
app.listen(PORT, () => {
  console.log("server is running on port http://localhost"+PORT);
})



