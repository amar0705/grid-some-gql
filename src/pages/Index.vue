<template>
  <Layout>
    <div class="main-show">
      <div class="blog-page">
        <h1>"Welcome to the Blog"</h1>
        <p>
          Move to the
          <router-link to="/blog" class="blog-link" style="color: green"
            >Blog section</router-link
          >
          for further information.
        </p>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Blog Page',
  },
}
</script>

<style>
.main-show {
  width: 100vw;
  height: 100vh;
  background-image: url('https://img.freepik.com/free-photo/flowers-notebook-near-laptop_23-2147759307.jpg');
  overflow-x: hidden !important;
}
.blog-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 2rem auto;
}

.blog-page h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.blog-page p {
  font-size: 1.2rem;
  color: #555;
}

.blog-link {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}

.blog-link:hover {
  text-decoration: underline;
}
</style>
