<script setup lang="ts">
import { useRouter } from "vue-router";
import { useFormDataStore } from "../../../../stores/FormData";
import QContainer from "../layout/QContainer.vue";
import QHeader from "../layout/QHeader.vue";
import QMain from "../layout/QMain.vue";
import QTitle from "../layout/QTitle.vue";
import { compare } from "../../methods/Form";
import QRowButton from "../layout/QRowButton.vue";

const router: any = useRouter();
const props = defineProps<{
  id: number;
  back: () => void;
  next: () => void;
}>();
const formData: any = useFormDataStore();

function updateData(q: string): void {
  formData.$patch({ hello: q });
  props.next();
}

function prevForm(): void {
  router.replace("/");
}

const ques: string[] = [
  "1 trailer truck load",
  "5 trailer truck loads",
  "10 trailer truck loads",
];
</script>

<template>
  <QContainer>
    <QHeader :prevForm="prevForm" :title="'Hello 👋'" />
    <QMain>
      <QTitle>
        How much wood can a woodchuck chuck if a wood chuck could chuck wood?
      </QTitle>
      <QRowButton
        v-for="q in ques"
        :value="q"
        :setData="
          () => {
            updateData(q);
          }
        "
        :isActive="compare(formData.hello.woodchuck, q)"
      />
    </QMain>
  </QContainer>
</template>
