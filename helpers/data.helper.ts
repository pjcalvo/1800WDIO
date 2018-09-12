class Data_Helper {

    public getRandomUser(){
        return {
            "firstName"         : "testacctFN",
            "lastName"          : "testAcct",
            "emailAddress"      : this.getRandomEmail(),
            "password"          : "123456",
            "dateOfBirth"       :"01011989",
            "state"             : "UT",
            "paymentInformation": this.getAmexPaymentInformation()
        }
    }

    private getRandomEmail(){
        var text;
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

        for (var i = 0; i < 8; i ++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text + '@1800contactstest.com';
    }

    public getAmexPaymentInformation(){
        return {
            "cardNumber"    : "4012000077777777",
            "month"         : "Sep",
            "year"          : "2022",
            "cardName"      : "Pablo Calvo",
            "address1"      : "Test Address 1",
            "address2"      : "Test Address 2",
            "zipCode"       : "84004",
            "city"          : "Draper",
            "state"         : "UT" 
        }
    }
}

const DataHelper = new Data_Helper()
export default DataHelper