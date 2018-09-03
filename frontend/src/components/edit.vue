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
        name: 'edit',
        components: {userform, navbar},
      mounted(){
        this.loadInputs(this.$route.params.id);
      },
        data(){
        return{
          thisresponse: '',
          pagetitle: ''
        }
      },
      methods: {
        loadInputs(thisId){
          axios.get(`/backend/view/` + thisId)
            .then(response => {
              this.$children[1].form.fn = response.data.first_name;
              this.$children[1].form.ln = response.data.last_name;
              this.$children[1].form.an = response.data.account_no;
              this.pagetitle = 'Editing ' + this.$children[1].form.fn + ' ' + this.$children[1].form.ln;
          })
        },
        onSubmit(evt) {
          evt.preventDefault();
          var params = new URLSearchParams();
          params.append('firstname', this.$children[1].form.fn);
          params.append('lastname', this.$children[1].form.ln);
          params.append('accountno', this.$children[1].form.an);
          axios.put(`/backend/edit/` + this.$route.params.id, params)
            .then(response => {
              this.thisresponse = response.data
            })
            .catch(e => {
              this.errors.push(e)
            });
          this.$children[1].show = true;
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
