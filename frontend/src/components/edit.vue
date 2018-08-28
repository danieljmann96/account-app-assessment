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
  //window.onload = function(){
    //axios.get(`/backend/view/` + this.$route.params.id)
      //.then(response => {
        //console.log(response)
      //})
      //.catch(e => {
       // this.errors.push(e)
      //})
  //};
    export default {
        name: 'edit',
        components: {userform, navbar},
        data(){
        return{
          form: {
            fn: '', ln: '', an: ''
          },
          thisresponse: ''
        }
      },
      methods: {
        onSubmit(evt) {
          evt.preventDefault();
          var params = new URLSearchParams();
          params.append('firstname', this.form.fn);
          params.append('lastname', this.form.ln);
          params.append('accountno', this.form.an);
          axios.post(`/backend/edit`, params)
            .then(response => {
              this.thisresponse = response.data
            })
            .catch(e => {
              this.errors.push(e)
            })
        },
        onReset(evt) {
          evt.preventDefault();
          /* Reset our form values */
          this.form.fn = '';
          this.form.ln = '';
          this.form.an = '';
          this.thisresponse = '';
        }
      }
    }
</script>

<style scoped>

</style>
