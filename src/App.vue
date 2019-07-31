<template>
  <div>
    <!-- AppHeader 컴포넌트 영역 -->
    <!-- <app-header :userId="userId"></app-header> -->
    <app-header></app-header>

    <!-- AppContent -> UserForm 컴포넌트 영역 -->
    <!-- <app-content @pass2:id="logId"></app-content> -->
    <app-content></app-content>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppContent from './components/AppContent.vue';

export default {
	components: {
		AppHeader,
		AppContent,
	},
	// data() {
	// 	return {
	// 		userId: '',
	// 	};
	// },
	// methods: {
	// 	logId(value) {
	// 		this.userId = value;
	// 	},
	// },
};
</script>

<style>
</style>
