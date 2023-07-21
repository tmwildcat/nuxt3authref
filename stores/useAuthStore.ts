import {defineStore} from 'pinia'
type User ={
    id: number,
    name: string,
    email: string,
}
type Credentials = {
    email: string,
    password: string
}
type RegisterInfo ={
    name: String,
    email: string,
    password: string,
    password_confirmation: String
}
export const useAuthStore = defineStore('auth', () => {
    const user = ref<User | null>(null)
    const isLoggedIn = computed(()=> !!user.value)

    async function fetchUser(){
        const {data, error} = await useApiFetch('/api/user');
        console.log(error)
        user.value = data.value as User;

    }
    async function logout(){
        await  useApiFetch('/logout',{
            method:"POST"
        });
        user.value = null;
        navigateTo('/login')
    }
    async function login(credentials: Credentials){
        await  useApiFetch('/sanctum/csrf-cookie');
    
        const login = await  useApiFetch('/login',{
            method:"POST",
            body: credentials, 
        });
        await fetchUser();       
        return login
    }

    async function register(info: RegisterInfo){
        await  useApiFetch('/sanctum/csrf-cookie');
    
        const register = await  useApiFetch('/register',{
            method:"POST",
            body: info, 
        });
        await fetchUser();       
        return register
    }
    
    return { user, login, logout, register, isLoggedIn, fetchUser }
  })