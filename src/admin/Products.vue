<template>
  <div id="id">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="card border-left-info">
            <div class="row" v-if="error">
              <div class="col-12">
                <p class="my-5">{{error}}</p>
              </div>
            </div>
            <div class="row" v-else-if="loading">
              <div class="col-12 my-5 py-5">
                <div class="spinner-grow text-info" role="status" v-if="loading">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            </div>
            <div class="row" v-else-if="!loading && products.length === 0">
              <div class="col-12 my-5">
                <p class="my-5">No Products Available</p>
              </div>
            </div>
            <div
              class="row justify-content-center align-content-center"
              v-if="!loading && products.length > 0"
            >
              <div class="col-10 py-4">
                <div class="table-responsive">
                  <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                      <tr>
                        <th>Product Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(product, key) in products" :key="key">
                        <td>{{product.name}}</td>
                        <td>{{product.description}}</td>
                        <td>{{`GHC: ${product.price}` }}</td>
                        <td>
                          <button
                            class="btn btn-info mr-2"
                            @click="getId(product.id,product.name,key)"
                            type="button"
                            data-toggle="modal"
                            data-target="#exampleModal"
                          >Update</button>
                          <button
                            class="btn btn-danger"
                            @click="getId(product.id,product.name,key)"
                            type="button"
                            data-toggle="modal"
                            data-target="#exampleModal1"
                          >Delete</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--- start of delete modal --->
    <div
      class="modal fade"
      id="exampleModal1"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5>Delete product</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Do you really want to delete {{name}}</p>
            <div class="col" v-if="message">
              <div class="alert alert-success">
                <p>{{message}}</p>
              </div>
            </div>

            <div class="alert alert-warning" v-if="error">
              <p>{{error}}</p>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-info mr-2 mybtn" @click="deleteProduct">
              Yes
              <div class="spinner-grow" role="status" v-if="isDeleting">
                <span class="sr-only">Loading...</span>
              </div>
            </button>
            <button
              type="button"
              class="btn btn-danger mr-2 mybtn"
              data-dismiss="modal"
              @click="close"
            >Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
    data() {
        return {
            products:[],
            message:null,
            loading:false,
            error: false,
            id:null,
            name:null,
            key:null,
            isDeleting:false
        }
    },
    methods: {
        close(){
          this.message = null
          this.error = null
        },
        getId(id, name, key){
            this.id = id
            this.name = name
            this.key = key
        },

        deleteProduct() {
            this.message = null

            this.isDeleting = true

            this.$http.delete(`http://45.33.13.129:8001/api/product/${this.id}`)
            .then( response => {

              if( response ) {

                this.isDeleting = false

                this.message = `${this.name} is deleted successfully`
      
                return this.products.splice(this.key, 1)

              }
            }).catch( error => {

              if( error.request ) {

                this.isDeleting = false

                this.error = 'Network Error Try Again'
              }

              if( error.statusCode === 401 ) {

                this.$router.push('/admin_login')

              }
            })
        },

        getProducts(){
               
               this.loading = true

               axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

               this.$http(`http://45.33.13.129:8001/api/product`)
               .then( response => {

                  if( response ) {

                    this.loading = false

                    this.products = response.data.products
                  }
               
             }).catch (error => {
              
              if(error.request) {
        
                this.loading = false

                this.error = 'Network Error Try Again'
              }

              if(error.statusCode === 401) {

                this.$router.push('/admin_login')
              }
             })
                
        }
    },

    created() {
        this.getProducts()
    }
}
</script>

<style>

</style>