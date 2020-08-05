<template>
  <div> 
      <div class="d-sm-flex align-items-center justify-content-between mb-4" >
            <h2 class="h3 mb-0 text-gray-800">Categories</h2>
        </div>
        <div class="row">
            <div class="col-12">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Add Category</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">View Categories</a>
                    </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div class="container">
                            <div class="row">
                                <div class="col" v-if="add_category_error">
                                    <div class="alert alert-danger">
                                        <p>
                                            {{add_category_error}}
                                        </p>
                                    </div>
                                </div>
                                <div class="col" v-else-if="message">
                                    <div class="alert alert-success">
                                        <p>
                                            {{message}}
                                        </p>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-xs-12 col-md-9 col-lg-7">
                                    <div class="card border-left-info py-5">
                                        <div class="card-body">
                                            <form @submit.prevent="addCategory">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Add Category</label>
                                                    <input type="text" class="form-control" v-model='category_name' id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Category Name" required>
                                                    
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
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        
                    </div>
                
                </div>
            </div>
        </div>
  </div>
</template> 

<script>
const add_category = 'http://45.33.13.129:8001/api/category';
const header = {
    'Authorization': `${localStorage.getItem('token')}`
}

export default {
    data() {
        return {
            categories:[],
            category_name:'',
            loading: false,
            add_category_error:null,
            message:null,
        }
    },
    methods: {
        addCategory() {
            this.loading = true

            const data = {
                'name': this.category_name,
            }
            this.$http.post(
                add_category,
                header,
                data
            ).then( response => {
                if(response.status == 200) {
                    this.loading = false,
                    this.message = 'Category Created Successfully'
                    this.categories.push(response.data)
                }
            }).catch(err => {
                if(err) {
                    this.loading = false;
                    this.add_category_error = err.response.message
                }
            })
        }
    }
}
</script>

<style>

</style>