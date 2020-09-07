<template>
  <div class="row justify-content-center page-wrapper">
    <div class="col-6 carousel-container">
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
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
    height: 500px;
    border-radius:10px;
    border:2px solid #f5f5f5;
    background-position: center;
    background-size: cover;
    background-repeat:no-repeat;
  }
</style>