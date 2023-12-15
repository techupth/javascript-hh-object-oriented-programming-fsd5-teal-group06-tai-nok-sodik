//  Start coding here
class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

class postList {
    constructor(posts) {
        this.posts = posts;
    }
    addPost(posts) {
        this.posts = posts;
        this.posts.push(posts);
    }
    sharePost() {
        console.log(`You've shared post ${post-title>} to your friend.`);
    }
}

class Post {
    constructor(id, title, content, comment) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.comment = comment;
    }
    addComment(comment) {
        this.comment = comment;
        this.comment.push(comment);
    }
}

class Post {
    constructor(id, title, content, comment) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.comment = comment;
    }
    addComment(comment) {
        this.comment = comment;
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
    addLike(like) {
        this.like += like;
    }
}

class Facebook {
    constructor(groupList, pageList) {
        this.groupList = groupList;
        this.pageList = pageList;
    }
    addGroup(groupList) {
        this.groupList += groupList;
    }
    addPage(pageList) {
        this.pageList += pageList;
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

    send() {
        console.log(`Notification: ${comment-createdBy} has just commented on this post—${post-title}`)
    }
}