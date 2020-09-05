<template>
  <div>
    <div class v-if="message">
      <div class="alert alert-danger">
        <p>{{ message }}</p>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-sm-12 col-md-11 col-lg-10">
        <div class="col-12" style="float:left">
          <div class="row">
            <div class="col py-3">
              <router-link :to="{name:'admin-categories'}" style="float:left">Back</router-link>
            </div>
          </div>
        </div>
        <div class="card border-left-info">
          <div class="card-header">
            <h3>Add Product to {{ title }}</h3>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-11">
                <form @submit.prevent="addProducts" enctype="multipart/form-data">
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
                    <!-- <FilePond
                      allowMultiple="true"
                      accepted-file-types="image/jpeg, image/png, image/jpg"
                      ref="pond"
                    />-->
                    <input type="file" @change="uploadfiles" multiple />
                  </div>
                  <button type="submit" class="btn btn-info">
                    <div class="spinner-grow" role="status" v-if="loading">
                      <span class="sr-only">Loading...</span>
                    </div>Add Product
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import vueFilePond from 'vue-filepond';
import 'filepond/dist/filepond.min.css';

import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';

const url = 'http://45.33.13.129:8001/api/product';
export default {
    props: ['id','title'],

    components: {
        FilePond: vueFilePond(FilePondPluginImagePreview)
    },
    data() {
        return {
            name:'',
            description:'',
            price:'',
            message:null,
            loading:false,
            files:null
        }
    },
    methods:{
      uploadfiles(event) {
        this.files = event.target.files
      }
      ,
        addProducts() {
            this.loading = true
            
            const formData = new FormData()

            formData.append('name',this.name)
            formData.append('description',this.description)
            formData.append('price',this.price)
            formData.append('category_id', this.id)
            
            for ( let i = 0; i < this.files.length; i++) {
              formData.append(`images[]`, this.files[i]) 
            }
            
            axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
     
            this.$http.post(url, 
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
                this.message = 'Network Error Try Again'
              }
            })
         
        }
    },  
} 
</script>

<style scoped>
    label{
        float:left !important;  
    }
</style>