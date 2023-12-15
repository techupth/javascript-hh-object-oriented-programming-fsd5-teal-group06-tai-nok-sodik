class Notification {
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

class EmailNotification extends Notification {
    constructor(notificationId, createdTime, content, receiver) {
        super(notificationId, createdTime, content, receiver)
    }
}

class SMSNotification extends Notification {
    constructor(notificationId, createdTime, content, receiver) {
        super(notificationId, createdTime, content, receiver)
    }
}

let objEmail = new EmailNotification("1", "11.00", "Test", "nok");
objEmail.send();
let objSms = new SMSNotification("2", "12.00", "Test2", "0832632954");
objSms.send();