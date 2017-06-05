{{{{raw}}}}
<template>
  <section class="container">
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      Events
    </h1>
    <ul class="users">
      <li v-for="(event, index) in events" class="user">
        <nuxt-link :to="{ name: 'id', params: { id: index }}">
          {{ event.Title }}
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>
{{{{/raw}}}}

<script>
import axios from '~plugins/axios'

export default {
  async asyncData () {
    let { data } = await axios.get('https://6qk9exubi1.execute-api.us-east-1.amazonaws.com/dev/events')
    return {
      events: data
    }
  },
  head () {
    return {
      title: 'Users'
    }
  },
  created () {
    console.log(this.events)
  }
}
</script>

<style scoped>
.title
{
  margin: 30px 0;
}
.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.user
{
  margin: 10px 0;
}
</style>
