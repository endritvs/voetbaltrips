<script setup>
import HeadContact from "./parts/head-contact.vue";
import Ribbon from "./parts/ribbon.vue";
import FormComponent from "./parts/form.vue";
import Infos from "./parts/infos.vue";
import Map from "./parts/map.vue";
</script>
<template>
  <HeadContact />
  <Ribbon />
  <div class="container">
    <div class="flex flex-row lg:gap-[64px] justify-center items-center max-[1024px]:flex-col">
      <div class="w-full">
        <FormComponent />
      </div>
      <div class="w-full lg:h-[470px]">
        <Infos />
      </div>
    </div>
    <Map />
  </div>
</template>
