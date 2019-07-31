<template>
  <div>
    <!-- <user-form @pass:id="passEvent"></user-form> -->
    <user-form></user-form>
  </div>
</template>

<script>
import UserForm from './UserForm.vue';

export default {
	components: {
		UserForm,
	},
	// methods: {
	// 	passEvent(value) {
	// 		this.$emit('pass2:id', value);
	// 	},
	// },
};
</script>

<style>
</style>
