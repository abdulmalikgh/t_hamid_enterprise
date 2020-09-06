<template>
  <div id="productdetail">
    <div class="col-12" style="float:left">
      <div class="row">
        <div class="col py-3">
          <router-link :to="{name:'admin-products'}" style="float:left">Back</router-link>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12 px-5">
        <div class="card border-left-info">
          <div class="card-body">
            <div class="row" v-if="error">
              <div class="col-12">
                <p class="my-5">{{error}}</p>
              </div>
            </div>

            <div class="row" v-else-if="loading" style="text-align: center">
              <div class="col-12 my-5 py-5">
                <div class="spinner-grow text-info" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            </div>

            <div class="row" v-else-if="!loading && Object.keys(product).length === 0">
              <div class="col-12 my-5">
                <p class="my-5">No Products Available</p>
              </div>
            </div>

            <div class="row py-3" v-if="!loading && Object.keys(product).length > 0">
              <div class="col-12">
                <div class="row">
                  <div class="col-12">
                    <p>Name: {{ product.name }}</p>
                    <p>Category: {{ product.category.name }}</p>
                    <p v-if="product.sub_category">Sub-Category: {{product.sub_category.name}}</p>
                    <p>Description: {{ product.description }}</p>
                    <p>Price : GHC : {{ product.price }}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <p>Images</p>
                  </div>
                  <div class="row">
                    <div class="col-3" v-for="(image, key) in product.images" :key="key">
                      <img class="img-fluid" :src="`http://45.33.13.129:8001/${image.path}`" alt />
                    </div>
                  </div>
                </div>
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

export default {
    props:['id'],
    data() {
        return {
            loading: false,
            message:null,
            error:null,
            product:[]
        }
    },
    methods: {
          getProducts(){
               
               this.loading = true

               axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

               this.$http(`http://45.33.13.129:8001/api/product/${this.id}`)
               .then( response => {

                  if( response ) {
                      
                    this.loading = false
                    
                    this.product = response.data.product
                
                    console.log('product', response.data.product)
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