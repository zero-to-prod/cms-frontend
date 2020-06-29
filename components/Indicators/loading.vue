<template>
  <sk-plane v-if="LOADING_INDICATOR === 'sk-plane' && LOADING_INDICATOR_ON !== 'false'"></sk-plane>
  <sk-chase v-else-if="LOADING_INDICATOR === 'sk-chase' && LOADING_INDICATOR_ON !== 'false'"></sk-chase>
  <sk-bounce v-else-if="LOADING_INDICATOR === 'sk-bounce' && LOADING_INDICATOR_ON !== 'false'"></sk-bounce>
  <sk-wave v-else-if="LOADING_INDICATOR === 'sk-wave' && LOADING_INDICATOR_ON !== 'false'"></sk-wave>
  <sk-pulse v-else-if="LOADING_INDICATOR === 'sk-pulse' && LOADING_INDICATOR_ON !== 'false'"></sk-pulse>
  <sk-flow v-else-if="LOADING_INDICATOR === 'sk-flow' && LOADING_INDICATOR_ON !== 'false'"></sk-flow>
  <sk-swing v-else-if="LOADING_INDICATOR === 'sk-swing' && LOADING_INDICATOR_ON !== 'false'"></sk-swing>
  <sk-circle v-else-if="LOADING_INDICATOR === 'sk-circle' && LOADING_INDICATOR_ON !== 'false'"></sk-circle>
  <sk-circle-fade v-else-if="LOADING_INDICATOR === 'sk-circle-fade' && LOADING_INDICATOR_ON !== 'false'"></sk-circle-fade>
  <sk-grid v-else-if="LOADING_INDICATOR === 'sk-grid' && LOADING_INDICATOR_ON !== 'false'"></sk-grid>
  <sk-fold v-else-if="LOADING_INDICATOR === 'sk-fold' && LOADING_INDICATOR_ON !== 'false'"></sk-fold>
  <sk-wander v-else-if="LOADING_INDICATOR === 'sk-wander' && LOADING_INDICATOR_ON !== 'false'"></sk-wander>
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
  import skGrid from "~/components/Indicators/indicators/skGrid"
  import skFold from "~/components/Indicators/indicators/skFold"
  import skWander from "~/components/Indicators/indicators/skWander"

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
      skCircleFade,
      skGrid,
      skFold,
      skWander
    }
  }
</script>
<style scoped></style>
