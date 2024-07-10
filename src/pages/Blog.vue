<template>
  <Layout>
    <h1>Blog Posts</h1>
    <nav class="blog-list">
      <g-link
        v-for="post in $page.allPost.edges"
        :key="post.node.id"
        :to="
          '/blog/' +
            post.node.title
              .toLowerCase()
              .split(' ')
              .join('-') +
            '/'
        "
        class="blog-item"
      >
        <img
          :src="post.node.thumbnail"
          alt="Thumbnail"
          class="blog-thumbnail"
        />
        <div class="blog-details">
          <h2>{{ post.node.title }}</h2>
          <p>By {{ post.node.author }} on {{ formatDate(post.node.date) }}</p>
        </div>
      </g-link>
    </nav>
  </Layout>
</template>

<page-query>
  query {
    allPost {
      totalCount
      edges {
        node {
          id
          title
          author
          thumbnail
          date
          content
          timeToRead
        }
      }
    }
  }
  </page-query>

<script>
export default {
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString(undefined, options)
    },
  },
}
</script>

<style>
h1 {
  text-align: center;
}
.blog-list {
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.blog-item {
  display: flex;
  flex-direction: column;
  width: calc(33.333% - 2rem);
  border-radius: 8px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: box-shadow 0.3s ease;
}

.blog-item:hover {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  scale: 1.05;
  transition: 0.4s ease-in-out;
}

.blog-thumbnail {
  width: 100%;
  height: auto;
}

.blog-details {
  padding: 1rem;
}

.blog-details h2 {
  margin: 0 0 0.5rem;
  font-size: 1.5rem;
}

.blog-details p {
  margin: 0;
  font-size: 1rem;
  color: #555;
}
</style>
