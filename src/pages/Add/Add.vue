<template>
  <div>
    <h2>Listas</h2>
    <ul class="add">
      <li v-for="item in items" :key="item.id">
        
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { ACTION_TYPES } from "../../store/actions";
import { httpService } from "../../http";
export default {
  name: "Add",
  
  computed: {
    ...mapState(["items"])
  },
  methods: {
    ...mapActions({
      getItems: ACTION_TYPES.GET_ITEMS
    })
  },
  mounted() {
    this.getItems(httpService);
  }
};
</script>
