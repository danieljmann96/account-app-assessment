<template>
  <div class="mt-4">
    <b-form @submit="this.$parent.onSubmit" @reset="this.$parent.onReset">
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
    <b-modal v-model="show"
             title="Success!"
             :header-bg-variant="'success'"
             :header-text-variant="'light'"
             :body-bg-variant="'light'"
             :body-text-variant="'dark'"
             :footer-bg-variant="'light'"
             :footer-text-variant="'dark'">
      <b-container fluid>
        {{ this.$parent.thisresponse }}
      </b-container>
      <div slot="modal-footer" class="w-100">
        <b-btn class="float-right" variant="success" :to="{ name: 'view' }">
          OK
        </b-btn>
      </div>
    </b-modal>
  </div>
</template>

<script>
    export default {
        name: 'userform',
      data(){
          return {
            form: {
              fn: '',
              ln: '',
              an: ''
            },
            show: false
        }

      }
    }
</script>

<style scoped>

</style>
