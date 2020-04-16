<template>
    <div>
        <div class="col-md-12 form-wrapper">
            <h2> Create Customer </h2>
            <form id="create-post-form" @submit.prevent="createCustomer">
                <div class="form-group col-md-12">
                    <label for="first_name"> First Name </label>
                    <input type="text" id="first_name" v-model="first_name" name="first_name" class="form-control" placeholder="Enter first name">
                </div>
                <div class="form-group col-md-12">
                    <label for="last_name"> Last Name </label>
                    <input type="text" id="last_name" v-model="last_name" name="last_name" class="form-control" placeholder="Enter last name">
                </div>
                <div class="form-group col-md-12">
                    <label for="email"> Email </label>
                    <input type="text" id="email" v-model="email" name="email" class="form-control" placeholder="Enter email">
                </div>
                <div class="form-group col-md-12">
                    <label for="phone"> Phone </label>
                    <input type="text" id="phone_number" v-model="phone" name="phone" class="form-control" placeholder="Enter phone number">
                </div>
                <div class="form-group col-md-12">
                    <label for="address"> Address </label>
                    <input type="text" id="address" v-model="address" name="address" class="form-control" placeholder="Enter address">
                </div>
                <div class="form-group col-md-12">
                    <label for="title"> Description </label>
                    <input type="text" id="description" v-model="description" name="description" class="form-control" placeholder="Enter description">
                </div>
                <div class="form-group col-md-12">
                    <label for="title"> File </label>
                    <input type="file" id="file" name="file" ref="file" v-on:change="handleFileUpload()" class="form-control" placeholder="Select File">
                </div>
                <div class="form-group col-md-4 pull-right">
                  <button class="btn btn-success" type="submit"> Create Customer </button>
              </div>
            </form>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { server } from '../../helper'
import router from '../../router'

export default {
    data(){
        return{
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            address: '',
            description: '',
            file: ''
        }
    },
    methods: {
        createCustomer(){
            let customerData = {
                first_name: this.first_name,
                last_name: this.last_name,
                email: this.email,
                phone: this.phone,
                address: this.address,
                description: this.description
            }
            this.__submitToServer(customerData)
        },
        __submitToServer(data) {
            axios.post(server.baseURL+'/customer/create', data).then(() => {
                router.push({ name: 'home' })
            })
        },
        handleFileUpload() {
            this.file = this.$refs.file.files[0]
            let formData = new FormData()
            formData.append('file', this.file)

            axios.post(server.baseURL+'/customer/upload', formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            ).then(response => {
                console.log(response)
            })
            .catch(response => {
                console.log(response)
            })
        }
    }
}
</script>