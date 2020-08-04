<template>
  <div id="admin_login"  class="bg-primary" style="width:100%">
    <div class="container">

        <!-- Outer Row -->
        <div class="row justify-content-center align-content-center">

        <div class="col-xl-10 col-lg-12 col-md-9">

            <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
                <!-- Nested Row within Card Body -->
                <div class="row">
                <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                <div class="col-lg-6">
                    <div class="p-5">
                    <div class="text-center">
                        <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>
                    <form class="user">
                        <div class="form-group">
                        <input type="email" v-model="email" class="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address...">
                        </div>
                        <div class="form-group">
                        <input type="password" v-model="password" class="form-control form-control-user" id="exampleInputPassword" placeholder="Password">
                        </div>
                        <button class="btn btn-primary btn-user btn-block">
                            Login
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
    password:null,
    email:null,
}
</script>

<style>

</style>