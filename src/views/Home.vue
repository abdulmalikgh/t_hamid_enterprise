<template>
  <div class="home">
    <nav class="navbar navbar-expand-lg fixed-top">
      <a class="navbar-brand" href="#hero">T-Hamid Enterprise</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fa fa-bars"></i>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#hero">
              HOME
              <span class="sr-only">(current)</span>
            </a>
          </li>
        </ul>

        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" />
          <button class="btn my-sm-0" type="submit">SEARCH</button>
        </form>
      </div>
    </nav>

    <div class="container-fluid inner-pages-container">
      <router-view />
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from '../views/Footer'
export default {
  components:{
    Footer:Footer
  }

}
</script>

<style scoped>
  nav {
    background-color: #fff;
    box-shadow: 0 4px 4px -4px rgba(0,0,0,0.12);
  }
  a{
    color:black;
  }
  a.navbar-brand {
    font-weight: 500;
    font-size: 1.5em;
  }
  a.navbar-brand:hover, a.navbar-brand:active {
    color: black;
  }
  .navbar-nav li {
    padding-top:10px;
    padding-bottom:10px;
  }
  .inner-pages-container{
    background-color:#f5f5f5;
    padding:0px;
    margin:0px;
  }
  .btn{
    color:#fff;
    background-color:#f68b1e;
  }
</style>
