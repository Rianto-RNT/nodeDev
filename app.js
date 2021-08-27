// const fs = require ('fs')

// //fs.writeFileSync('notes.txt', 'My name is ryan.' )
// fs.appendFileSync('notes.txt', 'I lives in oklahoma.')
// console.log('SUCCESS!!! "Data to append" has been add to the app.js')

// switch(new Date().getDay()) {
//     case 4:
//     case 5:
//         text = 'Soon it is weekend';
//         break;
//     case 0:
//     case 6:
//         text = 'It is weekend';
//         break;
//     default:
//         text = 'Looking forward to the weekend';

// }

// console.log(text)

    switch (new Date().getDay()) {
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        time = "07.00"
        date = "17"
        month = "August"
        years = "1945"
        break;
      case  6:
        day = "Saturday";
        break;
      default:
        day = "Unknown Day";
    }


  console.log(day, time, date, month, years)