const c1 = () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/amarjeetkumar/Desktop/gridsome/src/templates/Post.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/Users/amarjeetkumar/Desktop/gridsome/src/pages/Blog.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/amarjeetkumar/Desktop/gridsome/src/pages/About.vue")
const c4 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/amarjeetkumar/Desktop/gridsome/node_modules/gridsome/app/pages/404.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/amarjeetkumar/Desktop/gridsome/src/pages/Index.vue")

export default [
  {
    path: "/blog/:title/",
    component: c1
  },
  {
    path: "/blog/",
    component: c2
  },
  {
    path: "/about/",
    component: c3
  },
  {
    name: "404",
    path: "/404/",
    component: c4
  },
  {
    name: "home",
    path: "/",
    component: c5
  },
  {
    name: "*",
    path: "*",
    component: c4
  }
]
