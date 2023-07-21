<script lang="ts" setup>
import { useAuthStore } from '~/stores/useAuthStore'
const form = ref({
    email: "test@example.com",
    password: "password"
});

const auth = useAuthStore();

async function handleLogin(){

    const {error} = await auth.login(form.value);
    console.log(error);
}
</script>
<template>
    <div>
        login page: 
        <form @submit.prevent="handleLogin">
            <label>
                Email
                <input type = "email" v-model="form.email">
            </label>
            <label>
                Password
                <input type = "password" v-model="form.password">
            </label>
            <button>Login</button>

        </form>
    </div>
</template>