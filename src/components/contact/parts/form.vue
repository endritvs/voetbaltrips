
<template>
  <div class="px-4 pt-[24px]">
    <div class="flex flex-col gap-4">
      <h2 class="text-[20px] text-[#000] font-medium">Neem contact op</h2>
      <div class="px-4 py-[24px] border-[1px] rounded-[8px] border-[#EBEBEB]">
        <div class="flex flex-col gap-4">
          <div class="flex lg:flex-row flex-col gap-4">
            <InputField
            label="Naam"
            type="text"
            name="name"
            id="name"
            placeholder="John"
          />
          <InputField
            label="Email"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
          </div>
          <InputField
            label="Onderwerp"
            type="text"
            name="Onderwerp"
            id="Onderwerp"
            placeholder="Onderwerp"
          />
          <div class="flex flex-col gap-[8px]">
            <label class="text-[14px] font-semibold text-[#000]">Bericht</label>
            <textarea class="p-4 bg-[#FFF] border-[1px] border-[#CBCBCB] rounded-[6px] text-[#CBCBCB] text-[16px] font-normal"
             name="bericht" id="bericht" cols="10" rows="3" placeholder="Bericht"></textarea>
          </div>
          <button class="flex items-center justify-center lg:w-[35%] lg:mt-[40px] gap-[8px] text-[#fff] text-[16px] bg-[#006FEB] py-[10px] rounded-[25px]">
            Versturen <img src="../../../assets/svg/right-arrow.svg" alt="arrow" srcset="../../../assets/svg/right-arrow.svg">
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import InputField from '../../input/input.vue';
</script>