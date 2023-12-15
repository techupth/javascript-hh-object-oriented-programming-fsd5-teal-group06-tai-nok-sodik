class Notification {
  constructor(notificationId, createdTime, content, receiver) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }
  send() {
    console.log("Notification has been sent to" + this.receiver);
  }
}

class EmailNotification extends Notification {
  constructor(notificationId, createdTime, content, receiver) {
    super(notificationId, createdTime, content, receiver);
  }
}

class SMSNotification extends Notification {
  constructor(notificationId, createdTime, content, phoneNumber) {
    super(notificationId, createdTime, content, phoneNumber);
  }
}

const emailRecei = new EmailNotification(555, 12.31, "otw", "Tai1");
//console.log(emailRecei)
emailRecei.send();

const emailRecei2 = new SMSNotification(555, 12.31, "otw", "55555");
//console.log(emailRecei)
emailRecei2.send();
