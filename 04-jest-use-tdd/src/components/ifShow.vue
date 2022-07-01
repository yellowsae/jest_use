<template>
  <ul>
    <a id="profile" href="http://www.yellowsea.site">My profile</a>
    <a v-if="admin" id="admin">My profile</a>
    <a v-show="msg" id="user-show">My profile</a>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      admin: false,
      msg: false,
    };
  },
};
</script>
