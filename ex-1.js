class EmailNotification {
    constructor(notificationId, createdTime, content, receiver) {
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver;
    }

    send(receiver) {
        console.log(`Notification has been sent to ${this.receiver}`)
    }
}

class SMSNotification {
    constructor(notificationId, createdTime, content, phoneNumber) {
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.phoneNumber = phoneNumber;
    }

    send(phoneNumber) {
        console.log(`Notification has been sent to ${this.phoneNumber}`)
    }
}

let objEmail = new EmailNotification("1", "11.00", "Test", "nok");
objEmail.send();
let objSms = new SMSNotification("2", "12.00", "Test2", "0832632954");
objSms.send();
//console.log(objEmail,objSms);