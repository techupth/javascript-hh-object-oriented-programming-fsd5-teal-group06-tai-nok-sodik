class Notification {
  constructor(notification, createdTime, content, receiver) {
    this.notification = notification;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }
  send() {
    return console.log(`Notification has been sent to ${this.receiver}`);
  }
}

class EmailNotification extends Notification {
  constructor(notification, createdTime, content, receiver) {
    super(notification, createdTime, content, receiver);
  }
}

class SMSNotification extends Notification {
  constructor(notification, createdTime, content, receiver) {
    super(notification, createdTime, content, receiver);
  }
}
let email = new EmailNotification();
let sms = new SMSNotification();
email.send();
sms.send();
