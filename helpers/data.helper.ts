class Data_Helper {

    public getRandomUser(){
        return {
            "firstName" : "testacctFirstName",
            "lastName" : "testAcct",
            "emailAddress" : this.getRandomEmail(),
            "password": 123456
        }
    }

    private getRandomEmail(){
        var text;
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

        for (var i = 0; i < 8; i ++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text + '@1800contactstest.com';
    }
}

const DataHelper = new Data_Helper()
export default DataHelper