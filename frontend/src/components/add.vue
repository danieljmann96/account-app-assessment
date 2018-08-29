<template>
  <div>
    <navbar />
    <userform />
  </div>
</template>

<script>
  import navbar from '@/components/navbar';
  import axios from "axios";
  import userform from '@/components/userform';
    export default {
      name: 'add',
      components: {userform, navbar},
      data(){
        return{
          thisresponse: '',
          pagetitle: 'Add a user'
        }
      },
      methods: {
        onSubmit(evt) {
          evt.preventDefault();
          var params = new URLSearchParams();
          params.append('firstname', this.$children[1].form.fn);
          params.append('lastname', this.$children[1].form.ln);
          params.append('accountno', this.$children[1].form.an);
          axios.post(`/backend/add`, params)
            .then(response => {
              this.thisresponse = response.data
            })
            .catch(e => {
              this.errors.push(e)
            })
        },
        onReset(evt) {
          evt.preventDefault();
          this.$children[1].form.fn = '';
          this.$children[1].form.ln = '';
          this.$children[1].form.an = '';
          this.thisresponse = '';
        }
      }
    }
</script>

<style scoped>
</style>
