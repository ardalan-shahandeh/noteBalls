<template>
  <div class="home" ref="myDiv">

    <h2 ref="appTitleRef">{{ appTitle }}</h2>

    <h3>{{ counterData.title }}</h3>

    <div>
      <button @click="decreaseCounter(amount, $event)" class="btn">--</button>
      <button @click="decreaseCounter(amount, $event)" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter(1, $event)" class="btn">+</button>
      <button @click="increaseCounter(2, $event)" class="btn">++</button>
    </div>

    <p>This counter is {{ oddOrEven }}</p>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input v-model="counterData.title" type="text" v-autofocus/>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed, onMounted, nextTick } from "vue";
import { vAutofocus } from "@/directives/vAutofocus";

const appTitle = "My Amazing Counter App";

const appTitleRef = ref(null)

onMounted(()=> {
  console.log(appTitleRef.value.offsetWidth);
})

// const counter = ref(0),
// counterTitle = ref("My Counter");

const counterData = reactive({
  count: 0,
  title: "My Counter",
});

const oddOrEven = computed(() => {
  if (counterData.count % 2 === 0) {
    return "even";
  } else return "odd";
});

const increaseCounter = (amount) => {
  counterData.count += amount;
  this.$nextTick(() => {
    
  })
};

const decreaseCounter = (amount) => {
  counterData.count -= amount;
};
</script>

<!--
<script>
import { ref } from 'vue';

export default {
  setup() {
    const counter = ref(0)

    const increaseCounter = () => {
      counter.value++
    }
    const decreaseCounter = () => {
      counter.value--
    }

    return { counter, decreaseCounter, increaseCounter}
  }
}
</script>
-->

<!--<script>
export default {
  data() {
    return {
      counter : 0
    }
  },
  methods: {
    increaseCounter () {
      this.counter++
    },
    decreaseCounter() {
      this.counter--
    }
  },
}
</script>-->

<style>
.home {
  text-align: center;
  padding: 20px;
}

.btn,
.counter {
  font-size: 40px;
  margin: 10px;
}
</style>
