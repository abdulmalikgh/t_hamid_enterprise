<template>
  <div>
      
      <div class="row justify-content-center ">
          <div class="col-sm-12 col-md-11 col-lg-10">
              <div class="col-12">
                  <router-link :to="{name:'admin-home'}" style="float:left">Back </router-link>
              </div>
              <div class="card border-left-info">
                  <div class="card-header">
                      <h3>Add Product</h3>
                  </div>
                  <div class="card-body">
                      <div class="row">
                      <div class="col-11">
                          <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Product Name</label>
                                <input type="type" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Product Name" v-model="name" required>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Product Description</label>
                                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter Product Description" v-model="description" required>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword2">Price</label>
                                <input type="number" min='0' class="form-control" id="exampleInputPassword2" placeholder="Enter Price" v-model="price" required>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword2">Images</label>
                                <input multiple type="file" class="form-control" id="exampleInputPassword2" placeholder="Select images" ref="images" required>
                            </div>
                            <button type="submit" class="btn btn-info">Add Product</button>
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
const url = 'http://45.33.13.129:8001/api/product';
export default {
    props: ['id','title'],
    data() {
        return {
            name:'',
            description:'',
            price:'',
            images:[],
            message:null,
            loading:false,
        }
    },
    methods:{
        addProducts() {
            this.loading = false
            
            const data = {
                name : this.name,
                description:this.description,
                price:this.price,
                category_id:this.id,
                images: this.images
            }
            this.$http.post(url, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                data
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