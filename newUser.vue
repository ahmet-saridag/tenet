<template>
  <div
    class="container-fluid mt-5 d-flex flex-wrap justify-content-center align-items-center"
  >
    <form style="width: 500px"  @submit="onSubmit">
      <fieldset>
        <legend class="text-center text-danger" >
          Yeni Profil Oluştur
        </legend>

        <div class="form-group">
          <label>Ad Soyad</label>
          <input
            v-model="$v.user.name.$model"
            @blur="$v.user.name.$touch()"
            type="text"
            class="form-control"
            placeholder="Adınızı ve Soyadınızı giriniz.."
          />
        </div>
         <small v-if="!$v.user.name.maxLength" class="form-text text-danger"
            >Fazla uzun knk</small
          >
        <div class="form-group">
          <label>Havalı bir cümle kur</label>
          <input
            v-model="$v.user.title.$model"
            @blur="$v.user.title.$touch()"
            type="text"
            class="form-control"
            placeholder="Ne yani böylesine korkunç bir dünyanın bir de cehennemi mi var?"
          />
          <small v-if="!$v.user.title.maxLength" class="form-text text-danger"
            >Fazla uzun knk</small
          >
        </div>
         <div class="form-group">
          <input
            ref="file"
            type="file"
            @change="processFile($event)"
            value="En güzel / yakışıklı fotoğrafın"
            style="display: none"
          />
          <button
            class="btn btn-outline-info"
            @click.prevent="$refs.file.click()"
          >
            Resim Seç
          </button>
            <!-- <small v-if="!$v.user.photo.required" class="form-text text-info"
            >Bu alan zorunlu knks</small
          > -->
        </div>
        <div class="form-group">
          <label>Kısaca kendinden bahset</label>
          <textarea
            @blur="$v.user.text.$touch()"
            v-model="$v.user.text.$model"
            placeholder="Örn: Merhaba ben Ahmet / Burcu, daha önce hiç date'e çıkmadım ama umarım tenet sayesinde güzel bir başlangış yapmış olurum tanışalım mı ? "
            class="form-control"
            rows="5"
          ></textarea>
          <small v-if="!$v.user.text.minLength" class="form-text text-danger"
            >Bu kadar kısa olmamalı knk</small
          >
           <small v-if="$v.user.text.minLength && $v.user.text.maxLength && $v.user.text.required " class="form-text text-success"
            >Helal</small
          >
           <small v-if="!$v.user.text.maxLength" class="form-text text-danger"
            >Yeter knk tarih mi yazıyorsun 100 karakteri geçmesin :)</small
          >
        </div>
        <div class="form-group d-flex border">
          <input class="form-control w-50" type="text" placeholder="http://www.twitter.com/" readonly>
          <input  v-model="user.twitter"  class="form-control w-50" type="text" placeholder="Kullanıcı Adı">
        </div>
        <div class="form-group d-flex border">
          <input class="form-control w-50" type="text" placeholder="http://www.facebook.com/" readonly>
          <input  v-model="user.facebook" class="form-control w-50" type="text" placeholder="Kullanıcı Adı">
        </div>
        <div class="form-group d-flex border">
          <input class="form-control w-50" type="text" placeholder="http://www.instagram.com/" readonly>
          <input v-model="user.instagram"  class="form-control w-50" type="text" placeholder="Kullanıcı Adı">
        </div>
        <button @click="$router.push('/auth')" class="btn btn-danger">
          İptal
        </button>
        <button
          :disabled="$v.$invalid"
          type="submit"
          class="btn btn-primary"
        >
          Oluştur
        </button>
      </fieldset>
    </form>
    <div class="col-xs-8 col-sm-2 col-md-4 sce">
      <div class="image-flip">
        <div class="mainflip flip-0">
          <div class="frontside">
            <div class="card">
              <div class="card-body text-center">
                <p>
                  <img
                    class="img-fluid cv"
                    :src="
                      user.photo == null
                        ? 'https://images.unsplash.com/photo-1611900955899-439970b4395b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
                        : user.photo
                    "
                    alt="card image"
                  />
                </p>
                <h4 class="card-title">
                  {{ user.name == null ? "Burcu Kaya" : user.name }}
                </h4>
                <p class="card-text">
                  {{
                    user.title == null
                      ? "Yalnızlığı çok seversek o da birgün gider mi -Oğuz Atay"
                      : user.title
                  }}
                </p>
                <a
                  href="https://www.fiverr.com/share/qb8D02"
                  class="btn btn-danger btn-sm"
                  ><i class="fa fa-heart"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="backside">
            <div class="card">
              <div class="card-body text-center mt-4">
                <h4 class="card-title">
                  {{ user.name == null ? "Burcu Kaya" : user.name }}
                </h4>
                <p class="card-text p-3">
                  {{
                    user.text == null
                      ? "Merhaba ben Burcu daha önce hiç date e çıkmadım ama umarım tenet sayesinde güzel bir başlangış yapmış olurum tanışalım mı ?"
                      : user.text
                  }}
                </p>
                <div class="card-footer">
                  <button class="btn btn-outline-danger">Mesaj At</button>
                </div>
                <ul class="list-inline">
                  <li class="list-inline-item">
                    <a
                      class="social-icon text-xs-center"
                      target="_blank"
                      href="https://www.instagram.com/utopyasz/?hl=tr"
                    >
                      <i class="fa fa-instagram text-danger"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a
                      class="social-icon text-xs-center"
                      target="_blank"
                      href="https://www.instagram.com/utopyasz/?hl=tr"
                    >
                      <i class="fa fa-twitter text-info"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a
                      class="social-icon text-xs-center"
                      target="_blank"
                      href="https://www.instagram.com/utopyasz/?hl=tr"
                    >
                      <i class="fa fa-skype text-info"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a
                      class="social-icon text-xs-center "
                      target="_blank"
                      href="https://www.instagram.com/utopyasz/?hl=tr"
                    >
                      <i class="fa fa-google"></i>
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
import {
  required,
  email,
  numeric,
  minLength,
  maxLength,
  sameAs,
  between,
} from "vuelidate/lib/validators";
export default {
  data() {
    return {
      user: {
        title: null,
        photo: null,
        name: null,
        text: null,
        twitter: null,
        facebook: null,
        instagram:null,

      },
    };
  },
  validations: {
    user: {
      title: {
        required,
        minLength: minLength(5),
        maxLength: maxLength(200),
      },
      // photo: {
      //   required,
      // },
      name: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(40),
      },
      text: {
        required,
        minLength: minLength(5),
         maxLength: maxLength(250),
      },
    },
  },
  methods: {
    processFile(event) {
      const file = event.target.files[0];
      this.user.photo = URL.createObjectURL(file);
    },
    onSubmit() {
      this.$emit("submit", this.user);
    },
  },
};
</script>
<style  scoped>
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
#team {
  background: #eee !important;
}
.cv {
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