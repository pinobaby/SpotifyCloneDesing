<!-- 

<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-spotify-gradient text-white overflow-x-hidden">
    <div class="max-w-md w-full space-y-8 p-10 bg-spotify-backgroundMainContent rounded-lg sm:max-w-lg lg:max-w-2xl">
      <div>
        <img class="mx-auto h-12 w-auto" src="../assets/spotifyLogo.png" alt="Spotify" />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-white">
          Sign up to start listening
        </h2>
      </div>
      <div class="flex flex-col space-y-4 justify-center mx-20 w-2/3">
        <button @click="handleGoogleLogin"
          class="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-full shadow-sm text-sm font-medium text-white hover:border-white bg-spotify-backgroundMainContent">
          <img class="w-5 h-5 mr-2" src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" />
          Sign up with Google
        </button>
        <button @click="handleFacebookLogin"
          class="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-full shadow-sm text-sm font-medium text-white hover:border-white bg-spotify-backgroundMainContent">
          <img class="w-5 h-5 mr-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt="Facebook" />
          Sign up with Facebook
        </button>
        <button @click="handleAppleLogin"
          class="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-full shadow-sm text-sm font-medium text-white hover:border-white bg-spotify-backgroundMainContent">
          <img class="w-5 h-5 mr-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQesa2rF2WhrA7Sl3iIoznL-gFpA0y0GB-tQ&s" alt="Apple" />
          Sign up with Apple
        </button>
      </div>
      <div class="mt-6">
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-center text-sm"></div>
        </div>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
        <div class="flex mx-24 mb-2">Email or username</div>
        <div class="rounded-md -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input v-model="email" id="email-address" name="email" type="email" autocomplete="email" required
              class="appearance-auto mx-24 w-2/3 px-3 py-2 mb-1 bg-spotify-backgroundMainContent border hover:border-white border-gray-300 placeholder-gray-500 text-white rounded-t-md focus:outline-none focus:ring-white focus:border-white focus:z-10 sm:text-sm"
              placeholder="Email address" />
          </div>
        </div>
        <div class="rounded-md -space-y-px">
          <div>
            <label for="password" class="sr-only">Password</label>
            <input v-model="password" id="password" name="password" type="password" autocomplete="password" required
              class="appearance-auto mx-24 w-2/3 px-3 py-2 mb-1 bg-spotify-backgroundMainContent border hover:border-white border-gray-300 placeholder-gray-500 text-white rounded-t-md focus:outline-none focus:ring-white focus:border-white focus:z-10 sm:text-sm"
              placeholder="Password" />
          </div>
        </div>
        <div>
          <div class="flex items-start justify-start ml-24 mb-2">
            <div class="text-sm">
              <a href="#" class="font-medium text-green-600 hover:text-green-500">
                Use phone number instead
              </a>
            </div>
          </div>
          <button type="submit"
            class="appearance-auto mx-24 w-2/3 px-3 py-2 mb-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            Sign in
          </button>
        </div>
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-spotify-backgroundMainContent text-white">or</span>
          </div>
        </div>
        <div class="text-center mt-6">
          <router-link to="/login" class="font-medium text-white">
            Already have an account? Log in here.
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { registerWithEmailAndPassword, signInWithGoogle, signInWithFacebook, signInWithApple } from '../services/authService';

const email = ref('');
const password = ref('');
const router = useRouter();

const handleGoogleLogin = async () => {
  try {
    await signInWithGoogle();
    router.push('/home'); 
  } catch (error) {
    console.error('Error signing up with Google:', error);
    alert('Failed to sign up with Google. Please try again.');
  }
};

const handleFacebookLogin = async () => {
  try {
    await signInWithFacebook();
    router.push('/home'); 
  } catch (error) {
    console.error('Error signing up with Facebook:', error);
    alert('Failed to sign up with Facebook. Please try again.');
  }
};

const handleAppleLogin = async () => {
  try {
    await signInWithApple();
    router.push('/home'); 
  } catch (error) {
    console.error('Error signing up with Apple:', error);
    alert('Failed to sign up with Apple. Please try again.');
  }
};

const handleSubmit = async () => {
  try {
    await registerWithEmailAndPassword(email.value, password.value);
    router.push('/home'); 
  } catch (error) {
    console.error('Error registering user:', error);
    alert('Failed to register. Please try again.');
  }
};
</script>

<style scoped>
.sig-up-container {
  display: block;
  height: 100vh;
  overflow: hidden;
}
</style>

 -->
 <template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-spotify-backgroundMainContent text-white overflow-x-hidden">
    <div class="max-w-md w-full space-y-8 p-10 bg-spotify-backgroundMainContent rounded-lg sm:max-w-lg lg:max-w-2xl">
      <div>
        <img class="mx-auto h-12 w-auto" src="../assets/spotifyLogo.png" alt="Spotify" />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-white">
          Sign up to start listening
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input v-model="email" id="email-address" name="email" type="email" autocomplete="email" required
            class="appearance-none rounded-none relative block w-full px-3 py-2 bg-spotify-backgroundMainContent border border-gray-300 placeholder-gray-500 text-white rounded-t-md focus:outline-none focus:ring-white focus:border-white focus:z-10 sm:text-sm"
            placeholder="Email address" />
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input v-model="password" id="password" name="password" type="password" autocomplete="current-password" required
            class="appearance-none rounded-none relative block w-full px-3 py-2 bg-spotify-backgroundMainContent border border-gray-300 placeholder-gray-500 text-white rounded-b-md focus:outline-none focus:ring-white focus:border-white focus:z-10 sm:text-sm"
            placeholder="Password" />
        </div>
        <div class="flex items-center justify-between">
          <div class="text-sm">
            <a href="#" class="font-medium text-green-600 hover:text-green-500">
              Use phone number instead
            </a>
          </div>
        </div>
        <div>
          <button type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-full text-black bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            Next
          </button>
        </div>
        <div class="relative my-6">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-400"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-spotify-backgroundMainContent text-white">or</span>
          </div>
        </div>
        <div class="flex flex-col space-y-4">
          <button @click.prevent="handleFacebookSignIn"
            class="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-full shadow-sm text-sm font-medium text-white bg-spotify-backgroundMainContent hover:border-white">
            <img class="w-5 h-5 mr-2"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
              alt="Facebook" />
            Sign up with Facebook
          </button>
          <button @click.prevent="handleGoogleSignIn"
            class="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-full shadow-sm text-sm font-medium text-white bg-spotify-backgroundMainContent hover:border-white">
            <img class="w-5 h-5 mr-2" src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" />
            Sign up with Google
          </button>
          <button @click.prevent="handleAppleSignIn"
            class="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-full shadow-sm text-sm font-medium text-white bg-spotify-backgroundMainContent hover:border-white">
            <img class="w-5 h-5 mr-2"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQesa2rF2WhrA7Sl3iIoznL-gFpA0y0GB-tQ&s"
              alt="Apple" />
            Sign up with Apple
          </button>
        </div>
        <div class="text-center mt-6">
          <router-link to="/login" class="font-medium text-white">
            Already have an account? Log in here.
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { registerWithEmailAndPassword, signInWithFacebook, signInWithGoogle, signInWithApple } from '../services/authService';

const email = ref<string>('');
const password = ref<string>('');
const router = useRouter();

const handleSubmit = async () => {
  if (email.value && password.value) {
    try {
      await registerWithEmailAndPassword(email.value, password.value);
      router.push('/');
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Failed to register. Please try again.');
    }
  } else {
    alert('Email and password are required');
  }
};

const handleFacebookSignIn = async () => {
  try {
    await signInWithFacebook();
    router.push('/');
  } catch (error) {
    console.error('Error signing up with Facebook:', error);
    alert('Failed to sign up with Facebook. Please try again.');
  }
};

const handleGoogleSignIn = async () => {
  try {
    await signInWithGoogle();
    router.push('/');
  } catch (error) {
    console.error('Error signing up with Google:', error);
    alert('Failed to sign up with Google. Please try again.');
  }
};

const handleAppleSignIn = async () => {
  try {
    await signInWithApple();
    router.push('/');
  } catch (error) {
    console.error('Error signing up with Apple:', error);
    alert('Failed to sign up with Apple. Please try again.');
  }
};
</script>

<style scoped>
/* Aquí puedes agregar estilos adicionales si es necesario */
</style>
