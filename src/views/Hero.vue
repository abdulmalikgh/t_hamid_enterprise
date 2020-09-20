  <template>
  <div id="hero">
    <div class="d-flex justify-content-center page-wrapper">
      <div class="categories">
        <div class="header">
          <h3>Categories</h3>
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

      <div class="carousel-container">
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

      <div class="contact">
        <div class="row">
          <div class="col-12">
            <ul>
              <li>
                <a href>
                  <i class="fab fa-whatsapp-square"></i>
                  Whatssap
                </a>
              </li>
              <li>
                <a href>
                  <i class="fab fa-facebook-square"></i>
                  Facebook
                </a>
              </li>
              <li>
                <i class="fas fa-phone-square-alt"></i>+233550965633
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-center">
      <div class="content">
        <div class="col-12 content-header">
          <h3>Top Selling Items</h3>
        </div>
        <div class="row content-images">
          <div class="col-12">
            <div class="row">
              <div class="col-2 content-image">
                <a href>
                  <img class="img-fluid" src="../assets/hoddy.jpg" alt />
                  <p>Long men hoodie</p>
                  <p>GHC 30</p>
                </a>
              </div>
              <div class="col-2 content-image">
                <a href>
                  <img class="img-fluid" src="../assets/hoddy.jpg" alt />
                  <p>Long men hoodie</p>
                  <p>GHC 30</p>
                </a>
              </div>
              <div class="col-2 content-image">
                <a href>
                  <img class="img-fluid" src="../assets/hoddy.jpg" alt />
                  <p>Long men hoodie</p>
                  <p>GHC 30</p>
                </a>
              </div>
              <div class="col-2 content-image">
                <a href>
                  <img class="img-fluid" src="../assets/hoddy.jpg" alt />
                  <p>Long men hoodie</p>
                  <p>GHC 30</p>
                </a>
              </div>
              <div class="col-2 content-image">
                <a href>
                  <img class="img-fluid" src="../assets/hoddy.jpg" alt />
                  <p>Long men hoodie</p>
                  <p>GHC 30</p>
                </a>
              </div>
              <div class="col-2 content-image">
                <a href>
                  <img class="img-fluid" src="../assets/hoddy.jpg" alt />
                  <p>Long men hoodie</p>
                  <p>GHC 30</p>
                </a>
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

}
</script>

<style scoped>
 #hero{
    margin:0;
    padding:0;
  }
  .page-wrapper{
    padding-top:100px;
    width:100%;
    background-color:#f5f5f5;
    margin-right: 0px;
    margin-left: 0px;
    padding-right:50px;
    padding-left:50px;
  }
  .carousel img{
    width:100%;
    height: 400px;
    /* border-radius:10px; */
    background-position: center;
    background-size: cover;
    background-repeat:no-repeat;
    box-shadow: 0 4px 4px -4px rgba(0,0,0,0.12);
  }
  .carousel-container {
    width: 60%;
    padding-right: 15px;
    padding-left: 15px;
  }
  .categories{
    background-color:#fff;
    color:#fff;
    /* border-radius: 10px; */
    box-shadow: 0 4px 4px -4px rgba(0,0,0,0.12);
    width:20%;
  } 
  .header h3{
    color:#fff;
    font-size: 1.2em;
    font-weight: 500;
    padding:15px 0;
    text-align:center;

  }
  .header{
    background-color:#f68b1e;
    /* border-top-right-radius: 10px;
    border-top-left-radius: 10px; */
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
    height: 200px;
    box-shadow: 0 4px 4px -4px rgba(0,0,0,0.12);
    width:20%;
    margin-bottom:20px;
  }
  .contact ul li i{
    color:#f68b1e;
    font-size:22px;
    padding-right:10px;
  }
  .row{
    justify-content: center;
  }
  .content{
    background-color: #fff;
    margin:0 40px 20px 40px;
  }
  .content-header{
    background-color:#f68b1e;
    padding-top:5px;
    padding-bottom:5px;
  }
  .content-header h3{
    color:#fff;
    font-size: 1.2em;
    padding:10px 0;
  }
  .content-images{
    padding:30px 20px;
  }
  .content-images p{
    font-size: .9em;
    padding-bottom:0!important;
  }
  .content-images a{
    color:black;
    text-decoration: none;
  }
  .content-image:hover{
   box-shadow: 4px 4px 4px 4px rgba(0,0,0,0.12);
   
  }
  /* @sections for media  */
  /* @media screen and max() */
  @media screen and (max-width:850px) {
    .page-wrapper{
      flex-direction: column;
      padding-top:62px;
      padding-right: 0px;
      padding-left: 0px;
    }
    .categories{
      width:100%;
      margin-bottom:20px;
    }
    .contact{
      width:100%;
    }
    .carousel-container{
      width:100%;
    }
    ul{
      padding:0px;
    }
    .categories ul li {
      display: inline; 
    }
    .categories ul li a{
      padding:10px;
    }
    .categories ul li a:hover{
      padding:10px;
      color:#fff;
      background-color:#000;
    }
    .contact{
      height: 50px;
      margin-top:20px;
    }
    .contact ul li{
      display:inline;
      padding:20px ;
    }
    
  }
  @media screen and (max-width:500px) {
    .contact ul li{
      font-size: .8em;
    }
    .contact ul li{
      padding:5px ;
    }
    .categories ul li a{
      font-size: .9em;
      padding:20px;
    }
  }
</style>