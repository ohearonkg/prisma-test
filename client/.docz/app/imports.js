export const imports = {
  'src/components/Button/Button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-button-button" */ 'src/components/Button/Button.mdx'),
  'src/components/CreateExerciseForm/CreateExerciseForm.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-create-exercise-form-create-exercise-form" */ 'src/components/CreateExerciseForm/CreateExerciseForm.mdx'),
  'src/components/TextArea/TextArea.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-text-area-text-area" */ 'src/components/TextArea/TextArea.mdx'),
  'src/components/TextInput/TextInput.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-text-input-text-input" */ 'src/components/TextInput/TextInput.mdx'),
  'src/components/CustomSelect/CustomSelect.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-custom-select-custom-select" */ 'src/components/CustomSelect/CustomSelect.mdx'),
}
