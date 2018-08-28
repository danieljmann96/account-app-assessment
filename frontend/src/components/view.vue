<template>
  <div>
    <navbar />
    <b-table striped hover outlined dark :items="items" onl></b-table>
    <font-awesome-icon icon="edit" />
  </div>
</template>

<script>
    import axios from 'axios';
    import navbar from '@/components/navbar';
    window.onload = function(){
      axios.get(`/backend/all`)
        .then(response => {
          this.items = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    };
    export default {
        name: 'view',
      components: {navbar},
        data(){
          return {
            items: items
          }
      }
    }
</script>

<style scoped>

</style>
