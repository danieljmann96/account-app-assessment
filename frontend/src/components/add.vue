<template>
  <div>
    <navbar />
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group horizontal id="InputGroup1" label="First Name:" label-for="Input1">
        <b-form-input id="Input1" type="text"
                      v-model="form.fn" required
                      placeholder="Enter first name"
                      class="w-50">
        </b-form-input>
      </b-form-group>
      <b-form-group horizontal id="InputGroup2" label="Last Name:" label-for="Input2">
        <b-form-input id="Input2" type="text"
                      v-model="form.ln" required
                      placeholder="Enter last name"
                      class="w-50">
        </b-form-input>
      </b-form-group>
      <b-form-group horizontal id="InputGroup3" label="Account No:" label-for="Input3">
        <b-form-input id="Input3" type="text"
                      v-model="form.an" required
                      placeholder="Enter Account No"
                      class="w-50">
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <h2>{{ thisresponse }}</h2>
  </div>
</template>

<script>
  import navbar from '@/components/navbar'
  import axios from "axios";
    export default {
      name: 'add',
      components: {navbar},
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
