<template>
   <Teleport to="body">
      <ModalContainer>
         <div ref="modal"
            class="relative row-auto w-full rounded-xl text-left shadow-xl transition-all bg-modal-raisin-black max-w-3xl text-gray-200 p-6 space-y-6">
            <div class="flex items-center justify-between">
               <div class="w-8"></div>
               <ModalTitle>API Connect</ModalTitle>
               <CloseModal :handle-click="props.handleModal" />
            </div>
            <form class="space-y-3">
               <div class="relative">
                  <button type="submit"
                     class="absolute inset-y-0 right-3 flex items-center pointer-events-none text-kraal-purple-500">
                     <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                           d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                     </svg>
                  </button>
                  <input type="search" id="default-search"
                     class="block w-full px-5 py-4 pr-10 text-sm text-gray-100 rounded-full bg-[#181A1C] focus:outline-none"
                     placeholder="Search" value="" spellcheck="false" />
               </div>
            </form>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
               <div v-for="(item, index) in apiList" :key="index"
                  class="bg-[#343541] p-4 grid place-items-center gap-3 rounded-xl text-center">
                  <img src="../../../../../../assets/image/modal/connect/api.png" alt="api-connect"
                     class="w-8 h-8 object-contain">
                  <div class="">
                     <h4 class="font-medium">{{ item.title }}</h4>
                     <p class="text-xs text-[#8A96BC]">{{ item.description }}</p>
                  </div>
                  <div>
                     <button type="button"
                        class="h-8 rounded-lg bg-kraal-purple-500 hover:bg-kraal-purple-500/80 text-gray-100 px-4 text-sm focus:bg-[#EF466F]">Connect</button>
                  </div>
               </div>
               <AddConnect />
            </div>
         </div>
      </ModalContainer>
   </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ModalContainer from '../../../../../modal/ModalContainer.vue'
import CloseModal from '../../../../../modal/CloseModal.vue';
import ModalTitle from '../ModalTitle.vue';
import AddConnect from './AddConnect.vue';

const props = defineProps<{ handleModal: () => void }>()
const modal = ref<any>(null)

const apiList = [
   {
      title: "QuickBook",
      description: "Accounting Software",
   },
]
</script>

