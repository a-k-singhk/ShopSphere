const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AZh1v6uy69jW6UNfwnVHIwUvHY_x-vYEbTqsxOuI0uxPugNDS9tnJM432AUOJ8N4sjceyq9FIsozL2SU",
  client_secret: "ENgw5gcnaF3IWRomORb_1cnEVFbsnX1zouJ55it2ibDs_4dw8badPKViIgKYz44LyOWEjg5yA-8v2Ai8",
});

module.exports = paypal;
