<template>
  <div>
      <div class="d-sm-flex align-items-center justify-content-between mb-4" >
            <h2 class="h3 mb-0 text-gray-800"> <router-link style="display:inline" :to="{name:'admin-categories'}">Categories</router-link>  / {{title}}</h2>
        </div>
       
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="card border-left-info">
                        <div class="row" v-if='error'>
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
                        <div class="row" v-if="!loading && !subCategories">
                            <div class="col-12 my-5">
                                <p class="my-5 ">
                                    No SubCategories Available
                                </p>
                            </div>
                        </div>
                        <div class="row justify-content-center align-content-center" v-if="!loading && subCategories">
                            <div class="col-10 py-4">
                                <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>SubCategory Name</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr  v-for="(category, key) in subCategories" :key='key'>
                                            <td>
                                                {{category.name}}
                                            </td>
                                            <td>
                                                <button class="btn btn-info">Update</button>
                                                <button class="btn btn-danger">Delete</button>
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
        
      
  </div>
</template>

<script>
import axios from 'axios'

export default {
    props:['id','title'],

    data(){
        return {
            subCategories: [],
            loading:false,
            error:null,
        }
    },
    methods:{
        getCategories() {
            this.loading = true

            axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
            this.$http.get('http://45.33.13.129:8001/api/category')
                .then(response => {
                    if(response.status === 200) {

                        this.loading = false
                       
                       for(let i = 0; i < response.data.categories.length; i++) {
                           if(parseInt(response.data.categories[i].id) === parseInt(this.id)) {
                               this.subCategories = response.data.categories[i].subcategories
                               console.log('data from api', this.subCategories)
                               return;
                           }
                        
                       }
                    }
                }).catch(err => {
                    if(err.request) {
                        this.loading = false
                        this.error = "Network Error Try Again"
                    }
                })
        }
    },
    created(){
        this.getCategories()
        console.log('sub categories', this.subCategories)
    }
}
</script>

<style>

</style>