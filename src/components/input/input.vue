<template>
  <div class="flex flex-col gap-[8px] w-full">
    <label :for="id" class="text-[14px] font-semibold text-[#000]">{{ label }}</label>
    <input
      :type="type"
      :class="inputClass"
      :name="name"
      :id="id"
      :placeholder="placeholder"
    />
  </div>
</template>

<script setup>
const props = defineProps(['label', 'type', 'name', 'id', 'placeholder']);

const inputClass = "p-4 bg-[#FFF] border-[1px] border-[#CBCBCB] rounded-[6px] text-[#CBCBCB] text-[16px] font-normal";
</script>
