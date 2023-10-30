<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useRoute, useRouter } from "vue-router";
import azureAPI from '../../kraal-api/azureAPI';
import { getCurrentUser } from '../../firebase/services';

const router = useRouter()
const route = useRoute()

async function redirect() {
    const redirect = route.query.redirect
    
    const currentUser = await getCurrentUser();
    if (currentUser && currentUser.emailVerified) {
        await azureAPI.auth.verifyEmail();
        if (typeof redirect === 'string') {
            router.push(redirect);
        } else {
            // if redirect url not found
            router.push('/kraalai');
        }
    } else {
        router.push('/user/verify');
    }
};
onBeforeMount(redirect)
</script>
