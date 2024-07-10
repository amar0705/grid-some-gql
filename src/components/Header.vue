<template>
  <header>
    <h2>{{ $static.metadata.siteName }}</h2>

    <nav>
      <g-link to="/">Home</g-link>
      <g-link to="/about">About</g-link>
      <g-link to="/blog">Blog</g-link>
    </nav>
  </header>
</template>

<!-- graphQL -->
<static-query>
    query {
      metadata {
        siteName
      }
    }
</static-query>

<script>
export default {}
</script>
<style>
header {
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 12rem);
  padding: 0.5rem 6rem;
  background: white;
  color: black;
  border: 1px solid black;
}
h2 {
  font-size: 1.4rem;
  font-weight: 900;
}

nav a {
  color: inherit;
  text-decoration: none;
  padding: 1rem;
  font-size: 1.2rem;
}
</style>
