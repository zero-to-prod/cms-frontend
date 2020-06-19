<template>
    <div v-if="LOADING_INDICATOR_ON === 'true'">
        <skPlane v-if="LOADING_INDICATOR === 'sk-plane'"></skPlane>
        <skChase v-else-if="LOADING_INDICATOR === 'sk-chase'"></skChase>
        <skBounce v-else-if="LOADING_INDICATOR === 'sk-bounce'"></skBounce>
        <skWave v-else-if="LOADING_INDICATOR === 'sk-wave'"></skWave>
        <skPulse v-else-if="LOADING_INDICATOR === 'sk-pulse'"></skPulse>
        <skFlow v-else-if="LOADING_INDICATOR === 'sk-flow'"></skFlow>
        <skSwing v-else-if="LOADING_INDICATOR === 'sk-swing'"></skSwing>
        <skCircle v-else-if="LOADING_INDICATOR === 'sk-circle'"></skCircle>
        <skCircleFade v-else-if="LOADING_INDICATOR === 'sk-circle-fade'"></skCircleFade>
        <div v-else-if="LOADING_INDICATOR === 'sk-grid'" class="sk-grid">
            <div class="sk-grid-cube"></div>
            <div class="sk-grid-cube"></div>
            <div class="sk-grid-cube"></div>
            <div class="sk-grid-cube"></div>
            <div class="sk-grid-cube"></div>
            <div class="sk-grid-cube"></div>
            <div class="sk-grid-cube"></div>
            <div class="sk-grid-cube"></div>
            <div class="sk-grid-cube"></div>
        </div>
        <div v-else-if="LOADING_INDICATOR === 'sk-fold'" class="sk-fold">
            <div class="sk-fold-cube"></div>
            <div class="sk-fold-cube"></div>
            <div class="sk-fold-cube"></div>
            <div class="sk-fold-cube"></div>
        </div>
        <div v-else-if="LOADING_INDICATOR === 'sk-wander'" class="sk-wander">
            <div class="sk-wander-cube"></div>
            <div class="sk-wander-cube"></div>
            <div class="sk-wander-cube"></div>
        </div>
    </div>
</template>
<script>
  import skPlane from '~/components/Indicators/indicators/skPlane'
  import skChase from '~/components/Indicators/indicators/skChase'
  import skBounce from '~/components/Indicators/indicators/skBounce'
  import skWave from '~/components/Indicators/indicators/skWave'
  import skPulse from '~/components/Indicators/indicators/skPulse'
  import skFlow from '~/components/Indicators/indicators/skFlow'
  import skSwing from '~/components/Indicators/indicators/skSwing'
  import skCircle from '~/components/Indicators/indicators/skCircle'
  import skCircleFade from '~/components/Indicators/indicators/skCircleFade'

  export default {
    name: 'indicatorLoading',
    components: {
      skPlane,
      skChase,
      skBounce,
      skWave,
      skPulse,
      skFlow,
      skSwing,
      skCircle,
      skCircleFade
    }
  }
</script>
<style scoped></style>