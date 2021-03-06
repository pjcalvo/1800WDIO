class Data_Helper {

    //users
    public getRandomUser(){
        return {
            "firstName"         : "testacctFN",
            "lastName"          : "testAcct",
            "emailAddress"      : this.getRandomEmail(),
            "password"          : "123456",
            "dateOfBirth"       : "01011989",
            "state"             : "UT",
            "paymentInformation": this.getAmexPaymentInformation()
        }
    }

    public getPrivateLabelUser(){
        return {
            "firstName"         : "plFirstName",
            "lastName"          : "testAcct",
            "emailAddress"      : this.getRandomEmail(),
            "password"          : "123456",
            "dateOfBirth"       :"01011989",
            "state"             : "IL",
            "paymentInformation": this.getAmexPaymentInformation(),
            "rx"                : this.getPrivateLabelQualifierProduct()
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
            "state"         : "UT",
            "phoneNumber"   : "3456789012"
        }
    }
   
    //rx
    public getRxBothEyesNoColor(){
        return {
            "product"      : {
                    "name"  : "ACUVUE® OASYS®"
                },
            "patient"       :{
                    "firstName"     : "pablotest",
                    "lastName"      : "testAcct"
            },
            "rx":{
                    "isSubmitAndSkip": false,
                    "leftEye": {
                        "power":"+0.50",
                        "bc":"8.8"
                    },
                    "rightEye": {
                        "power":"+0.50",
                        "bc":"8.8"
                    }
            },
            "doctor": this.getTestDoctor()
        }
    }

    public getPrivateLabelQualifierProduct(){
        return {
            "product"      : {
                    "name"          : "Biofinity",
                    "searchCriteria": "Biofinity"
                },
            "patient"       :{
                    "firstName"     : "pablotest",
                    "lastName"      : "testAcct"
            },
            "rx":{
                    "isSubmitAndSkip": false,
                    "isPrivateLabel" : true,
                    "leftEye": {
                        "power":"+0.50"
                    },
                    "rightEye": {
                        "power":"+0.50"
                    }
            }
        }
    }

    public getTestDoctor() {
        return {
            "name":"test",
            "location": "Utah"
        }
    }
}

const DataHelper = new Data_Helper()
export default DataHelper