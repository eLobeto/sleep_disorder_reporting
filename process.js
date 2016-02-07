function processReport() {
    var header = "Assessment of clinical data:\n";
    
    var patientConditions = [];
    
    $('input[name="conditions"]:checked').each(function() {
        var stringToPush = " " +    this.value;
        patientConditions.push(stringToPush);
    });
    
    var rls;
    if($("#rls").is(':checked')) {
        rls = "The patient reported having restless legs and has a RLS criteria of " + $('#rlsCriteria').val();
    }
    else {
        rls = "The patient did not report having restless legs";
    }
    
    var output = header + "A " + $('#studyType').val() + " study was used to evaulate the patient. The patient is a " + $('#gender').val() + " aged " + $('#age').val() + " weighing " + $('#weight').val() + " lbs. with a height of " + $('#height').val() + " and a neck circumference of " + $('#neck').val() + ". The patient reported that they " + $('#ableToSleep').val() + " and " + $('#snore').val() + ". They " + $('#breathing').val() + " and " + $('#gasping').val() + ". The patient has the following medical conditions: " + patientConditions + ". They reported " + $('#smoker').val() + ". The patient has " + $('#drinksDay').val() + " and drinks " + $('#drinksMonth').val() + ". They consume 6 or more drinks in one sitting " + $('#sixOrMore').val() + ". Their PHQ score is " + $('#phq').val() + " and their Epworth score is " + $('#epworth').val() + ". They spend " + $('#inBed').val() + " hours in bed in a 24 hour day but get " + $('#sleepPerDay').val() + " hours of sleep in a 24 hour day. The patient reports having chronic pain of a " + $('#chronicPain').val() + " on a scale of 1-10. " + $('#nightsDisrupted').val() + " nights of sleep are disrupted per week by pain. " + rls + "." ;
    
    alert(output);
}