//Find the degree between the hands of a glock at a given time. 
//Return the time like as a human would interpret it.

function clock_angles(hour, minute) {
    // IF the hour is 12...
    if (hour === 12) {
        // ASSIGN hour to 0 degrees.
        hour = 0;   
    } else if (minute === 60) { // IF minutes is 60...  
        /// ADD one to the hour parameter and...
        hour += 1;
        // RE-ASSIGN the minutes to 0
        minute = 0;
    }
    
    // 360 degrees divided by 12 hours = 30 degrees per each hour the clock hand moves
    // MULTIPLY hour by 30 to get the angle 
    let hourAngle = hour * 30;
    // 360 degrees divided by 60 = 6 degree movement per minute
    let minuteAngle = minute * 6;
    // The hour hand moves 30 degrees over 60 minutes, moving 0.5 degree per minute
    let hourAngleSlip = minute * 0.5;

    //Calculate the angle of the hands, whether obtuse or acute.
    let angle = Math.abs((hourAngle + hourAngleSlip) - minuteAngle);
    
    // Find the 'between' angle like a normal human would.
    //IF the angle is obtuse
    if (angle > 180) {
        // Calculate the smaller angle and round to the nearest number
        return Math.round(360 - angle);
    } else {
        return Math.round(angle);
    }
};

clock_angles(3, 00)