<template>
    <div>
      <h2>User Details</h2>
  
      <!-- Display User Info -->
      <div>
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="user.name" />
        </div>
        <!-- Add input fields for other user details (profile image, birthdate, email, description) -->
        <!-- You can use v-model to bind these inputs to data properties -->
      </div>
  
      <!-- Display Birth Year (Computed Property) -->
      <div>
        <p>Age: {{ userAge }}</p>
        <p>Birth Year: {{ userBirthYear }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed } from "vue";
  
  export default {
    setup() {
      const user = ref({
        name: "John Doe",
        // Add other user details here
        birthdate: "1990-01-01", // Format: YYYY-MM-DD
      });
  
      // Create a computed property for calculating the age from the birthdate
      const userAge = computed(() => {
        const birthdate = new Date(user.value.birthdate);
        const now = new Date();
        return now.getFullYear() - birthdate.getFullYear();
      });
  
      // Create a computed property for calculating the birth year based on the age
      const userBirthYear = computed(() => {
        const currentYear = new Date().getFullYear();
        return currentYear - userAge.value;
      });
  
      return {
        user,
        userAge,
        userBirthYear,
      };
    },
  };
  </script>
  