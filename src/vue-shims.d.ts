declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<unknown, unknown, any>; // Adjusted as per recommendations
  export default component;
}
