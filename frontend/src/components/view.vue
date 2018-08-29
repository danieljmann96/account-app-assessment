<template>
  <div>
    <navbar />
    <b-table striped hover outlined dark :items="items" :fields="fields">
      <template slot="edit" slot-scope="row">
        <router-link :to="'/edit/' + row.item.id">
        <font-awesome-icon icon="edit" style="color: lightgreen;"/>
        </router-link>
      </template>
      <template slot="delete" slot-scope="row">
        <font-awesome-icon icon="trash-alt" style="color: red;"/>
      </template>
    </b-table>
  </div>
</template>

<script>
    import axios from 'axios';
    import navbar from '@/components/navbar';

    export default {
        name: 'viewPersonnel',
      components: {navbar},
      mounted(){
        this.getItemsFromAxios()
      },
        data(){
          return {
            fields: ['first_name', 'last_name', 'account_no', 'edit', 'delete'],
            items: [],
            pagetitle: 'View users'
          }
      },
      methods: {
          getItemsFromAxios:  function() {
            axios.get(`/backend/all`)
              .then(response => {
                this.items = response.data
              })
              .catch(e => {
                this.errors.push(e)
              })
          }
      }
    }

</script>

<style scoped>
</style>
