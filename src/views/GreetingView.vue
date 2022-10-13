<template>

    <div class="container-fluid mt-5">
        <a-collapse v-model:activeKey="activeKey">
        <a-collapse-panel key="1" header="This is panel header 1">
            <p>{{ text }}</p>
        </a-collapse-panel>
        <a-collapse-panel key="2" header="This is panel header 2">
            <p>{{ text }}</p>
        </a-collapse-panel>
        <a-collapse-panel key="3" header="This is panel header 3">
            <p>{{ text }}</p>
        </a-collapse-panel>
        </a-collapse>
    </div>
    
</template>

  <script>

    import { defineComponent, ref, watch } from 'vue';

    export default defineComponent({
        setup() {
        const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`;
        const activeKey = ref(['1']);
        watch(activeKey, val => {
            console.log(val);
        });
        return {
            text,
            activeKey,
        };
        },
    
    });

  </script>

<!-- <template>
    <div class="about">
      <h1>This is an about page</h1>
      <a-button type="primary">Add</a-button>
    </div>
  </template>
  
  <script>
    import { Button } from 'ant-design-vue';
    

    export default {
        components: {
        AButton: Button
        }
    };
</script> -->