<template>
	<!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view /> -->
	<div class="h-full">
		<!--Nav-->
		<Nav></Nav>

		<!--Main-->
		<div
			class="
				container
				pt-24
				md:pt-16
				mx-auto
				flex flex-wrap flex-col
				md:flex-row-reverse
				items-center
			"
		>
			<router-view></router-view>

			<!--Footer-->
			<Footer></Footer>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Footer from '@/components/Footer.vue'
import Nav from '@/components/Nav.vue'

export default defineComponent({
	components: {
		Footer: Footer,
		Nav: Nav,
	},
})
</script>
