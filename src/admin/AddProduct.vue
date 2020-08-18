<template>
  <div>
      
      <div class="row">
          <div class="col-12">
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
                        <input type="number" min='0' class="form-control" id="exampleInputPassword2" placeholder="Enter Price" v-model="description" required>
                    </div>
                    <button type="submit" class="btn btn-info">Add Product</button>
                </form>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: ['id','title'],
    data() {
        return {

        }
    },
    methods:{

    },
}
</script>

<style>

</style>