<template>
  <div class="about">
    <h1>This is an about page</h1>
	<h2>Counter {{ counter }}</h2>
    <div class="counter-actions">
      <button @click="increaseCounter">
        Increase counter
      </button>
      <button @click="decreaseCounter">
        Decrease counter
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Getter, Action, namespace } from 'vuex-class';
import { COUNTER } from '../store/getters';
import { INCREASE_COUNTER, DECREASE_COUNTER } from '../store/mutation-types';

const about = namespace('about');

@Component
export default class About extends Vue {
  @about.Getter(COUNTER) private counter!: number;
  @about.Action(INCREASE_COUNTER) private increaseCounter!: () => void;
  @about.Action(DECREASE_COUNTER) private decreaseCounter!: () => void;
}
</script>