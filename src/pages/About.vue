<template>
  <Layout>
    <div class="about-page">
      <h1>About Us</h1>
      <p>Welcome to the Blog! Thanks for joining!</p>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About Us',
  },
}
</script>

<style>
.about-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  max-width: 800px;
  margin: 2rem auto;
}

.about-page h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.about-page p {
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
  margin: 0;
}
</style>
