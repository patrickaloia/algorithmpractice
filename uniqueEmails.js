
var numUniqueEmails = function(emails) {
    let uniques = 0;
    let hash = {};
    
    for (let i = 0; i < emails.length; i++) {
        let atIndex = emails[i].indexOf('@');
        let domain = emails[i].slice(atIndex, emails[i].length)
        let trueEmail = ''
        for (let j = 0; j < atIndex; j++) {
            if (emails[i][j] !== '.' && emails[i][j] !== '+') {
                trueEmail += emails[i][j]
            } else if (emails[i][j] === '+' || j + 1 === atIndex) {
                trueEmail += domain
                if (hash[trueEmail]) {
                    break
                } else {
                    hash[trueEmail] = trueEmail
                    uniques++
                    break
                }
            }
        }
    
    }
    
    // console.log(hash)
    return uniques
};

numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"])
