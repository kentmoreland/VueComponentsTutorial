Vue.component('post', {
  template: '#post-template',
  props: ['post']
});

const vm = new Vue({
  el: '#app',
  data: {
    posts: [{
      title: 'A post for our reddit demo starting at 15 votes',
      votes: 15
    },
    {
      title: 'Try out the upvoting, it works, I promise',
      votes: 53
    },
    {
      title: 'Listening to Ed Sheeran right about now',
      votes: 10
    }]
  }
});
