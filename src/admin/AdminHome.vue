<template>
  <div id="home">
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h2 class="h3 mb-0 text-gray-800">Dashboard</h2>
    </div>

    <div class="row" v-if="loading">
      <div class="col-12">
        <div class="card border-left-info">
          <div class="card-body">
            <div class="row" style="text-align: center">
              <div class="col-12 my-5 py-5">
                <div class="spinner-grow text-info" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row" v-if="error">
      <div class="col-12">
        <div class="card border-left-info">
          <div class="card-body">
            <div class="row" style="text-align: center">
              <div class="col-12">
                <p class="my-5">{{error}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row" v-if="!loading && !error">
      <div class="col-5">
        <div class="card border-left-info">
          <div class="card-header">
            <p>Categories</p>
          </div>
          <div class="card-body">
            <div class="row" style="text-align: center">
              <div class="col-12">
                <p class="my-5 text-info" style="font-size:2em">{{ categories.length }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-5">
        <div class="card border-left-info">
          <div class="card-header">
            <p>Products</p>
          </div>
          <div class="card-body">
            <div class="row" style="text-align: center">
              <div class="col-12">
                <p class="my-5 text-info" style="font-size:2em">{{ products.length }}</p>
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
  data() {
    return {
     loading:false,
     products:[],
     categories:[],
     error:null,
    }
  },
  methods: {
    getProducts(){
     
               this.loading = true

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
                
        },
    
     getCategories() {

            axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

            this.$http.get('http://45.33.13.129:8001/api/category')
                .then(response => {

                    if(response.status === 200) {

                        this.categories = response.data.categories
                        console.log('Categories', this.categories)
    
                    }
                }).catch(err => {

                    if(err.request) {

                        this.get_category_error = "Network Error Try Again"

                    }
                })
        },

  },
  computed:{
    
  },
  created(){
      this.getProducts()
      this.getCategories()
  }
}
</script>

<style scoped>
.mybtn{
  width:100%;
  padding-top:10px 0;
}
</style>