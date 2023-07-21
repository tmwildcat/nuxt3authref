<script lang="ts" setup>
    import { useAuthStore } from '~/stores/useAuthStore'
    const form = ref({
        name: "John Doe",
        email: "doe@example.com",
        password: "password",
        password_confirmation: "password"
    });

    const auth = useAuthStore();

    async function handleRegister(){

    const {error} = await auth.register(form.value);
    if (!error.value){
        navigateTo('/')
    }
}

</script>
<template>
    <div>
        register page
        <form @submit.prevent="handleRegister">
            <label>
                User Name
                <input type = "name" v-model="form.name">
            </label>
            <label>
                Email
                <input type = "email" v-model="form.email">
            </label>
            <label>
                Password
                <input type = "password" v-model="form.password">
            </label>
            <button>Register</button>

        </form>
    </div>
</template>