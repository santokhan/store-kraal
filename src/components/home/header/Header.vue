<script lang="ts" setup>
import { reactive } from "vue";

import Toggler from "./nav/Toggler.vue";
import Link from "./nav/Link.vue";
import Kraal from "../../icons/kraal.vue";

const dropdown: any = reactive({ status: "hidden" });
</script>

<template>
  <div
    class="bg-noom-200 px-2 py-3 fixed w-full z-20 top-0 left-0 lg:border-b border-gray-900"
  >
    <div class="container mx-auto flex flex-wrap items-center justify-between px-4">
      <div><Kraal class="h-8 text-noom-text-800" /></div>
      <div
        class="items-center justify-between w-full hidden xl:flex md:w-auto md:order-1"
        :class="dropdown.value"
      >
        <nav
          class="flex flex-col items-center py-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-12 md:mt-0 md:font-medium md:border-0 uppercase"
        >
          <Link :href="'https//kraal.ai'">careers</Link>
          <Link :href="'https//kraal.ai'">product</Link>
          <Link :href="'https//kraal.ai'">company</Link>
          <Link :href="'https//kraal.ai'">support</Link>
          <Link :href="'https//kraal.ai'">login</Link>
          <a
            href="http://kraal.ai"
            :class="
              'bg-kraal-dark-500 hover:bg-kraal-dark-700 rounded noom-nav px-6 py-2 brown-ll ' +
              'text-white text-center font-semibold'
            "
            >learn more</a
          >
        </nav>
      </div>
      <Toggler />
    </div>
  </div>
</template>
