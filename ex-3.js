//  Start coding here
class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}
class Postlist {
  constructor(posts) {
    this.posts = posts;
  }
  addpost(post) {
    this.posts += post;
  }
  sharePost() {
    console.log(`You've shared post ${this.posts} to your friend.`);
  }
}
class Post {
  constructor(id, title, content, comment) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.comment = [];
  }
  addComment(comment) {
    this.comment.push(comment);
  }
}
class Comment {
  constructor(id, content, createdBy, like) {
    this.id = id;
    this.content = content;
    this.createdBy = createdBy;
    this.like = like;
  }
  addLike(add1) {
    this.like += add1;
  }
}
class Facebook {
  constructor(groupList, pageList) {
    this.groupList = [];
    this.pageList = [];
  }
  addGroup(add1) {
    this.groupList.push(add1);
  }
  addPage(add1) {
    this.pageList.push(add1);
  }
}

class FacebookPage {
  constructor(name) {
    this.name = name;
  }
}
class FacebookGroup {
  constructor(name) {
    this.name = name;
  }
}
class Notification {
  constructor(id) {
    this.id = id;
  }
  send(createdBy, post) {
    console.log(
      `Notification: ${createdBy} has just commented on this post—${post}`
    );
  }
}
