<template>
  <Layout>
    <div class="post-container">
      <h1 class="post-title" v-html="$page.post.title"></h1>
      <h3 class="post-meta">
        By {{ $page.post.author }} on {{ $page.post.date }}
      </h3>
      <g-image :src="$page.post.thumbnail" class="post-thumbnail"></g-image>
      <div class="post-content" v-html="$page.post.content"></div>
      <Disqus
        shortname="portfolioblog-5"
        :identifier="$page.post.title"
        class="comments"
      />
    </div>
  </Layout>
</template>

<page-query>
query Post($path: String!) {
  post: post(path: $path) {
    id
    title
    author
    thumbnail
    date
    content
    timeToRead
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
    }
  },
}
</script>

<style>
.post-container {
  text-align: center;
  max-width: 800px;
  margin: 3rem auto;
  padding: 2.5rem;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.post-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1.5rem;
}

.post-meta {
  font-size: 1rem;
  color: #666;
  margin-bottom: 2.5rem;
}

.post-thumbnail {
  width: 100%;
  height: auto;
  margin-bottom: 2.5rem;
  border-radius: 10px;
}

.post-content {
  font-size: 1.2rem;
  color: #444;
  line-height: 1.8;
  margin-bottom: 2rem;
}
.comments {
  padding: 2rem;
  margin-top: 5rem;
  background: whitesmoke;
  border-radius: 5px;
}
</style>
