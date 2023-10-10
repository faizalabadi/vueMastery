<script setup>
import { useRouter } from "vue-router";
import { defineProps } from "vue";
import { inject } from "vue";

const props = defineProps(["event"]);

const router = useRouter();

const GStore = inject("GStore");

const register = () => {
  // Call to API
  // If registered then redirect to event details
  console.log(props.event.title);
  GStore.flashMessage =
    "You are successfully registered for " + props.event.title;
  setTimeout(() => {
    GStore.flashMessage = "";
  }, 3000);
  router.push({
    name: "EventDetails",
  });
};
</script>
<template>
  <p>Register for the event here</p>
  <button @click="register">Register Me</button>
</template>
