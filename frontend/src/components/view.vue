<template>
  <div>
    <navbar />
    <b-pagination class="danger" :total-rows="items.length" align="center"
                  :per-page="perPage" v-model="currentPage"></b-pagination>
    <b-table striped hover outlined dark
             :items="items" :fields="fields"
              :current-page="currentPage" :per-page="perPage">
      <template slot="edit" slot-scope="row">
        <router-link :to="'/edit/' + row.item.id">
        <font-awesome-icon icon="edit" style="color: lightgreen;"/>
        </router-link>
      </template>
      <template slot="delete" slot-scope="row">
        <b-link @click="modalmethod(row.item)">
        <font-awesome-icon icon="trash-alt" style="color: red;"/>
        </b-link>
      </template>
    </b-table>

    <b-modal id="modalsm" size="sm" title="Delete User"
             v-model="show" :header-bg-variant="'danger'"
             :header-text-variant="'light'"
             :body-bg-variant="'light'"
             :body-text-variant="'dark'"
             :footer-bg-variant="'light'"
             :footer-text-variant="'dark'">
      <b-container fluid>
        Are you sure you want to delete {{ modalresponse }}?
      </b-container>
      <div slot="modal-footer" class="w-100">
        <b-button :variant="'primary'" @click="show=false">No</b-button>
        <b-button :variant="'danger'" @click="deleteUser">Yes</b-button>
      </div>
    </b-modal>
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
            fields: [{key: 'first_name', sortable: true},
              {key: 'last_name', sortable: true},
              {key: 'account_no', sortable: true},
              'edit',
              'delete'],
            items: [],
            pagetitle: 'View users',
            show: false,
            modalresponse: '',
            usedid: null,
            currentPage: 1,
            perPage: 6
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
          },
          modalmethod(x){
            this.show = true;
            this.usedid = x.id;
            this.modalresponse = x.first_name + ' ' + x.last_name;
          },
          deleteUser: function() {
            axios.delete(`/backend/delete/` + this.usedid)
              .then(response => {
                this.getItemsFromAxios();
                this.show = false;
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
