class Visual_Regression_Helper {

    public isVisuallyEqual(){
        let visualResult = browser.checkDocument()[0];
        return visualResult.isWithinMisMatchTolerance;
    }
}

const VisualRegression = new Visual_Regression_Helper()
export default VisualRegression