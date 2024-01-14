/* 
Input : s1 = "14:00";
        s2 = "16:45";
Output : result = "2:45"

Input : s1 = "1:04"
        s2 = "13:05"
Output : result = "12:01"

Input : s1 = "15:05"
        s2 = "13:04"
Output : result = "21:59"

*/

export const timeDifference = (t1,t2) => {
    let hour = Number(t2.split(':')[0]) - Number(t1.split(':')[0])
    let minute = Number(t2.split(':')[1]) - Number(t1.split(':')[1])

    if(minute < 0) {
        hour--
        minute = minute + 60
    }

    if(hour < 0) hour = hour + 24

    if(hour < 10) hour = "0" + hour.toString()
    if(minute < 10) minute = "0" + minute.toString()

    return hour.toString() +":"+minute.toString()
}