<template>
  <div>
    <form @submit.prevent="loginUser">
      <div>
        id:
        <input type="text" v-model="userId" />
      </div>
      <div>
        pw:
        <input type="password" v-model="userPw" />
      </div>
      <button>login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			userId: '',
			userPw: '',
		};
	},
	methods: {
		loginUser() {
			this.$store.dispatch('LOGIN', this.userId);

			// this.$emit('pass:id', this.userId);
			// this.userId = '';
			// this.$store.commit('setUserId', this.userId);
		},
	},
};
</script>

<style>
</style>
