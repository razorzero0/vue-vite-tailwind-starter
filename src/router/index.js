// Import Vue Router functions and the HomeView component
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

// Define application routes
const routes = [
  {
    path: "/", // URL path
    name: "Home", // Route name
    component: HomeView, // Component to render
  },
];

// Create router instance with HTML5 history mode
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Export router for use in main app
export default router;
