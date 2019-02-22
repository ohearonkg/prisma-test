export const imports = {
  'src/components/Button/Button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-button-button" */ 'src/components/Button/Button.mdx'),
  'src/components/Card/Card.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-card-card" */ 'src/components/Card/Card.mdx'),
  'src/components/CustomSelect/CustomSelect.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-custom-select-custom-select" */ 'src/components/CustomSelect/CustomSelect.mdx'),
  'src/components/PageHeading/PageHeading.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-page-heading-page-heading" */ 'src/components/PageHeading/PageHeading.mdx'),
  'src/components/TextArea/TextArea.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-text-area-text-area" */ 'src/components/TextArea/TextArea.mdx'),
  'src/components/TextInput/TextInput.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-text-input-text-input" */ 'src/components/TextInput/TextInput.mdx'),
  'src/components/CreateExerciseForm/CreateExerciseForm.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-create-exercise-form-create-exercise-form" */ 'src/components/CreateExerciseForm/CreateExerciseForm.mdx'),
}
