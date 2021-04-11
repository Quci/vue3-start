import { withModifiers, defineComponent, ref } from "vue";

const Dsd = defineComponent({
  setup() {
    const count = ref(10);

    const inc = () => {
      count.value++;
    };

    return () => (
      <div onClick={withModifiers(inc, ["self"])}>{count.value}</div>
    );
  },
});

export default Dsd
