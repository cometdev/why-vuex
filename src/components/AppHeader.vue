<template>
  <div>
    <header>
      <strong>Vhy Vuex</strong>
      <span>{{ this.$store.state.account.userName }}</span>
    </header>
  </div>
</template>

<script>
export default {
	// props: {
	// 	userId: {
	// 		type: String,
	// 		required: true,
	// 		default: () => false,
	// 	},
	// },
};
</script>

<style>
</style>
