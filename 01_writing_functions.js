var person = function (ops) {
  return {
    firstName: ops.firstName || "Kevin",
    lastName: ops.lastName || "Mircovich",
    email: ops.email || "test@gmail.com",
    name: function () { return firstName + ' ' + lastName }
  }
}

var ops = {firstName: "Dania", lastName: "Maciel", email: "daniaemily@gmail.com"}

dania = new person(ops)
console.log(dania)

var agency = function (ops) {
  ops = ops || {}
  var agency = user(ops)
  agency.customers = ops.customers || 0
  agency.isAgency = true
  return agency
}