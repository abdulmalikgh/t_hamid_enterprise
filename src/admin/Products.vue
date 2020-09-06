<template>
  <div id="id">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="card border-left-info">
            <div class="row" v-if="error" style="text-align: center">
              <div class="col-12">
                <p class="my-5">{{error}}</p>
              </div>
            </div>
            <div class="row" v-else-if="loading" style="text-align: center">
              <div class="col-12 my-5 py-5">
                <div class="spinner-grow text-info" role="status" v-if="loading">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            </div>
            <div
              class="row"
              v-else-if="!loading && products.length === 0"
              style="text-align: center"
            >
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
                        <th>Category</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(product, key) in products" :key="key">
                        <td>{{product.name}}</td>
                        <td>{{product.category.name}}</td>
                        <td>
                          <button
                            class="btn btn-info mr-2"
                            @click="productDetail(product.id)"
                            type="button"
                          >view detail</button>
                          <button
                            class="btn btn-danger mr-2"
                            type="button"
                            data-toggle="modal"
                            data-target="#exampleModal1"
                            @click="getId(product.id,key)"
                          >Delete</button>
                          <button
                            class="btn btn-primary"
                            type="button"
                            data-toggle="modal"
                            data-target="#exampleModal"
                            @click="update(product.id,key,product.category.id, product.name, product.price, product.description,product.images)"
                          >Update</button>
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
            <p>Do you really want to delete {{productName}}</p>
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

    <!-- Update product -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Update {{productName}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body">
            <div class="card-body">
              <div class="row" v-if="message">
                <div class="col-12">
                  <div class="alert alert-succes">
                    <p>{{message}}</p>
                  </div>
                </div>
              </div>

              <div class="row" v-if="error">
                <div class="col-12">
                  <div class="alert alert-succes">
                    <p>{{error}}</p>
                  </div>
                </div>
              </div>

              <form @submit.prevent="updateProduct" enctype="multipart/form-data">
                <div class="form-group">
                  <label for="exampleInputEmail1">Product Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Product Name"
                    v-model="name"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Product Description</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter Product Description"
                    v-model="description"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword2">Price</label>
                  <input
                    type="number"
                    min="0"
                    class="form-control"
                    id="exampleInputPassword2"
                    placeholder="Enter Price"
                    v-model="price"
                    required
                  />
                </div>
                <div class="form-group">
                  <input type="file" @change="uploadFiles" multiple />
                </div>
                <button type="submit" class="btn btn-info">
                  <div class="spinner-grow" role="status" v-if="loading">
                    <span class="sr-only">Loading...</span>
                  </div>Update Product
                </button>
              </form>
            </div>
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
            error: null,
            id:null,
            productName:null,
            key:null,
            isDeleting:false,
            description:null,
            name:null,
            price:null,
            files:null,
            categoryId:null,

        }
    },
    methods: {
      update(id,key,category_id,name,price,description, images){
        this.id = id
        this.key = key
        this.categoryId = category_id
        this.name = name
        this.price = price
        this.description = description 
       
      },
      getId(id,key){

          this.id = id
        
        },
      uploadFiles(event){
          this.files = event.target.files
        },
      close(){
          this.message = null
          this.error = null
        },
      productDetail(id){
            this.$router.push(`product/${id}`)
        },
      updateProduct(){
          this.loading = true
          this.message = false

            
            const formData = new FormData()

            formData.append('name',this.name)
            formData.append('description',this.description)
            formData.append('price',this.price)
            formData.append('category_id', this.id)
            
            for ( let i = 0; i < this.files.length; i++) {
              formData.append(`images[]`, this.files[i]) 
              console.log('Images', this.files)
            }
            
            axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
     
            this.$http.put(`http://45.33.13.129:8001/api/product/${this.id}`, 
                formData
            ).then(response => {
              if(response) {
                this.loading = false;
                this.message = 'Product Created Successfully'

                this.name = null
                this.description = null
                this.price = null
                this.files = null
              }
            }).catch( err => {
              if(err.request) {
                this.loading = false;
                this.error = 'Network Error Try Again'
              }
            })
        }
        ,
        deleteProduct() {
            this.message = null

            this.isDeleting = true

            this.$http.delete(`http://45.33.13.129:8001/api/product/${this.id}`)
            .then( response => {

              if( response ) {

                this.isDeleting = false

                this.message = `${this.productName} is deleted successfully`
      
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

                    const product = response.data.products

                    this.products = product

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