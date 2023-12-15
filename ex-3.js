//  Start coding here
class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

class PostList {
    constructor(posts) {
        this.posts = posts;
    }
    addPost(posts) {
        this.posts = posts;
        this.posts.push(posts);
    }
    sharePost(title,) {
        console.log(`You've shared post ${this.title} to your friend.`);
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
        this.like = 0;
    }
    addLike(like) {
        this.like += 1;
    }
}

class Facebook {
    constructor(groupList, pageList) {
        this.groupList = [];
        this.pageList = [];
    }
    addGroup(groupList) {
        this.groupList.push(groupList);
    }
    addPage(pageList) {
        this.pageList.push(pageList);
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

    send(createdBy,title) {
        console.log(`Notification: ${this.createdBy} has just commented on this post— ${this.title}`)
    }
}

// const like = new Comment("01","push", "Mark Zuck");
// like.addLike();
// like.addLike();
// console.log(like.like)
// const fb = new Facebook();
// fb.addGroup("18+");
// fb.addGroup("25+");
// console.log(fb.groupList)

const test = new Notification("01")
test.send("nok", 123)