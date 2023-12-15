/*ex
class Dog {
  constructor(name, breed, sex, birthYear) {
    this.name = name;
    this.breed = breed;
    this.sex = sex;
    this.birthYear = birthYear;
  }
}*/

class EmailNotification { 
    constructor(notificationId,createdTime,content,receiver){
     this.notificationId = notificationId;
     this.createdTime = createdTime;
     this.content = content;
     this.receiver = receiver;
    }
    send() {
    console.log("Notification has been sent to"+this.receiver)
    }
}
const emailRecei = new EmailNotification(555,12.31,"otw","Tai1");
//console.log(emailRecei)
emailRecei.send()


class SMSNotification { 
    constructor(notificationId,createdTime,content,phoneNumber ) {
     this.notificationId = notificationId;
     this.createdTime = createdTime;
     this.content = content;
     this.phoneNumber = phoneNumber;
    }
    send( ) {
      console.log("Notification has been sent to"+this.phoneNumber)   
    }
}

const smsRecei = new SMSNotification(444,15.35,"met",1150)
//console.log(smsRecei)
smsRecei.send()
