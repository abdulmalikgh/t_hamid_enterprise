<template>
  <div>
      <div class="d-sm-flex align-items-center justify-content-between mb-4" >
            <h2 class="h3 mb-0 text-gray-800"> <router-link style="display:inline" :to="{name:'admin-categories'}">Categories</router-link>  / {{id}}</h2>
        </div>

        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="card border-left-info">
                        <div class="row" v-if='error'>
                            <div class="col">
                                <p class="my-5">{{error}}</p>
                            </div>
                        </div>
                        <div class="row" v-else-if="loading">
                            <div class="col">
                                <div class="spinner-grow" role="status" v-if="loading">
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </div>
                        </div>
                        <div class="row" v-if="!loading && subCategories.length === 0">
                            <div class="col">
                                <p>
                                    No SubCategories Available
                                </p>
                            </div>
                        </div>
                        <div class="row" v-if="!loading && subCategories.length > 0">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>SubCategory Name</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr  v-for="(category, key) in categories" :key='key'>
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
</template>

<script>
export default {
    props:['id'],
    data(){
        return {
            subCategories: []
        }
    },
    methods:{
        getCategories() {
            axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
            this.$http.get('http://45.33.13.129:8001/api/category')
                .then(response => {
                    if(response.status === 200) {
                        this.categories = response.data.categories
                    }
                }).catch(err => {
                    if(err.request) {
                        this.get_category_error = "Network Error Try Again"
                    }
                })
        }
    }
}
</script>

<style>

</style>