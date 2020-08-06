<template>
  <div>
      <div class="d-sm-flex align-items-center justify-content-between mb-4" >
            <h2 class="h3 mb-0 text-gray-800"> <router-link style="display:inline"
             :to="{name:'admin-categories'}">Categories</router-link>  / {{title}}</h2>
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
                                                <button class="btn btn-info mr-2"
                                                     @click="getId(category.id,category.name,key)"
                                                     type="button" data-toggle="modal" 
                                                     data-target="#exampleModal"
                                                     >
                                                        Update
                                                     </button>
                                                <button class="btn btn-danger" 
                                                    @click="getId(category.id,category.name,key)"
                                                    type="button" data-toggle="modal" 
                                                    data-target="#exampleModal1">
                                                        Delete
                                                    </button>
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
        <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5>Delete Category</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                    <p v-if="!deleteMessage"> Do you really want to delete {{category_name}}</p>
                    <div class="col" v-else-if="deleteMessage">
                            <div class="alert alert-warning">
                                <p>
                                    {{deleteMessage}}
                                </p>
                            </div>
                    </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-info mr-2 mybtn" @click="deleteSubCategory">
                        Yes
                        <div class="spinner-grow" role="status" v-if="load">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </button>
                  <button type="button" class="btn btn-danger mr-2 mybtn" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
        </div>

        <!--- add sub category --->
          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Update {{category_name}}
                    </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="card-body">
                        <div class="col" v-if="updateMessage">
                             <div class="alert alert-danger">
                                <p>
                                    {{updateMessage}}
                                </p>
                            </div>
                        </div>
                    <form @submit.prevent="updateSubCategory">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Add Sub Category</label>
                                <input type="text" class="form-control" v-model='category_name' id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Category Name" required>
                        </div>
                        <div class="">
                            <hr />
                            <button type="submit" class="btn btn-info"
                                >
                                Update
                                <div class="spinner-grow" role="status" v-if="load">
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </button>
                            <button type="button" class="btn btn-danger mr-2 mybtn" data-dismiss="modal">Cancel</button>
                        </div>
                    </form>
                </div>
                
              </div>
            </div>
          </div>
          <!--- add new category --->
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
            deleteMessage:null,
            updateMessage:null,
            subCategory_id:null,
            category_name:null,
            category_key:null,
            load:false,
        }
    },
    methods:{
        getId(id,name,key){
            this.deleteMessage = null
            this.updateMessage = null
            this.category_id = id
            this.category_key = key
            this.category_name = name
        },
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
        },
        deleteSubCategory() {
            
             this.load = true
             this.deleteMessage = null

            axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
            this.$http.delete(`http://45.33.13.129:8001/api/category/${this.id}/subcategory/${this.category_id}`)
                .then(response => {
                    if(response.status === 200) {
                        this.load = false
                        this.subCategories.splice(this.category_key,1)
                        this.deleteMessage = 'Category Deleted Successfully'    
                    }
                }).catch(err => {
                    if(err.request) {
                        this.load = false
                        this.deleteMessage = "Network Error Try Again"
                    }
                })
        }
    },
    created(){
        this.getCategories()
    }
}
</script>

<style>

</style>