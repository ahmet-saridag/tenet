<template>
  <div class="col-md-4 col-sm-4 col-lg-4">
    <div class="image-flip">
      <div class="mainflip flip-0">
        <div class="frontside" style="width:100% !important">
          <div class="card shadow-lg border border-info">
            <div class="card-body text-center">
               <p>
                <img
                  class="img-fluid sc"
                  :src="user.photo == null ? 'https://images.unsplash.com/photo-1558522189-cf1b298644c9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' : user.photo"
                  alt="Fotoğraf Yok"
                />
              </p>
              <h4 class="card-title mt-4">
                {{ user.name }}
              </h4>
              <p class="card-text">{{ user.title }}</p>
              <a href="" class="btn btn-danger btn-sm "
                ><i class="fa fa-heart bg "></i
              ></a>
            </div>
          </div>
        </div>
        <div class="backside" style="width:100% !important">
          <div class="card border border-danger">
            <div class="card-body text-center mt-4">
              <h4 class="card-title">{{ user.name }}</h4>
              <p class="card-text">{{ user.text }}</p>
              <nuxt-link
              :to="'/auth/' + $store.state.authKey"
              tag="button"
              class="btn btn-outline-danger m-2"
              
              >
                Mesaj At
              </nuxt-link>
              <div class="card-footer mt-5">
                  <ul class="list-inline">
                <li class="list-inline-item" >
                  <a
                    class="social-icon text-xs-center p-3"
                    target="_blank"
                    :href="'https://www.facebook.com/' + user.facebook "
                  >
                    <i class="fa fa-facebook text-info "></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    class="social-icon text-xs-center p-3 text-danger"
                    target="_blank"
                    :href="'https://www.instagram.com/' + user.instagram" 
                  >
                    <i class="fa fa-instagram text-danger "></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    class="social-icon text-xs-center p-3 text-info"
                    target="_blank"
                   :href="'https://www.twitter.com/' + user.twitter"
                  >
                    <i class="fa fa-twitter text-info"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    class="social-icon text-xs-center p-3 text-info"
                    target="_blank"
                    href="https://www.instagram.com/utopyasz/?hl=tr"
                  >
                    <i class="fa fa-skype text-primary"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    class="social-icon text-xs-center p-3 text-dark"
                    target="_blank"
                    href="https://www.instagram.com/utopyasz/?hl=tr"
                  >
                    <i class="fa fa-google text-dark "></i>
                  </a>
                </li>
              </ul>
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
  props: {
    user: {
      required: true,
      type: Object,
    },
  },
  
};
</script>


<style  scoped>
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
#team {
  background: #eee !important;
}
.sc {
  object-fit: cover;
}
.btn-primary:hover,
.btn-primary:focus {
  background-color: #108d6f;
  border-color: #108d6f;
  box-shadow: none;
  outline: none;
}

.btn-primary {
  color: #fff;
  background-color: #007b5e;
  border-color: #007b5e;
}

section {
  padding: 60px 0;
}

section .section-title {
  text-align: center;
  color: #007b5e;
  margin-bottom: 50px;
  text-transform: uppercase;
}

#team .card {
  border: none;
  background: #ffffff;
}

.image-flip:hover .backside,
.image-flip.hover .backside {
  -webkit-transform: rotateY(0deg);
  -moz-transform: rotateY(0deg);
  -o-transform: rotateY(0deg);
  -ms-transform: rotateY(0deg);
  transform: rotateY(0deg);
  border-radius: 0.25rem;
}

.image-flip:hover .frontside,
.image-flip.hover .frontside {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  transform: rotateY(180deg);
}

.mainflip {
  -webkit-transition: 1s;
  -webkit-transform-style: preserve-3d;
  -ms-transition: 1s;
  -moz-transition: 1s;
  -moz-transform: perspective(1000px);
  -moz-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transition: 1s;
  transform-style: preserve-3d;
  position: relative;
}

.frontside {
  position: relative;
  -webkit-transform: rotateY(0deg);
  -ms-transform: rotateY(0deg);
  z-index: 2;
  margin-bottom: 30px;
}

.backside {
  position: absolute;
  top: 0;
  left: 0;
  background: white;
  -webkit-transform: rotateY(-180deg);
  -moz-transform: rotateY(-180deg);
  -o-transform: rotateY(-180deg);
  -ms-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
  -webkit-box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
  -moz-box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
  box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
}

.frontside,
.backside {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: 1s;
  -webkit-transform-style: preserve-3d;
  -moz-transition: 1s;
  -moz-transform-style: preserve-3d;
  -o-transition: 1s;
  -o-transform-style: preserve-3d;
  -ms-transition: 1s;
  -ms-transform-style: preserve-3d;
  transition: 1s;
  transform-style: preserve-3d;
}

.frontside .card,
.backside .card {
  min-height: 312px;
}

.backside .card a {
  font-size: 18px;
  color: #007b5e !important;
}

.frontside .card .card-title,
.backside .card .card-title {
  color: #007b5e !important;
}

.frontside .card .card-body img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}
</style>
