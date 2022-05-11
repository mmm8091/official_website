<template></template>
<script>
export default {
  name: "Msg",
  mounted() {
    let readkey = localStorage.getItem('20210516');
    if (readkey == false || readkey == null) {
      localStorage.setItem('20210516', 'true');
      this.$notification.open({
        message: "感谢您的关注",
        description: "RCIT 工合社是一个以经济为主的先进合作社组织",

        duration: 0,
        placement: "bottomRight",
        key: "20210516"
      });
    }
  }
};
</script>
