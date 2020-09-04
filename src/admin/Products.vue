<template>
  <div id="id">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="card border-left-info">
            <div class="row" v-if="error">
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
            <div class="row" v-if="!loading && !products">
              <div class="col-12 my-5">
                <p class="my-5">No SubCategories Available</p>
              </div>
            </div>
            <div
              class="row justify-content-center align-content-center"
              v-if="!loading && products"
            >
              <div class="col-10 py-4">
                <div class="table-responsive">
                  <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                      <tr>
                        <th>Product Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(product, key) in products" :key="key">
                        <td>{{product.name}}</td>
                        <td>{{product.description}}</td>
                        <td>{{`GHC: ${product.price.toFixed(2)}` }}</td>
                        <td>
                          <button
                            class="btn btn-info mr-2"
                            @click="getId(product.id,product.name,key)"
                            type="button"
                            data-toggle="modal"
                            data-target="#exampleModal"
                          >Update</button>
                          <button
                            class="btn btn-danger"
                            @click="getId(product.id,product.name,key)"
                            type="button"
                            data-toggle="modal"
                            data-target="#exampleModal1"
                          >Delete</button>
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
export default {
    data() {
        return {
            products:[],
            message:null,
            loading:false,
            error: false,
            id:null,
            name:null,
            key:null
        }
    },
    methods: {
        getId(id, name, key){
            this.id = id
            this.name = name
            this.key = key
        },
        getProducts() {
            this.loading = true
            this.$http('http://45.33.13.129:8001/api/product')
                .then(response => {
                    if(response) {
                        this.products = response.data.products;
                        this.loading = false
                        console.log('products', response.data.products)
                    }
                }).catch(err => {
                    if(err.request) {
                        this.error = 'Network Error'
                        this.loading = false
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