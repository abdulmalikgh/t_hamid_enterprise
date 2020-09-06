<template>
  <div>
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h2 class="h3 mb-0 text-gray-800">Categories /</h2>
    </div>
    <div class="row">
      <div class="col-12">
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item">
            <a
              class="nav-link active"
              id="pills-home-tab"
              data-toggle="pill"
              href="#pills-home"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >Add Category</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="pills-profile-tab"
              data-toggle="pill"
              href="#pills-profile"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >View Categories</a>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div class="container">
              <div class="row">
                <div class="col-sm-12 col-xs-12 col-md-9 col-lg-7">
                  <div class="card border-left-info py-5">
                    <div class="card-body">
                      <div class="col" v-if="add_category_error">
                        <div class="alert alert-danger">
                          <p>{{add_category_error}}</p>
                        </div>
                      </div>
                      <div class="col" v-else-if="message">
                        <div class="alert alert-success">
                          <p>{{message}}</p>
                        </div>
                      </div>
                      <form @submit.prevent="addCategory">
                        <div class="form-group">
                          <label for="exampleInputEmail1">Add Category</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="category_name"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter Category Name"
                            required
                          />
                        </div>
                        <button type="submit" class="btn btn-info">
                          Send
                          <div class="spinner-grow" role="status" v-if="loading">
                            <span class="sr-only">Loading...</span>
                          </div>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div class="contaner">
              <div class="row">
                <div class="col">
                  <div class="card border-left-info">
                    <div class="card-body">
                      <div class="row" v-if="get_category_error">
                        <div class="col">
                          <p class="my-5 text-center">{{get_category_error}}</p>
                        </div>
                      </div>
                      <div class="row" v-else>
                        <div class="col">
                          <div class="card">
                            <div class="card-body">
                              <div class="table-responsive">
                                <table
                                  class="table table-bordered"
                                  id="dataTable"
                                  width="100%"
                                  cellspacing="0"
                                >
                                  <thead>
                                    <tr>
                                      <th>Category Name</th>
                                      <th>Actions</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr v-for="(category, key) in categories" :key="key">
                                      <td>{{category.name}}</td>
                                      <td>
                                        <button
                                          class="btn btn-success mr-2"
                                          type="button"
                                          data-toggle="modal"
                                          data-target="#exampleModal"
                                          @click="getId(category.id,key)"
                                        >Add sub-category ({{category.subcategories ? category.subcategories.length : 0}})</button>
                                        <button
                                          class="btn btn-info mr-2"
                                          @click="categoryDetail(category.id,category.name)"
                                        >View sub-categories</button>
                                        <button
                                          class="btn btn-success mr-2"
                                          @click="categoryDetail(category.id,category.name,'add')"
                                        >Add Product</button>
                                        <button
                                          class="btn btn-danger mr-2"
                                          type="button"
                                          data-toggle="modal"
                                          data-target="#exampleModal1"
                                          @click="getId(category.id, key,category.name)"
                                        >Delete</button>
                                        <button
                                          class="btn btn-primary"
                                          type="button"
                                          data-toggle="modal"
                                          data-target="#exampleModal"
                                          @click="getId(category.id,key,category.name)"
                                        >Update</button>
                                      </td>
                                    </tr>
                                  </tbody>
                                  <tfoot>
                                    <tr>
                                      <th>Category Name</th>
                                      <th>Actions</th>
                                    </tr>
                                  </tfoot>
                                </table>
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
          </div>
        </div>
      </div>
    </div>

    <!--- add sub category --->
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
            <h5 class="modal-title" id="exampleModalLabel" v-if="!title">Add SubCategory</h5>
            <h5 class="modal-title" id="exampleModalLabel" v-else-if="title">Update {{title}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="card-body">
              <div class="col" v-if="add_category_error">
                <div class="alert alert-danger">
                  <p>{{add_category_error}}</p>
                </div>
              </div>
              <div class="col" v-else-if="message">
                <div class="alert alert-success">
                  <p>{{message}}</p>
                </div>
              </div>
              <form @submit.prevent="addSubCategory">
                <div class="form-group">
                  <label for="exampleInputEmail1" v-if="!category_name">Add Sub Category</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="category_name"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Category Name"
                    required
                  />
                </div>
                <div class>
                  <hr />
                  <button
                    type="button"
                    class="btn btn-danger mr-2 mybtn"
                    data-dismiss="modal"
                  >Cancel</button>
                  <button type="submit" class="btn btn-info" v-if="!title">
                    Send
                    <div class="spinner-grow" role="status" v-if="loading">
                      <span class="sr-only">Loading...</span>
                    </div>
                  </button>
                  <button
                    type="submit"
                    class="btn btn-info"
                    v-else-if="title"
                    @click="updateCategory()"
                  >
                    Update
                    <div class="spinner-grow" role="status" v-if="loading">
                      <span class="sr-only">Loading...</span>
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!--- add new category --->
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
            <h5>Delete Category</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p v-if="!deleteMessage">Do you really want to delete {{category_name}}</p>
            <div class="col" v-else-if="deleteMessage">
              <div class="alert alert-warning">
                <p>{{deleteMessage}}</p>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-info mr-2 mybtn" @click="deleteCategory">
              Yes
              <div class="spinner-grow" role="status" v-if="loading">
                <span class="sr-only">Loading...</span>
              </div>
            </button>
            <button type="button" class="btn btn-danger mr-2 mybtn" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 

<script>
import axios from 'axios'
function verifyToken(err) {
    if(err.response.status === 401) {
        this.$router.push('/admin_login')
    }
}
//urrs
const add_category = 'http://45.33.13.129:8001/api/category';

export default {
    components: {
      
    },
    data() {
        return {
            categories:[],
            category_name:'',
            loading: false,
            add_category_error:null,
            message:null,
            get_category_error:null,
            category_id: null,
            category_key:null,
            deleteMessage:null,
            title:null,
        }
    },
    methods: {
        categoryDetail(id,title, add) {
            this.$router.push(`/admin/category/${id}/${title}`)
            if(add) {
                this.$router.push(`/admin/add_product/${id}/${title}`)
            }
        }
        ,
        getId(id, key,categoryName) {
            this.category_id = id
            this.category_key = key
            this.add_category_error = null
            this.category_name = categoryName ? categoryName : this.category_name
            this.message = null
            this.deleteMessage = null
            this.title = categoryName ? categoryName : this.category_name
            console.log('key',this.category_key)
        }
        ,
        addCategory() {
            this.loading = true
            this.add_category_error = null
            this.message = null

            const data = {
                'name': this.category_name,
            }
             axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
            this.$http.post(
                add_category,
                data
            ).then( response => {
                if(response.status == 201) {
                    this.loading = false,
                    this.message = 'Category Created Successfully'
                    this.categories.push(response.data.category)
                    this.category_name = null
                }
            }).catch(err => {
                if(err.request) {
                    this.loading = false;
                    this.add_category_error = "Network Error Try Again"
                }
                verifyToken(err)
            })
        },
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
        },
        addSubCategory() {
            this.loading = true
            axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
            this.$http.post(`http://45.33.13.129:8001/api/category/${this.category_id}/subcategory`, {
                'name':this.category_name
            })
                .then(response => {
                    if(response.status === 201) {
                        this.loading = false,
                        this.message = "Sub-Category Created Successfully"
                        this.category_name = null
                        this.categories.splice(this.category_key,1)
                        this.categories.push(response.data.subcategory)

                    }
                }).catch( err => {
                    if(err.request) {
                        this.loading = false
                        this.add_category_error = 'Network Error Try Again'
                    }
                    verifyToken(err)
                })

            },
        deleteCategory(){
            this.loading = true
            axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
            this.$http.delete(`http://45.33.13.129:8001/api/category/${this.category_id}`)
                .then(response => {
                    if(response.status === 200) {
                        this.loading = false,
                        this.deleteMessage = `${this.category_name} deleted successfully`
                        this.categories.splice(this.category_key, 1)
                        this.category_name = null
                    }
                }).catch( err => {
                    if(err.request) {
                        this.loading = false
                        this.deleteMessage = 'Network Error Try Again'
                    }
                    verifyToken(err)
                })
        },
         updateCategory(){
            this.loading = true
            this.message = null
            this.add_category_error = null
            axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
            this.$http.put(`http://45.33.13.129:8001/api/category/${this.category_id}`,{
                    "name": this.category_name
                })
                .then(response => {
                    if(response.status === 201) {
                        this.loading = false,
                        this.message = `${this.category_name} Updated succesfully`
                        this.categories.splice(this.category_key, 1)
                        this.getCategories.push(response.data.category)
                    }
                }).catch( err => {
                    if(err.request) {
                        this.loading = false
                        this.add_category_error = 'Network Error Try Again'
                    }
                    verifyToken(err)
                })
        }
        
    },
    created(){
        this.getCategories();
    }
}
</script>

<style scoped>
    button{
        font-size: .8em;
    }
</style>