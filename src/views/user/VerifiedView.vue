<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useRoute, useRouter } from "vue-router";

const router = useRouter()
const route = useRoute()

async function redirect() {
    const redirect = route.query.redirect
    if (typeof redirect === 'string') {
        router.push(redirect);
    } else {
        // if redirect url not found
        router.push('/kraalai');
    }
};
onBeforeMount(redirect)
</script>
