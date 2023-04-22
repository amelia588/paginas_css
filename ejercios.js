const event=new Date('August 19, 1975 23:15:30');
Event.setDate(24);
console.log(Event.getDate());
//expected output:24
Event.setDate(32);
//only 31 days in august
console.log(Event.getDate());
//expected output:1
