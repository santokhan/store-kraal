<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { onBeforeMount } from 'vue';
import logout from '../../components/form/logout/logout';

const router = useRouter();
// This `"/user/sign-out"` route will used to log out the current user
onBeforeMount(() => {
    logout(() => {
        // redirect to home after logged out
        router.replace("/");
    });
})
</script>
  