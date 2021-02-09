<template>
  <div
    class="container-fluid mt-5 d-flex flex-wrap justify-content-center align-items-center"
  >
    <div class="row w-100">
      <User
        :user="user"
        v-for="user in userData"
        :key="user.id"
      />
    </div>
  </div>
</template>
<script>
import User from "@/components/user/user";

export default {
  components: {
    User,
  },
  props: {
    userData: {
      required: true,
      type: Array,
    },
  },
};
</script>
