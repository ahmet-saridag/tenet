<template>
  <Profile
    :user="user"
    @messageData="messageData($event)"
    :messages="this.messages"
     :chatUserData="getUserData"
  />
</template>

<script>
import Profile from "@/components/profile/profile";
import axios from "axios";
export default {
  components: {
    Profile,
  },
  layout: "auth",
  middleware: ["session-control", "auth"],
  data() {
    return {
      messages: [],
      blueMessage: true,
    };
  },
  asyncData(context) {
    // Mesajların array halinde getirilmesi

    // Auth key'e sahip kullancı profili getirilmesi
    let lastUser;
    lastUser = context.store.state.userData.find(
      (c) => c.id == context.params.userId
    );
    context.store.commit("setChatName", lastUser)
    if (lastUser == null) {
      context.redirect("/auth/newUser");
    } else {
      lastUser = lastUser.firebaseId;
      context.store.commit("setProfileFirebaseName", lastUser) ;    
      return axios
        .get(
          "https://tenet-ceb48-default-rtdb.firebaseio.com/user/" +
            lastUser +
            ".json"
        )
        .then((res) => {
          return {
            user: res.data,
          };
        });
    }
  },
  computed: {
    getUserData() {
      return this.$store.getters.getUserData;
    },
  },
  methods: {
    messageData(message) {
      this.$store.dispatch("sendMessage", message);
    },
    fetchMessages() {
      this.$fire.firestore
        .collection("chat")
        .orderBy("createAt")
        .onSnapshot((querySnapshot) => {
          let allMessages = [];
          querySnapshot.forEach((doc) => {
            allMessages.push(doc.data());
          });
          this.messages = allMessages;
        });
    },
  },
  created() {
    this.fetchMessages();
  },
};
</script>

