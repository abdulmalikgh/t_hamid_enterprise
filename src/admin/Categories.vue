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
                                <div class="col-sm-12 col-xs-12 col-md-9 col-lg 7">
                                    <form>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Category Name</label>
                                            <input type="email" class="form-control" v-model='category_name' id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Category Name" required>
                                            
                                        </div>
                                        <button type="submit" class="btn btn-primary">Send</button>
                                    </form>
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
export default {
    data() {
        return {
            category_name
        }
    }
}
</script>

<style>

</style>