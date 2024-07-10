module.exports = {
  siteName: 'Portfolio',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: './blog/posts/*.md',
      },
    },
  ],
  templates: {
    Post: '/blog/:title',
  },
}
