<template>

  <ul class="p-4">
    <li>
      Bounce
      <sk-bounce/>
    </li>
    <li>
      Circle
      <sk-circle/>
    </li>
    <li>
      Chase
      <sk-chase/>
    </li>
    <li>
      Circle Fade
      <sk-circle-fade/>
    </li>
    <li>
      Flow
      <sk-flow/>
    </li>
    <li>
      Fold
      <sk-fold/>
    </li>
    <li>
      Grid
      <sk-grid/>
    </li>
    <li>
      Plane
      <sk-plane/>
    </li>
    <li>
      Pulse
      <sk-pulse/>
    </li>
    <li>
      Swing
      <sk-swing/>
    </li>
    <li>
      Wander
      <sk-wander/>
    </li>
  </ul>


</template>

<script>
  import skBounce from "~/components/master/Indicators/indicators/skBounce";
  import skChase from "~/components/master/Indicators/indicators/skChase";
  import SkCircleFade from "~/components/master/Indicators/indicators/skCircleFade";
  import SkFlow from "~/components/master/Indicators/indicators/skFlow";
  import SkGrid from "~/components/master/Indicators/indicators/skGrid";
  import SkCircle from "~/components/master/Indicators/indicators/skCircle";
  import SkFold from "~/components/master/Indicators/indicators/skFold";
  import SkPlane from "~/components/master/Indicators/indicators/skPlane";
  import SkPulse from "~/components/master/Indicators/indicators/skPulse";
  import SkSwing from "~/components/master/Indicators/indicators/skSwing";
  import SkWander from "~/components/master/Indicators/indicators/skWander";

  export default {
    name: "Indicators",
    components: {
      SkWander,
      SkSwing,
      SkPulse,
      SkPlane,
      SkFold,
      SkCircle,
      SkGrid,
      SkFlow,
      SkCircleFade,
      skBounce,
      skChase
    }
  }
</script>

<style scoped>

</style>
