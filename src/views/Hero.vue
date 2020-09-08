<template>
  <div class="row justify-content-center page-wrapper">
    <div class="col-2 categories">
      <div class="row header">
        <div class="col-12">
          <h3>Categories</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <ul>
            <li>
              <a href>
                <i class="fas fa-folder-plus"></i>
                New In
              </a>
            </li>
            <li>
              <a href>
                <i class="fas fa-male"></i>
                Men
              </a>
            </li>
            <li>
              <a href>
                <i class="fas fa-female"></i>
                Women
              </a>
            </li>
            <li>
              <a href>
                <i class="fas fa-child"></i>
                Kids
              </a>
            </li>
            <li>
              <a href>
                <i class="fas fa-shoe-prints"></i>
                Footwear
              </a>
            </li>
            <li>
              <a href>
                <i class="fas fa-keyboard"></i>
                Accessories
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="col-7 carousel-container">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/hoddy.jpg" class="d-block w-100" alt="hoody" />
          </div>
          <div class="carousel-item">
            <img src="../assets/snikker.jpg" class="d-block w-100" alt="snikkers" />
          </div>
          <div class="carousel-item">
            <img src="../assets/snikkers.jpg" class="d-block w-100" alt="snikkers" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>

    <div class="col-2 contact">
      <div class="row">
        <div class="col-12">
          <ul>
            <li>
              <i class="fab fa-whatsapp-square"></i>
              Whatssap
            </li>
            <li>
              <i class="fab fa-facebook-square"></i>
              Facebook
            </li>
            <li>
              <i class="fas fa-phone-square-alt"></i>
              Call us on
              <br />+233 550965633
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .page-wrapper{
    padding-top:100px;
    width:100%;
    background-color:#f5f5f5;
    padding-bottom:50px;
  }
  .carousel img{
    width:100%;
    height: 400px;
    border-radius:10px;
    background-position: center;
    background-size: cover;
    background-repeat:no-repeat;
    box-shadow: 0 4px 4px -4px rgba(0,0,0,0.12);
  }
  .categories{
    background-color:#fff;
    color:#fff;
    border-radius: 10px;
    box-shadow: 0 4px 4px -4px rgba(0,0,0,0.12);
  } 
  .header h3{
    color:#fff;
    font-size: 1.2em;
    font-weight: 500;
    padding:10px 0;
    text-align:center;

  }
  .header div {
    background-color:#f68b1e;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
  ul {
    list-style: none;
  }
  ul li{
    padding:12px 0;
  }
  li a{
    text-decoration:none;
    color:black;
  }
  .categories ul li a i{
    padding:0 5px;
  }
  .contact{
    background-color:#fff;
    padding-top: 10px;
    border-radius:10px;
    height: 200px;
    box-shadow: 0 4px 4px -4px rgba(0,0,0,0.12);
  }
  .contact ul li i{
    color:#f68b1e;
    font-size:22px;
    padding-right:10px;
  }
  .row{
    justify-content: center;
  }
</style>