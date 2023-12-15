class EmailNotification {
  constructor(notificationId, createdTime, content, receiver) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }
  send(email) {
    return console.log(`Notification has been sent to ${email}`);
  }
}

class SMSNotification {
  constructor(notificationId, createdTime, content, receiver) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }
  send(phoneNumber) {
    return console.log(`Notification has been sent to ${phoneNumber}`);
  }
}
let user = new EmailNotification();
let sms = new SMSNotification();

user.send();
sms.send();
