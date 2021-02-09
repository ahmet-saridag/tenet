<template>
  <div>
    <div class="row d-flex">
      <div class="col-md-4 offset-4 mt-5 col-sm-4 col-lg-4">
        <div class="image-flip">
          <div class="mainflip flip-0">
            <div class="frontside">
              <div
                class="card shadow-lg border border-info"
                style="width: 100% !important"
              >
                <div class="card-body text-center">
                  <p>
                    <img
                      class="img-fluid sc"
                      :src="
                        user.photo == null
                          ? 'https://images.unsplash.com/photo-1558522189-cf1b298644c9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
                          : user.photo
                      "
                      alt="Fotoğraf Yok"
                    />
                  </p>
                  <h4 class="card-title mt-4">
                    {{ (user.name = null ? "Ahmet Sarıdağ" : user.name) }}
                  </h4>
                  <p class="card-text">
                    {{ (user.title = null ? "Ahmet Sarıdağ" : user.title) }}
                  </p>
                  <a href="" class="btn btn-danger btn-sm"
                    ><i class="fa fa-heart bg"></i
                  ></a>
                </div>
              </div>
            </div>
            <div class="backside" style="width: 100% !important">
              <div
                class="card border border-info"
                style="width: 100% !important"
              >
                <div class="card-body text-center mt-4">
                  <h4 class="card-title">
                    {{ user.name == null ? "Ahmet Sarıdağ" : user.name }}
                  </h4>
                  <p class="card-text">
                    {{ user.text == null ? "Ahmet Sarıdağ" : user.text }}
                  </p>
                  <div class="admin-button-container">
                    <button
                      @click.prevent="$router.push('/auth/ubdateUser')"
                      class="btn btn-outline-primary m-2"
                    >
                      Düzenle
                    </button>
                  </div>
                  <div class="card-footer mt-5">
                    <ul class="list-inline">
                      <li class="list-inline-item">
                        <a
                          class="social-icon text-xs-center p-3"
                          target="_blank"
                          :href="'https://www.facebook.com/' + user.facebook"
                        >
                          <i class="fa fa-facebook text-info"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a
                          class="social-icon text-xs-center p-3 text-danger"
                          target="_blank"
                          :href="'https://www.instagram.com/' + user.instagram"
                        >
                          <i class="fa fa-instagram text-danger"></i>
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
                          <i class="fa fa-google text-dark"></i>
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
    </div>
    <div class="container py-5 px-4">
      <div class="row rounded-lg overflow-hidden shadow">
        <div class="col-5 px-0">
          <div class="bg-white">
            <div class="bg-gray px-4 py-2 bg-light">
              <p class="h5 mb-0 py-1 text-center">Tenet / Ortak Chat</p>
            </div>

            <div class="messages-box">
              <div class="list-group rounded-0">
                <a
                  v-for="chatUser in chatUserData"
                  :key="chatUser.id"
                  class="list-group-item list-group-item-action active  text-white rounded-0"
                >
                  <div class="media">
                    <img
                      src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg"
                      alt="user"
                      width="50"
                      class="rounded-circle"
                    />
                    <div class="media-body ml-4">
                      <div
                        class="d-flex align-items-center justify-content-between mb-1"
                      >
                        <h6 class="mb-0">{{ chatUser.name }}</h6>
                        <small class="small font-weight-bold">15 Feb</small>
                      </div>
                      <p class="font-italic mb-0 text-small">
                        {{ chatUser.title }}
                      </p>
                    </div>
                  </div>
                </a>

                <!-- <a
                  href="#"
                  class="list-group-item list-group-item-action list-group-item-light rounded-0"
                > -->
                  <!-- <div class="media">
                    <img
                      src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg"
                      alt="user"
                      width="50"
                      id="box"
                      class="rounded-circle"
                    />
                    <div class="media-body ml-4">
                      <div
                        class="d-flex align-items-center justify-content-between mb-1"
                      >
                        <h6 class="mb-0">Jason Doe</h6>
                        <small class="small font-weight-bold">14 Dec</small>
                      </div>
                      <p class="font-italic text-muted mb-0 text-small">
                        Lorem ipsum dolor sit amet, consectetur. incididunt ut
                        labore.
                      </p>
                    </div>
                  </div> -->
                <!-- </a> -->
              </div>
            </div>
          </div>
        </div>
        <!-- Chat Box-->
        <div class="col-7 px-0 w-100">
          <div class="px-4 py-3 chat-box bg-white w-100" id="chat-history">
            <div
              v-for="message in messages"
              :key="message.id"
              :class="
                message.messageId == messageInfo
                  ? 'media w-50 ml-auto mb-auto'
                  : 'media w-50 mr-auto mb-auto'
              "
            >
              <img
                src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg"
                alt="user"
                width="50"
                class="rounded-circle img-fluid"
                 id="box"
                v-if="message.messageId != messageInfo"
              />
              <div
                class="media-body"
                :class="
                  message.messageId == messageInfo
                    ? 'media-body'
                    : 'media-body ml-3'
                "
              >
              <p
                    class="text-small mb-0 text-white"
                    :class="
                      message.messageId == messageInfo
                        ? 'text-small mb-0 text-primary text-center'
                        : 'text-small mb-0 text-primary text-center'
                    "
                  >
                    {{ message.userName }}
                  </p>
                <div
                  class="bg-primary rounded py-2 px-3 mb-2"
                  :class="
                    message.messageId == messageInfo
                      ? 'bg-primary rounded py-2 px-3 mb-2'
                      : 'bg-light rounded py-2 px-3 mb-2'
                  "
                >
                  <p
                    class="text-small mb-0 text-white"
                    :class="
                      message.messageId == messageInfo
                        ? 'text-small mb-0 text-white'
                        : 'text-small mb-0 text-muted'
                    "
                  >
                    {{ message.message }}
                  </p>
                </div>
                <p class="small text-muted">
                  {{ message.saat }}:{{ message.dakika }} PM |
                  {{ message.gün }}/{{ message.ay + 1 }}/{{ message.yıl }}
                </p>
              </div>
            </div>
          </div>

          <!-- Typing area -->
          <form class="bg-light">
            <div class="input-group">
              <input
                v-model="message"
                @keyup.enter="saveMessage"
                type="text"
                placeholder="Bir şeyler yaz.."
                aria-describedby="button-addon2"
                class="form-control rounded-0 border-0 py-4 bg-light"
              />
              <div class="input-group-append">
                <button
                  @click.prevent="saveMessage"
                  id="button-addon2"
                  type="submit"
                  class="btn btn-link"
                >
                  <i class="fa fa-paper-plane p-3"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  layout: "auth",
  middleware: ["session-control", "auth"],
  props: {
    user: {
      required: true,
    },
    messages: {
      required: true,
      type: Array,
    },
    chatUserData: {
      required: true,
      type: Array,
    },
  },
  data() {
    return {
      message: null,
      messageInfo: null,
    };
  },
  methods: {
    saveMessage() {
      this.$emit("messageData", this.message);
      this.message = null;
      setTimeout(() => {
        var scrollHeight = 6000;
        document.getElementById("chat-history").scrollTop = scrollHeight;
      }, 500);
    },
    knowMessage() {
      this.messageInfo = this.$route.params.userId;
    },
  },

  created() {
    this.knowMessage();
  },
};
</script>

<style  scoped>
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-corner {
  margin: 0px;
  bottom: 0px;
}
::-webkit-scrollbar-track {
  width: 5px;
  background: #f5f5f5;
}

::-webkit-scrollbar-thumb {
  width: 1em;
  background-color: #ddd;
  outline: 1px solid slategrey;
  border-radius: 1rem;
}

.text-small {
  font-size: 0.9rem;
}

.messages-box,
.chat-box {
  height: 510px;
  overflow-y: scroll;
}

.rounded-lg {
  border-radius: 0.5rem;
}

input::placeholder {
  font-size: 0.9rem;
  color: #999;
}
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
