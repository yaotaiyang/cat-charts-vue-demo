<template>
  <div class="abc">
    <s-chart :data="lineData" :data-fields="dataFields" :size="[700,600]">
      <s-line :attrs="attrs"/>
      <s-axis :attrs="{orient:'left'}"/>
      <s-axis :attrs="{orient:'bottom'}"/>
      <s-tooltip :attrs="tooltipAttrs"/>
    </s-chart>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      attrs: {
        pos: ["10%", "10%"],
        size: ["80%", "80%"]
      },
      lineData: [
        { date: "05-01", catgory: "图例一", sales: 15.2 },
        { date: "05-02", catgory: "图例一", sales: 39.2 },
        { date: "05-03", catgory: "图例一", sales: 31.2 },
        { date: "05-04", catgory: "图例一", sales: 65.2 },
        { date: "05-05", catgory: "图例一", sales: 55.2 },
        { date: "05-06", catgory: "图例一", sales: 75.2 },
        { date: "05-07", catgory: "图例一", sales: 95.2 },
        { date: "05-08", catgory: "图例一", sales: 65.2 }
      ],
      tooltipAttrs: {
        formatter: data => `${data.city}-${data.month}-${data.value}`
      },
      dataFields: {
        row: "catgory",
        value: "sales",
        text: "date"
      }
    };
  }
};
</script>
<style>
.abc {
  height: 600px;
}
</style>

