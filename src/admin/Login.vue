<template>
  <div id="admin_login"  class="bg-primary" style="width:100%; height:100vh">
    <div class="container">

        <!-- Outer Row -->
        <div class="row justify-content-center">
        <div class="col-12"  v-if="error">
            <div class="alert alert-danger">
                <p>{{error}}</p>
            </div>
        </div>
        <div class="col-xl-10 col-lg-12 col-md-9">

            <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
                <!-- Nested Row within Card Body -->
                <div class="row">
                <div class="col-lg-6 d-none d-lg-block bg-login-image">
                    <img src="../assets/logo.png" alt="">
                </div>
                <div class="col-lg-6">
                    <div class="p-5">
                    <div class="text-center">
                        <h1 class="h4 text-gray-900 mb-4">ADMIN LOGIN</h1>
                    </div>
                    <form class="user" @submit.prevent="login">
                        <div class="form-group">
                        <input type="email" v-model="email" required class="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address...">
                        </div>
                        <div class="form-group py-3">
                        <input type="password" v-model="password" required class="form-control form-control-user" id="exampleInputPassword" placeholder="Password">
                        </div>
                        <button type="submit" class="btn btn-primary btn-user btn-block">
                            Login
                            <div class="spinner-grow" role="status" v-if="loading">
                                <span class="sr-only">Loading...</span>
                            </div>
                        </button>
                    </form>
                    <hr>
                    <div class="text-center">
                        <a class="small" href="forgot-password.html">Forgot Password?</a>
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
</template>

<script>
export default {
    data(){
        return {
            password:null,
            email:null,
            loading:false,
            error: ''
        }
    },
    methods: {
        login(){
            this.loading = true

            const data = {
                email:this.email,
                password: this.password
            }
            this.$http.post('http://45.33.13.129:8001/api/login/', data)
                .then( response => {
                    if(response.status === 200){
                        alert('success')
                        this.loading = false
                    }
                }).catch(err => {
                    if(err) {
                        console.log('error', err)
                        this.loading = false;
                    }
                })

        }
    }
}
</script>

<style scoped>
.bg-login-image img{
    width: 100%;
    height: 100%;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>