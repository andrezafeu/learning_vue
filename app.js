// vue instance
const helloWorld = new Vue({
    // el: vue should attach or mount itself to this html element
    el: '#helloVue',
    data: {
        title: "Hello world!!!",
        message: "This is my vue template"
    }
});

const example = new Vue({
    el: '#example',
    data: {
        title: "Hi",
        message: "This is your daily message",
        name: 'Chewie'
    }
});