const accountID = 12345
let emailId = "muskaansingh.com"
var accountPW = "09876"
cityName = "Taulihawa"

/* Prefer not to use var
beacuse of issue in block scope and functional scope
*/

emailId = "muskaan.com"
accountPW = "67892"
cityName = "Phagwara"

console.table([accountID, emailId, accountPW, cityName])