

export const timeConvert = (num) => {


  /* const min = num % 60 // 3
  const hour = Math.floor(num / 60) // tam sayı 1

  return hour+":"+min */


  // Template literals

  return `${Math.floor(num / 60)}:${num % 60}`




}


/*        Time Convert

Using the JavaScript languge, have the function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to /ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon */